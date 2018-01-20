import React, { Component } from 'react'
import axios from 'axios'
import Tabtit from './tabtit.jsx'
import Tab from './Tab.jsx'
import style from './style.scss'
import mock from '../../../mock'
mock()
let lock = true

class sj extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ["全部", "待开奖", "已中奖"],
            titnav: ["购彩记录"],
            orderlist: [],
            pageIndex: 1,
            Index: 0
        }
    }
    componentDidMount() {
        this.request('/100125', 1, 0)
        document.addEventListener('scroll', () => {
            const stop = document.documentElement.scrollTop
                ? document.documentElement.scrollTop
                : document.body.scrollTop
            const winerH = window.innerHeight
            const divheight = document.body.offsetHeight - winerH
            if (divheight - stop < 200) {
                if (lock === true) {

                    this.setState({
                        pageIndex: this.state.pageIndex + 1
                    })
                    this.request('/100125', this.state.pageIndex, 0)

                }
                lock = false
            }
        }, false)
    }
    request(url, pageIndex, prizeTabStatus) {

        axios.post(url, {
            message: {
                "data": { "prizeTabStatus": prizeTabStatus },
                "page": { "pageIndex": pageIndex, "pageSize": 20, "total": 577 },
                "command": "100125",
                "nonce": new Date().getTime()
            }
        })
            .then((res) => {
                if (res.data.code !== 0) return
                setTimeout(() => {
                    lock = true
                }, 3000)
                this.setState({
                    orderlist: this.state.orderlist.concat(res.data.data.data)
                })

            })

    }
    setActiveId(id) {
        this.setState({
            Index: id,
            orderlist: []
        })

        this.request('/100125', 1, id)
    }

    render() {
        const { orderlist, title, Index, titnav } = this.state
        console.log(orderlist)
        return (
            <div className="divbox">
                <div className="titnav">{titnav}</div>
                <Tab>
                    {
                        React.Children.map(title, (child, id) => {
                            return <Tabtit
                                id={id}
                                text={child}
                                getActiveId={::this.setActiveId}
                                        activeclass={Index === id ? 'activebg' : ''}
                    />
                        })
                    }
                </Tab>
                <div className="divli" ref={(e) => { this.wrap = e }}>
                    {
                        orderlist.map((item, index) => {
                            return <div
                                className="libox"
                                style={{ height: '100px' }}
                                key={index}>
                                <div className="liboxtop">

                                </div>
                                <div className="liboxbom">
                                    <div className="bomleft">
                                        <img src={item.iconUrl} alt="" />
                                    </div>
                                    <div className="bomcon">
                                        <span>{item.lotteryTypeName}</span>
                                        <span>订单号：{item.orderId}</span>
                                    </div>
                                    <div className="bomright">
                                        <span>
                                            ￥{item.amount}
                                        </span>
                                        <span>{item.betTime}</span>
                                    </div>
                                </div>
                                
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default sj