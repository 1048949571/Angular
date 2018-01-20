import React, { Component } from 'react';
import style from './Details.scss'

import { withRouter } from 'react-router-dom'
import { getList } from '../../../Common/api'
import Head from './Head'
import Swiper from './Swiper'
import Accord from './Accord'
class Details extends Component {

    render() {
        const { DetailsList ,leagueName} = this.props
      //  console.log(DetailsList.leagueName)
        return (
            <div className={style.DetailsBox}> 
                <Head/>
                <div className={style.DetailsCon}>
                    <div className={style.detailsnav}>
                        {DetailsList.sportName}-
                        {DetailsList.players[0].shortName} vs 
                        {DetailsList.players[1].shortName}-
                        {DetailsList.leagueName}
                        </div>

                       <Swiper DetailsList={DetailsList}/> 
                       <Accord DetailsList={DetailsList}/>
                </div>
                
            </div>
        )
    }
}

export default Details
