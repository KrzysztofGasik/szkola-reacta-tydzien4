import React, { Component, Fragment } from 'react';

import Form from './Form';

export default class TipClass extends Component {
	state = {
		send: false,
		net: 0,
		tip: 0,
		result: 0
	};

	changeHandler = (event) => {
		const name = event.target.name;
		const value = name === 'tip' ? Number(event.target.value) / 100 : Number(event.target.value);
		this.setState({
			[name]: value
		});
	};

	submitHandler = (e) => {
		e.preventDefault();
		this.setState({
			send: !this.state.send,
			result: this.calculateResult()
		});
	};
	calculateResult = () => {
		let netFinal = this.state.net + this.state.net * this.state.tip;
		let vat = netFinal * 0.23;
		let result = netFinal + vat;
		return `${result.toFixed(2)} zł`;
	};

	render() {
		const styles = this.props.styles;
		return (
			<Fragment>
				{this.state.send ? (
					<div style={styles.result}>{this.state.result}</div>
				) : (
					<Form submitHandler={this.submitHandler} changeHandler={this.changeHandler} styles={styles} />
				)}
			</Fragment>
		);
	}
}
