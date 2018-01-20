import { createSelector } from 'reselect'

const gets=(state,props)=>{

    if(!state.Home.datalist) return
    return state.Home.datalist.data.recommend
}


export const makeFormatedBalance =createSelector(
    [gets],
    (a)=>{
      //  console.log(a)
        return a
    }
)