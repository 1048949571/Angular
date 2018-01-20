import React, { Component } from 'react';
import axios from 'axios'
import style from './NavItem.css'
import classname from 'classnames'

class NavItem extends Component {
    click(){
        const { sportType, getSportType,item,index } =this.props
      //  console.log(sportType)
        const navName = index > 7
                && sportType !=='More' 
                && sportType !=='yc' 
                ? item.name :"更多"

        getSportType(sportType,navName,index)
        
    }
    render() {
        const { item,matchCount,navIdx,index } = this.props
        return (
            <div className={classname(style['navItem'],
                    {[style['navItemActive']] : navIdx === index })} 
                    onClick={this.click.bind(this)}>
                {item.name}
                {item.matchCount}
            </div>
        )
    }
}

export default NavItem;
