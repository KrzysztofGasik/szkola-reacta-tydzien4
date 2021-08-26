import React, { useRef } from 'react';

export default function Button() {
	const styles = {
		button: {
			backgroundColor: 'blue',
			color: 'yellow',
			margin: '2em auto',
			display: 'block',
			padding: '1em 2em',
			border: 'none',
			borderRadius: '10px'
		},
		p: {
			textAlign: 'center'
		}
	};
	const button = useRef();
	const focusHandler = () => {
		button.current.style.backgroundColor = 'red';
		button.current.style.color = '#fff';
	};
	return (
		<div>
			<p style={styles.p}>Zadanie 5 - button useRef() change color on hover</p>
			<button style={styles.button} ref={button} onMouseOver={focusHandler}>
				Change color
			</button>
		</div>
	);
}
