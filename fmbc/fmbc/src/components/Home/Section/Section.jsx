import React, { Component } from 'react';

import style from './Section.scss'


class Section extends Component {
    render() {
        const { children } = this.props
        return (
            <div className={style.section}>
            { children }
            </div>
        )
    } 
}

export default Section;
