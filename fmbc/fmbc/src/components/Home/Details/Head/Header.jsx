import React, { Component } from 'react';
import style from './Header.scss'


class Header extends Component {

    back(){
        const { history }=this.props
        history.goBack()
    }

    render() {
        return (
            <div className={style.header}>
            <span >返回</span>
                分秒必猜        
            </div>
        )
    }
}

export default Header;
