import React, { Component } from 'react';

import style from './Accord.scss'

class AccordionExmple extends Component {

  render() {
    const { DetailsList } = this.props
    return (
      <div className={style.whilts}>

        {
          DetailsList.playtypes.map((item, index) => {
            return <div key={index} className={style.Accordlist}>
              <div className={style.playbox}>{item.playtypeName}</div>
              {
                DetailsList.playtypes[index].optionName.split(',').map((itm,inde)=>{
                  return <div className={style.Accdiv} key={inde}>
                          <h4>{itm}</h4>
                          <p>{item.sp.split(',')[0]}</p>
                        </div>
                })
              }
              
            </div>
          })
        }

      </div>
    );
  }
}
export default AccordionExmple