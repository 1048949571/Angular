import React, { Component } from 'react'
import style from './ListBox.scss'
import {
    Route,
    Link
  } from 'react-router-dom'
class ListBox extends Component {

    DetailList(id){
        const {datalist,getId} =this.props
        console.log(datalist.wareInfoList[id])
      //  console.log(id)
        getId(id)
    }
    render(){
        const {datalist} =this.props
        //console.log(datalist,"45564")

        return(<ul className={style.listUl}>
                {
                    datalist.wareInfoList.map((item,index)=>{
                        return  <Link key={index}  to={"/Detail:"+(item.wareId)}>
                                    <li className={style.liList}>
                                <dl onClick={()=>this.DetailList(index)}>
                                    <dt><img src={item.imageurl} alt=""/></dt>
                                    <dd>
                                        <p>{item.wname}</p>
                                        <b>{item.jdPrice}</b>
                                        <span>好评率{item.good}</span>
                                      
                                    </dd>
                                </dl>
                            </li>
                            </Link>
                    })
                }
              </ul>
            )
    }
} 

export default ListBox

