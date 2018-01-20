import React, { Component } from 'react';
import style from './Details.scss'
import { connect } from 'react-redux';
import Detail from '../../components/Home/Details/Details'
import { getList } from '../../Common/api'
import {getDetails} from '../../Store/actions/home'

class Details extends Component {
    componentDidMount(){
        console.log(this.props)
        const { dispatch } = this.props
        const { location } =this.props

        const ID=location.pathname.split(":")[1]
        getList(`https://trad-pusher.8win.com/match/v2?t=1516004166794&s=51e90aa082614e34b48ac3482cca9b51&k=cn020001${ID}`)
		.then((res) => {
			const list = JSON.parse(res.data.data)
            console.log(list)  
            dispatch(getDetails(list))        
		})
    }
    render() {
        const {DetailsList} =this.props
        return (
            <div>  
                {
                    DetailsList !==null ? 
                        <Detail DetailsList={DetailsList}/> : 
                        ''
                }
                
            </div>
        )
    }
}
 const mapStateToProp = (state) => {
    console.log(state)
	return {
        DetailsList: state.DetailsList
	}
}


export default connect(mapStateToProp)(Details); 
