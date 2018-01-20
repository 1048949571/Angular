import React, { Component } from 'react'
import style from './DEtaIle.scss'
class DEtaIle extends Component {

    render() {
        const { ID, datalist } = this.props
        console.log(datalist,"45646")
        return (<div>
            {
                datalist !== null ? datalist.wareInfoList.map((item, index) => {
                    return <div key={index}>
                        {
                            (item.wareId) == (ID) ? <div className={style.detabox}>
                                <div className={style.boximg}>
                                    <img src={item.imageurl} alt="" /></div>
                                <div className={style.boxp}>
                                    <p>{item.wname}</p>
                                    <p>关注</p>
                                    </div>
                                <div className={style.boxcons}>
                                    <span>￥{item.jdPrice}</span>
                                    <span></span>
                                    </div>
                            </div> : ""
                        }
                    </div>
                }) : ""
            }
        </div>
        )
    }
}

export default DEtaIle


