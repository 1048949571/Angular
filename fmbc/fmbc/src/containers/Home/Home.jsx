import React, { Component } from 'react';
import style from './Home.scss'
import { getList } from '../../Common/api'
import { baseurl } from '../../Common/baseurl'
import NavCell from '../../components/Home/NavCell'
import NavItem from '../../components/Home/NavItem'
import LeageBar from '../../components/Home/LeageBar'
import Section from '../../components/Home/Section'
import List from '../../components/Home/List'
import Slide from '../../components/Home/Slide'
import { connect } from 'react-redux';
import League from '../../components/Home/League'
import Header from '../../components/Home/Header'
import routers from '../../Router'


import { BrowserRouter as Router } from 'react-router-dom'
import {
	Route
} from 'react-router-dom'
import {
	getNavList,
	GetList,
	getSportType,
	getoriginNav,
	getFilterJSON,
	getNavIdx,
	getSlideIdx,
	getLeftIdx,
	getLeaguList,
	getDetails
} from '../../Store/actions/home'


class Home extends Component {
	componentDidMount() {

		const { dispatch } = this.props
		getList(`${baseurl}/api/nav`)
			.then((res) => {
				const nav = res.data.data.data
				const newNav = [...nav, ...nav]

				dispatch(getoriginNav(newNav))
				this.initNav(newNav)

			})
		this.getInitList()
	}
	initNav(newNav, name = "更多") {
		const { dispatch } = this.props
		let setnav = null

		if (newNav.length > 7) {
			setnav = newNav.slice(0, 7)
		}
		setnav.push({ name: name, sportType: "More" })
		dispatch(getNavList(setnav))
	}
	saveSporType(id, name, index) {
		const { dispatch, originNav, gameList } = this.props
		const origin = []
		for (let it of originNav) {
			origin.push(it.name)
		}
		if (id !== "More" && id !== 'yc') {
			if (id < 10) {
				id = `0${id}`
			}
			dispatch(getNavIdx(index))
			dispatch(getSportType(id))
			this.getInitList(id)

			this.initNav(originNav, name)
		} else if (id === "More") {
			dispatch(getNavList([...originNav, { name: "隐藏", sportType: "yc" }]))
		} else {
			this.initNav(originNav, name)

		}
	}
	getInitList(id = "01") {
		const { dispatch } = this.props
		getList(`https://trad-pusher.8win.com/match/v2?k=cn0100${id}`)
			.then((res) => {
				const list = JSON.parse(res.data.data)
				dispatch(GetList(list))
				dispatch(getLeaguList(list))
				this.getListJSON(list)
				
			})
	}
	getListJSON(gameList) {
		const { dispatch } = this.props
		const arr = []
		if (gameList !== null) {
			for (let item of gameList) {
				const key = item.matchTime.split(' ')[0]
				arr.push(key)
			}
		}
		const arrs = new Set(arr)
		const json = []
		for (let i of [...arrs]) {
			json[i] = []
			for (let item of gameList) {
				const key = item.matchTime.split(' ')[0]
				if (i === key) {
					json[i].push(item)
				}
			}
		}
		dispatch(getFilterJSON(json))
	}
	getFiltersj(){
		const { dispatch,gameList } = this.props
		const arr = []
		if (gameList !== null) {
			for (let item of gameList) {
				const key = item.matchTime.split(' ')[0]
				arr.push(key)
			}
		}
		const arrs = new Set(arr)
		const json = []
		for (let i of [...arrs]) {
			json[i] = []
			for (let item of gameList) {
				const key = item.matchTime.split(' ')[0]
				if (i === key) {
					json[i].push(item)
				}
			}
		}
		dispatch(getFilterJSON(json))
	}
	getFilterX(){
		const { LeaguList,dispatch} = this.props
        const arr = []
        if (LeaguList !== null) {
           for (let item of LeaguList) {
               const key = item.leagueName
               arr.push(key)
           }
       } 
       const arrs = new Set(arr)
       const json = []
       for (let i of [...arrs]) {
           json[i] = []
           for (let item of LeaguList) {
               const key = item.leagueName
               if (i === key) {
				   json[i].push(item)
				   dispatch(getFilterJSON(json))
               }
           }
	   }
	   console.log(json)
	}
	getFiltergz(){
		const {gameList,dispatch} =this.props
		for(let item of gameList){
            Object.keys(window.localStorage).map((i)=>{
                if(i == item.matchId){
					console.log(item) 
				//	dispatch(getFilterJSON(item))
                }
            })
        }
		
	}
	renderList(filterList) {
		
		const { slideId } = this.props
		const item = Object.values(filterList)[slideId]
	//	console.log(item)
		return item && item.map((list, index) => {
			return (
				<List {...list} key={index} />
			)
		})
	}
	saveSlideIdx(idx) {
		const { dispatch } = this.props
		dispatch(getSlideIdx(idx))
		dispatch(getLeftIdx(idx))

	}
	getweek(day) {
		const Weeks = ["日", "一", "二", "三", "四", "五", "六"]
		const D = new Date(day)
		return `星期${Weeks[D.getDay()]}`
	}
	renderSlide(filterList) {
		const { LeftIdx } = this.props
		return Object.keys(filterList).map((item, index) => {
			return (
				<Slide
					name={item}
					getSlideId={this.saveSlideIdx.bind(this)}
					idx={index}
					LeftIdx={LeftIdx}
					Weeks={this.getweek.bind(this, item)}
					key={index} />
			)
		})
	}
	/* add(){
		const {dispatch} = this.props
		dispatch({
			type:"INCREMENT_ASYNC"
		})
	} */
	
	render() {
	
		const {
			Nav,
			SportType,
			gameList,
			originNav,
			filterList,
			navIdx,
			LeaguList,
			isLeageName } = this.props
		const flag = SportType === "00" || SportType === "01"
		const filterJson = filterList !== null && filterList
		
		return (
			<div className={style.home}>
				<Header className="heads" />
				<div className={style.headt}></div>
				{/* <button onClick={this.add.bind(this)}>add</button> */}
				<NavCell>
					{
						Nav !== null && Nav.map((item, index) => {
							return <NavItem
								getSportType={this.saveSporType.bind(this)}
								item={item}
								navIdx={navIdx}
								index={index}
								{...item}
								key={index} />
						})
					}
				</NavCell>
				<LeageBar gameList={gameList} 
							getFilter={this.getFilterX.bind(this)}
							getFilterx={this.getFiltersj.bind(this)}
							getGZ={this.getFiltergz.bind(this)}
							isLeageName={flag} />
				<Section>
					<div className={style.homeslide}>
						{
							this.renderSlide(filterJson)
						}
					</div>
					<div className={style.homesection}>
						{
							this.renderList(filterJson)
						}
					</div>
				</Section>
						
				{/* 	<League isLeageName={flag} LeaguList={LeaguList} /> */}
		
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		Nav: state.Nav,
		gameList: state.gameList,
		SportType: state.SportType,
		originNav: state.originNav,
		filterList: state.filterList,
		slideId: state.slideId,
		navIdx: state.navIdx,
		LeftIdx: state.LeftIdx,
		LeaguList: state.LeaguList,
		DetailsList: state.DetailsList
	}
}


export default connect(mapStateToProps)(Home);

