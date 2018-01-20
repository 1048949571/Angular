import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'


class Tabtit extends Component {
    static defaultProps = {
        className: "Tab"
    }
    static propTypes={
        className: PropTypes.string,
        text: PropTypes.string,
        activeclass: PropTypes.string,
        id: PropTypes.number
    }

    constructor(props){
        super(props)
       
    }
  
    Clicks(id){

        const { getActiveId }=this.props
        getActiveId(id)
        
        
    }
    render () {
        const { className ,text,activeclass,id}=this.props
        return(
            <li className={className+" "+activeclass} 
                    onClick={()=>this.Clicks(id)}>{text}</li>
        )
    }
}

export default Tabtit