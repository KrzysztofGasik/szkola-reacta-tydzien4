import React, { useState, Fragment } from 'react';

import Form from './Form';

export default function Tip({ styles }) {
	const [ send, setSubmit ] = useState(false);
	const [ net, setNet ] = useState(0);
	const [ tip, setTip ] = useState(0);
	const [ result, setResult ] = useState(0);

	const submitHandler = (e) => {
		e.preventDefault();
		setSubmit(!send);
		setResult(calculateResult);
	};
	const calculateResult = () => {
		let netFinal = net + net * tip;
		let vat = netFinal * 0.23;
		let result = netFinal + vat;
		return `${result.toFixed(2)} zł`;
	};

	const changeHandler = (event) => {
		const name = event.target.name;
		const value = Number(event.target.value);
		if (name === 'net') setNet(value);
		if (name === 'tip') setTip(value / 100);
	};

	return (
		<Fragment>
			{send ? (
				<div style={styles.result}>{result}</div>
			) : (
				<Form submitHandler={submitHandler} changeHandler={changeHandler} styles={styles} />
			)}
		</Fragment>
	);
}
