import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react';
/* import style from './Swiper.scss' */
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
		return (
			<WingBlank>
				<Carousel
					autoplay={true}
					infinite
					selectedIndex={1}
				>
					{this.state.data.map(val => (
								<img
									key={val}
									src="https://img1.360buyimg.com/da/jfs/t16366/326/1299608572/403575/8054e023/5a4f2b09Nbdd3b2c3.jpg"
									alt=""
									style={{ width: '100%', verticalAlign: 'top' }}
									onLoad={() => {
										// fire window resize event to change height
										window.dispatchEvent(new Event('resize'));
										this.setState({ imgHeight: '100px' });
									}}
								/>

					))}
				</Carousel>
			</WingBlank>
		);
	}
}
export default Appx