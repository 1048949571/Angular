import * as types from '../constant/Naiconstant'

const initalState = {
    Nav: null,
    gameList: null,
    SportType: "00",
    originNav: null,
    filterList:null,
    navIdx: 0,
    slideId: 0,
    LeftIdx: 0,
    LeaguList: null,
    filterLeg: 0,
    DetailsList:null

} 
export default (state = initalState, action) => {
    switch (action.type) {

        case types.GET_NAV:
            return Object.assign({}, state, { Nav: action.Nav })
        case types.GET_GAME_LIST:
            return Object.assign({}, state, { gameList: action.gameList })
        case types.GET_SPORT_TYPE:
            return Object.assign({}, state, { SportType: action.SportType })
        case types.GET_ORIGIN_NAV:
            return Object.assign({}, state, { originNav: action.originNav })
        case types.GET_FILTER_JSON:
            return Object.assign({}, state, { filterList: action.filterList })
        case types.GET_SLIDE_IDX:
            return Object.assign({}, state, { slideId: action.slideId })
        case types.GET_NAV_ID:
            return Object.assign({}, state, { navIdx: action.navIdx })
        case types.GET_LEFT_ID:
            return Object.assign({}, state, { LeftIdx: action.LeftIdx })
        case types.GET_LEAGY_LIST:
            return Object.assign({}, state, { LeaguList: action.LeaguList })
        case types.GET_LEG_JSON:
            return Object.assign({}, state, { filterLeg: action.filterLeg })
        case types.GET_DETAILS_LIST:
            return Object.assign({}, state, { DetailsList: action.DetailsList })
            break
        default:
            return state
    }
    return state
}