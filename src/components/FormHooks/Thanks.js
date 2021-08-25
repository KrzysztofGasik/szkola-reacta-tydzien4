import React from 'react';

const styles = {
	display: 'flex',
	flexFlow: 'column wrap',
	alignItems: 'center',
	width: '100%',
	maxWidth: '400px',
	backgroundColor: '#efe3d0',
	par: {
		margin: '1em'
	},
	button: {
		margin: '1em',
		padding: '1em',
		borderRadius: '5px',
		border: 'none',
		backgroundColor: '#7fc8a9',
		color: '#010101',
		fontSize: '1.2em',
		fontWeight: 'bold'
	}
};

export default function Thanks({ onReset }) {
	return (
		<div style={styles}>
			<p style={styles.par}>Formularz został wysłany</p>
			<button style={styles.button} onClick={onReset}>
				Wyślij nowy formularz
			</button>
		</div>
	);
}
