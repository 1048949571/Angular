import React, { Component } from 'react';
import classname from 'classnames'
import style from './Slide.scss'


class Slide extends Component {
    getSlideIdx() {
        const { idx, getSlideId, savegetLeftIdx } = this.props
        getSlideId(idx)
        
    }
    render() {
 
        const { name, Weeks,LeftIdx,idx } = this.props

        return (
            <div className={classname(style['slide'],
                { [style['slideItemActive']]: LeftIdx === idx })}
                onClick={this.getSlideIdx.bind(this)}>
                <p>{
                        name.includes('-') ? Weeks() : ''
                    } </p>
                <p>{name}</p>
            </div>
        )
    }
}

export default Slide;
