import React, { Component } from 'react'
import { connect } from 'dva';
import { makeFormatedBalance } from '../../models/selector/Home'
import ListBox from '../../components/ListBox'
import style from './Home.scss'
import Swiper from '../../components/Swiper'
import {
    Route,
    Link
  } from 'react-router-dom'
class Home extends Component {
    componentDidMount() {

        const { dispatch } = this.props
        dispatch({
            type: "Home/fetch"
        })
    }
    getID(id) {
        console.log(id)
    }
    render() {
        const { datalist } = this.props
        return (
            <div className={style.App}>
                <div className={style.heads}>京东</div>
                <div className={style.const}>
                    <Swiper />
                    {
                        datalist !== undefined ?
                            <ListBox
                                getId={this.getID.bind(this)}
                                datalist={datalist} /> : ""
                    }

                </div>
                <footer className={style.foot}>
                    <Link to="/">首页</Link>
                    <Link to="/IndexPage">分类</Link>
                    <Link to="/Find">发现</Link>
                    <Link to="/ShoppCar">购物车</Link>
                    <Link to="/My">我的</Link>
                </footer>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        datalist: makeFormatedBalance(state)
    };
}
export default connect(mapStateToProps)(Home);

