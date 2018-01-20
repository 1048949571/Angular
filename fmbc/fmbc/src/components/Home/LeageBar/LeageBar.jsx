import React, { Component } from 'react';
import {getFilterJSON} from '../../../Store/actions/home'
import style from './LeageBar.scss'
import {
    Route,
    Link
  } from 'react-router-dom'
class LeageBar extends Component {
    Leage(){
        const {getFilter } =this.props
        getFilter()
       
    }
    sj(){
        const {getFilterx } =this.props
        getFilterx()
    }
    addstr(){
       // console.log(this.props)
       // const {gameList} =this.props
        
        const { getGZ } = this.props
       /*  for(let item of gameList){
            Object.keys(window.localStorage).map((i)=>{
                if(i == item.matchId){
                    console.log(item)
                   // dispatch(getFilterJSON(item))
                  
                }
            })
        } */ 
        getGZ()
    }
    render() {
        const { isLeageName }=this.props
     //   console.log(isLeageName)
        return (
            <div className={style.leageBar}>
                <div className={style.leageLeft}>
                    <span onClick={this.sj.bind(this)}>按时间</span>
                    {isLeageName ? 
                        <span onClick={this.Leage.bind(this)}>
                        按联赛
                        </span> : ''}
                    <span onClick={this.addstr.bind(this)}> 我的关注</span>
                </div>
                <div className={style.leageright}>
                    <span>icon</span>
                </div>
                
            </div>
        )
    }
}

export default LeageBar;
