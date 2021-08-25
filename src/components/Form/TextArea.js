import React, { Fragment } from 'react';

import Error from './Error';

const styles = {
	display: 'grid',
	input: {
		padding: '1em',
		margin: '1em'
	},
	label: {
		margin: '1em'
	},
	error: {
		padding: '1em',
		margin: '1em',
		border: '1px solid red'
	},
	errorMessage: {
		margin: '1em',
		color: 'red',
		fontWeight: 'bold'
	}
};

export default function TextArea({ name, placeholder, onChange, onBlur, label, submit, value }) {
	const isEmpty = value === '';
	return (
		<Fragment>
			<label style={styles.label}>{label}</label>
			<textarea
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				style={submit ? styles.error : styles.input}
			/>
			{submit && isEmpty ? <Error style={styles.errorMessage} /> : null}
		</Fragment>
	);
}
