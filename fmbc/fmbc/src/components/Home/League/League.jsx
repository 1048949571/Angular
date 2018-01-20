import React, { Component } from 'react';
import LeagueCell from '../LeagueCell/LeagueCell'
import style from './League.scss'
import LeagueList from '../LeagueList/LeagueList'
import LeagueSlide from '../LeagueSlide/LeagueSlide'
import { connect } from 'react-redux';
import classnames from 'classnames'

import {
	getLegJSON
} from '../../../Store/actions/home'
class League extends Component {
    renderList(filterJson) {
        const { filterLeg } = this.props
        //console.log(filterLeg)
        const item = Object.values(filterJson)[filterLeg]
       //console.log(item)
		return item && item.map((list, index) => {

			return (
				<LeagueList {...list} key={index}/>
			)
		})
    }
    saveSlideIdx(idx) {
		const { dispatch } = this.props
		 dispatch(getLegJSON(idx))
		/*dispatch(getLeftIdx(idx)) */

	}
    renderSlide(filterList) {
		return Object.keys(filterList).map((item, index) => {
			return (
				<LeagueSlide
                    getSlideId={this.saveSlideIdx.bind(this)}
					name={item}
                    idx={index}
					key={index} />
			)
		})
	}
    render() {
        const { children, isLeageName,LeaguList} = this.props
        const arr = []
        if (LeaguList !== null) {
           for (let item of LeaguList) {
               const key = item.leagueName
               arr.push(key)
           }
       } 
       const arrs = new Set(arr)
       const json = []
       for (let i of [...arrs]) {
           json[i] = []
           for (let item of LeaguList) {
               const key = item.leagueName
               if (i === key) {
                   json[i].push(item)
               }
           }
       }
        const filterJson = json !== null && json

        return (
            <div className={style.league}>
                {children}
                {isLeageName ?
                    <LeagueCell>
                        <div  className={classnames(style['slides'])}>
                           {
                                this.renderSlide(filterJson)
                            } 
                          </div>
                        <div  className={classnames(style['list'])}>
                            {
                                    this.renderList(filterJson)
                            }
                          
                       </div>
                        
                    </LeagueCell>: ''}
            </div>
        )
    }
}
const mapStateProps = (state) => {
   // console.log(state)
	return {
		filterLeg: state.filterLeg
	}
}


export default connect(mapStateProps)(League);
