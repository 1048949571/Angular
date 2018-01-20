=======================下拉框默认选中=======================================
import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state={
            value:"",
            val:["内蒙古","北京"]
        }
    }
    Selects(e){
        const { options } =e.target

        console.log(e.target.value)

        const arr=Object.keys(options)
        .filter(i => options[i].select === true )
        .map(i =>options[i].value)
        
        this.setState({
            val: arr
        })
    }
    render() {
        const { value,val }=this.state
        return (
            <div className="login">
                <select value={val} multiple={true} onChange={this.Selects.bind(this)}>
                    <option>北京</option>
                    <option>河北</option>
                    <option>内蒙古</option>
                </select>

            </div>
        )
    }
}

export default Login;

=======================单选框=======================================
import React, { Component } from 'react';



class Login extends Component {
    constructor(){
        super()
        this.state={
            value:"足球"
        }
    }
    chAnge(e){
        this.setState({
            value:e.target.value
        })
    }
    render() {
        const { value }=this.state
        console.log(value)
        return (
            <div className="login">
                <input type="radio" checked={ value === "足球" } value="足球"  onChange={this.chAnge.bind(this)}/>
                <input type="radio" checked={ value === "台球" } value="台球"  onChange={this.chAnge.bind(this)}/>
                
            </div>
        )
    }
}

export default Login;
=======================多选框=======================================
import React, { Component } from 'react';



class Login extends Component {
    constructor(){
        super()
        this.state={
            val:[]
        }
    }
    change(e){
        const { checked,value }=e.target
        let { val }=this.state
        if(e.target.checked && val.indexOf(value) === -1){
            val.push(value)
        }else{
            val= val.filter(i => i !==value)
        }
        this.setState({
            val
        })
    }

    render() {
        const { val }=this.state
        console.log(val)
        return (
            <div className="login">
    
                <input type="checkbox" 
                        checked={ val.indexOf("足球") !==-1 } 
                        value="足球" 
                        onChange={this.change.bind(this)}/>
                <input type="checkbox" 
                        checked={ val.indexOf("台球") !==-1 } 
                        value="台球" 
                        onChange={this.change.bind(this)}/>

            </div>
        )
    }
}

export default Login;
