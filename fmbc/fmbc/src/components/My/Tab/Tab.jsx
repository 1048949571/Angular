import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  './style.scss'
class Tab extends Component {
    static propTypes={
        className: PropTypes.string,
        children: PropTypes.node
    }
    static defaultProps = {
        className: "Tab",
        classtit: "tit"
    }
    render () {
        const {children,className,classtit}=this.props
        return(
            
            <div className="TAB">
                <div className={`${className} ${classtit}-${className}`}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Tab