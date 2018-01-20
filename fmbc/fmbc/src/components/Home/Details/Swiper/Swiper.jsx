import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { Component } from 'react';
import style from './Swiper.scss'
class Appx extends React.Component {
	state = {
		data: ['1', '2', '3'],
		imgHeight: 176,
		slideIndex: 0,
	}
	componentDidMount() {
		// simulate img loading
		setTimeout(() => {
			this.setState({
				data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
			});
		}, 100);
	}
	render() {

		const { DetailsList } = this.props
		return (
			<WingBlank>
				<Carousel
					autoplay={false}
					infinite
					selectedIndex={1}
					beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
					afterChange={index => console.log('slide to', index)}
				>
					{this.state.data.map(val => (
						<div className={style.backgrounds}>
							<div className={style.let}>
								<img
									className={style.imx}
									key={val}
									src={DetailsList.players[0].picUrl}
									alt=""
									style={{ width: '.5rem', verticalAlign: 'top' }}
									onLoad={() => {
										// fire window resize event to change height
										window.dispatchEvent(new Event('resize'));
										this.setState({ imgHeight: '.5rem' });
									}}
								/>
								<p>{DetailsList.players[0].shortName}</p>
							</div>
							<div className={style.con}>
									<p>{DetailsList.matchTime}</p>
									<h4>VS</h4>
									<b>未开赛</b>
							</div>
							<div className={style.let}>
								<img
									className={style.imx}
									key={val}
									src={DetailsList.players[1].picUrl}
									alt=""
									style={{ width: '.5rem', verticalAlign: 'top' }}
									onLoad={() => {
										// fire window resize event to change height
										window.dispatchEvent(new Event('resize'));
										this.setState({ imgHeight: '.5rem' });
									}}
								/>
								<p>{DetailsList.players[1].shortName}</p>
							</div>
						</div>
					))}
				</Carousel>
			</WingBlank>
		);
	}
}
export default Appx