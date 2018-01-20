import React, { Component } from 'react';
import { getList } from '../../../Common/api'
import { connect } from 'react-redux';
import style from './List.scss'
import { getDetails } from '../../../Store/actions/home'
import {
    Route,
    Link
  } from 'react-router-dom'

class List extends Component {
    addstr(){
        const { matchId } = this.props
        console.log(matchId)
        if(!window.localStorage[matchId]){
            window.localStorage[matchId] = matchId
        }else{
            window.localStorage.removeItem(matchId)
        }
    }
    render() {
        const { players, leagueName, matchTime,matchId } = this.props
        return (
            <div className={style.list}>
                <div className={style.listTop}>
                    {leagueName}{matchTime.split(' ')[1].substr(0, 5)}
                    <span onClick={this.addstr.bind(this)}>关注</span>
                </div>
                <Link to={"/Details:"+matchId}>
                <div className={style.listBotm}>
                    <span className={style.BotmLeft}>
                        <p>
                            <b><img src={players[0] && players[0].picUrl} alt="" /></b>
                            <b>{players[0] && players[0].shortName}</b>
                        </p>
                        <p>
                            <b><img src={players[1] && players[1].picUrl} alt="" /></b>
                            <b>{players[1] && players[1].shortName}</b>
                        </p>

                    </span>
                    <span className={style.BotmRight}>
                        <b>
                            {(players[0] && players[0].teamId + players[1] && players[1].teamId)}
                            人竞猜</b>
                    </span>
                </div>
                </Link>
            </div>
        )
    }
}
/* const mapStateToProp = (state) => {
    console.log(state)
	return {
        DetailsList: state.DetailsList
	}
}
 */
export default List

