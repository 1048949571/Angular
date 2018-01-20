import {
    GET_NAV,
    GET_GAME_LIST,
    GET_SPORT_TYPE,
    GET_ORIGIN_NAV,
    GET_FILTER_JSON,
    GET_SLIDE_IDX,
    GET_NAV_ID,
    GET_LEFT_ID,
    GET_LEAGY_LIST,
    GET_LEG_JSON,
    GET_DETAILS_LIST
} from '../constant/Naiconstant'

export const getNavList = (Nav) => {
    return {
        type: GET_NAV,
        Nav
    }
}
export const GetList = (gameList)=>{
 return {
     type: GET_GAME_LIST,
     gameList
 }
}
export const getSportType = (SportType)=>{
    return {
        type: GET_SPORT_TYPE,
        SportType
    }
}
export const getoriginNav =  (originNav)=>{
    return {
        type: GET_ORIGIN_NAV,
        originNav
    }
}
export const getFilterJSON = (filterList)=>{
    return {
        type: GET_FILTER_JSON,
        filterList
    }
}
export const getNavIdx = (navIdx)=>{
    return {
        type: GET_NAV_ID,
        navIdx
    }
}
export const getLeftIdx = (LeftIdx)=>{
    return {
        type: GET_LEFT_ID,
        LeftIdx
    }
}
export const getSlideIdx = (slideId)=>{
    return {
        type: GET_SLIDE_IDX,
        slideId
    }
}


export const getLeaguList = (LeaguList)=>{
 return {
     type: GET_LEAGY_LIST,
     LeaguList
 }
}
export const getLegJSON = (filterLeg)=>{
    return {
        type: GET_LEG_JSON,
        filterLeg
    }
}
export const getDetails = (DetailsList)=>{
    return {
        type: GET_DETAILS_LIST,
        DetailsList
    }
}
