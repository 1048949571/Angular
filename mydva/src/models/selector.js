import { createSelector } from 'reselect'

const gets=(state,props)=>{
    return Object.keys(state)
}

const ab=(state,props)=>{
    return props.history.action
}
export const makeFormatedBalance =createSelector(
    [gets,ab],
    (arg1,arg2)=>{
        return arg1 + arg2
    }
)