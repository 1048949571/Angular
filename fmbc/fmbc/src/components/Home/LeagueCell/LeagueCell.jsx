import React, { Component } from 'react';
import axios from 'axios'
import style from './LeagueCell.css'


class LeagueCell extends Component {
    render() {
        const { children } = this.props
        return (
            <div className={style.leagueCell}>
                { children }
            </div>
        )
    }
}

export default LeagueCell;
