import React, { Component } from 'react';
import style from './Register.scss'
import {
    Route,
    Link
  } from 'react-router-dom';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            items: [
                { val: "0.88", txt: "账户余额" },
                { val: "0.66", txt: "红包余额" }
            ]
        }
    }
    render() {
        const { items } = this.state
        return (
            <div className={style.register}>
                <header className={style.toolbar}>我的</header>
                <div className={style.logins}>
                    <div className={style.avatar}></div>
                    <p>ljjing</p>
                    <ul className={style.accountinfo}>
                        {
                            items.map((item, index) => {
                                return <li key={index} >
                                    <b className={style.cashBalanceB}>{item.txt}</b>
                                    <b className={style.cashBalance}>{item.val}</b>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <section className={style.content}>
                    <div>
                        <span>
                            <a className={style.cz} href="/user/recharge">充值</a>
                        </span>
                        <span>
                            <a className={style.tx}>提现</a>
                        </span>
                    </div>
                    <ul className={style.record}>
                        <li>
                            <Link to="/user:order">购彩记录</Link>
                        </li>
                        <li>
                            <Link to="/user/account">账户明细</Link>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Register;
