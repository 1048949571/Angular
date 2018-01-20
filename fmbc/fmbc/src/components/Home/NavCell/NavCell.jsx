import React, { Component } from 'react';
import axios from 'axios'
import style from './NavCell.css'


class NavCell extends Component {
    render() {
        const { children } = this.props
        return (
            <div className={style.navCell}>
                { children }
            </div>
        )
    }
}

export default NavCell;
