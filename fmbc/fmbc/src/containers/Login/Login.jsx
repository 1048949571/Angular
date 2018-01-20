import React, { Component } from 'react';
import axios from 'axios'
import { baseurl } from '../../Common/baseurl'
import { basename } from 'path';
import { setCookie } from '../../toole/cookies'
class Login extends Component {
    constructor(){
        super()
        this.state={
            userName: "",
            pwd: ""
        }
    }
    change(e){      
        this.setState({
            userName: e.target.value
        })
    }
    changes(e){
        this.setState({
            pwd: e.target.value
        })
    }
    btn(){
        
        const { userName,pwd } = this.state
        // console.log(userName)
        axios.post(`${ baseurl }/api/login`,{
            user:{
                userName,
                pwd
            }
        })
        .then((res)=>{
           // setCookie(arr[0],arr2[1])
             console.log(res)

        })
        .catch((e)=>{
            throw Error(e)
        })
    }
    render() {
        
        const { userName,pwd } = this.state
        // console.log(userName)
        return (
            <div className="login">
                    <input type="text" value={userName} 
                            placeholder="用户名"
                            onChange={this.change.bind(this)}/>
                    <input type="password" value={pwd} 
                            placeholder="密码"
                            onChange={this.changes.bind(this)}/>
                    <br/>
                    <button onClick={this.btn.bind(this)}>注册</button>
            </div>
        )
    }
}

export default Login;
