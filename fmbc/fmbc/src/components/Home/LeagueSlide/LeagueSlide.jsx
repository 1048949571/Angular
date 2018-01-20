import React, { Component } from 'react';
import classname from 'classnames'
import style from './LeagueSlide.scss'
import classnames from 'classnames'

class LeagueSlide extends Component {
    getSlideIdx() {

        const { idx,getSlideId } = this.props
        getSlideId(idx)
        
    }
    render() {
        const { name}= this.props

        return (
            <div onClick={this.getSlideIdx.bind(this)} className={classnames(style['slide'])}>  
               {name}
            </div>
        )
    }
}

export default LeagueSlide;
