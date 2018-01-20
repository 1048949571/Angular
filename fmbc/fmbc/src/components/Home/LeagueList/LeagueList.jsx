import React, { Component } from 'react';

import style from './LeagueList.scss'


class LeagueList extends Component {
    render(){
        const { players, leagueName, matchTime } = this.props
       // console.log( players)
        const Url=[]
        const name=[]
        const temid=[]
        if(players != undefined){
            for (let item of players) {
                Url.push(item.picUrl)
                name.push(item.shortName)
                temid.push(item.teamId)
			}
        }
      //  console.log(Url[0])
        return (
            <div className={style.list}>
                <div className={style.listTop}>
                  
                </div>
             <div className={style.listBotm}>
                    <span className={style.BotmLeft}>
                        <p>
                            <b><img src={Url[0]} alt=""/></b>
                            <b>{name[0]}</b>
                        </p>
                        <p>
                            <b><img src={Url[1]} alt=""/></b>
                            <b>{name[1]}</b>
                        </p>

                    </span>
                    <span className={style.BotmRight}>

                        <b>
                            
                            {(temid[0] && temid[0] + temid[1] && temid[1])}
                            人竞猜    
                        </b>
                    </span>
                </div> 
            </div>
        )
    }
}

export default LeagueList;
