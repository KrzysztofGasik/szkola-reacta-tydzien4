import React from 'react';

const styles = {
	backgroundColor: '#5f939a',
	color: '#fff',
	textAlign: 'center',
	padding: '1em',
	pos: {
		backgroundColor: 'green',
		color: '#fff',
		padding: '1em',
		margin: '0 0.5em'
	},
	neg: {
		backgroundColor: 'red',
		color: '#fff',
		padding: '1em',
		margin: '0 0.5em'
	}
};

export default function Sum({ sum }) {
	const aboveZero = Number(sum) >= 0 ? true : false;
	return (
		<div style={styles}>
			<p>Total balance</p>
			<p style={aboveZero ? styles.pos : styles.neg}>{sum} zł</p>
		</div>
	);
}
