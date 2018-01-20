import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { makeFormatedBalance } from '../models/selector'
function IndexPage(ax) {
  const {dispatch,count} = ax
  function addstr(x){
    dispatch({
      type:"example/save",
      payload: x
    })
  }
 function poststr(x){
  dispatch({
    type:"example/poststr",
    current: x
  })
 }
  return (
     <div>
        
        <div>
          <button onClick={()=>poststr(1)}>-</button>
            {count}
          <button onClick={()=>addstr(1)}>+</button>
        </div>
   </div>
  );
}
 
IndexPage.propTypes = {
};
const mapStateToProps=(state,props)=>{
  //console.log(state,props,"0.0")
  return { 
      count : state.example.payload,
      slide: makeFormatedBalance(state,props)
   };
}
export default connect(mapStateToProps)(IndexPage);
