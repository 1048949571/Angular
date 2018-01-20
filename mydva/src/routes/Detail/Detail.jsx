import React, { Component } from 'react'
import {makeFormatedBalance} from '../../models/selector/Home'
import { connect } from 'dva';
import DEtaIle from '../../components/DEtaIle'
import style from './Detail.scss'
class Detaile extends Component {
    componentDidMount(){
        const { dispatch} = this.props
        
         dispatch({
            type:"Home/fetch"
        }) 
    }
    render(){
        const { location,datalist} = this.props
        const ID=location.pathname.split(":")[1]
        return(<div>
                {
                    datalist !==undefined  ? 
                        <DEtaIle datalist={datalist}
                        ID={ID}
                        /> 
                        : ''
                }
              </div>
            )
    }
} 
const mapStateToPropx=(state)=>{
    return { 
      datalist:makeFormatedBalance(state)
     };
  }
export default connect(mapStateToPropx)(Detaile);


