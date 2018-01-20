import React, { Component } from 'react';
import { routermap } from './Router/routermap';
import axios from 'axios';
import style from './App.scss';
import './css/animation.css';
import './css/common.css';
import './css/reset.css';
import {
    Route,
    NavLink
  } from 'react-router-dom'
  
class App extends Component {
    render() {
        const { location }=this.props
        return (
            <div className={style.app}>           
                <div className={style.content}>
                        {
                            routermap.ROUTE.map((item, idx) => {
                            return <Route key={idx} exact path={item.path} 
                                    component={item.component}></Route>
                        })
                    }
                    </div>
                    <div className="foots">
                    <ul>
                         {
                            routermap.NAV.map((item, idx) => {
                            return (
                              <li key={idx}>
            
                                <NavLink to={item.to}>{item.text}</NavLink>
                              </li>
                            )
                          })
                      }      
                   </ul>
                  </div>
            </div>
        )
    }
}
export default App;
