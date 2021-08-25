import React, { Fragment, useState } from 'react';

import Expense from './Expense';
import Revenue from './Revenue';

const styles = {
	display: 'flex',
	flexFlow: 'column wrap',
	alignItems: 'center',
	width: '100%',
	maxWidth: '500px',
	backgroundColor: '#7fc8a9',
	label: {
		margin: '0.5em'
	},
	input: {
		margin: '0.5em',
		padding: '0.5em'
	},
	button: {
		backgroundColor: '#5f939a',
		border: 'none',
		padding: '1em',
		margin: '1em 0',
		fontSize: '1.3em',
		cursor: 'pointer'
	}
};

export default function Form() {
	const [ values, setValues ] = useState({
		exprev: '',
		name: '',
		amount: 0,
		category: ''
	});

	const [ exp, setExpense ] = useState([]);
	const [ rev, setRevenue ] = useState([]);
	const validation = (obj) => {
		const validate = Object.keys(obj).every((k) => obj[k]);
		return validate;
	};

	const addToStorage = (obj) => {
		let expenses = JSON.parse(localStorage.getItem('expenses'));
		if (expenses == null) expenses = [];
		let revenues = JSON.parse(localStorage.getItem('revenues'));
		if (revenues == null) revenues = [];
		const itemId = Date.now();
		obj.id = itemId;
		if (obj.exprev === 'expense') {
			expenses.push(obj);
			localStorage.setItem('expenses', JSON.stringify(expenses));
			setExpense(() => [ ...exp, obj ]);
		} else {
			revenues.push(obj);
			localStorage.setItem('revenues', JSON.stringify(revenues));
			setRevenue(() => [ ...rev, obj ]);
		}
	};

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setValues(() => ({
			...values,
			[name]: value
		}));
	};

	const addHandler = (e) => {
		e.preventDefault();
		const valid = validation(values);
		if (valid) addToStorage(values);
		if (valid) e.target.reset();
	};

	return (
		<Fragment>
			<form style={styles} onSubmit={addHandler}>
				<label htmlFor="expense" style={styles.label}>
					Expense
				</label>
				<input style={styles.input} type="radio" name="exprev" value="expense" onChange={changeHandler} />
				<label htmlFor="expense" style={styles.label}>
					Revenue
				</label>
				<input style={styles.input} type="radio" name="exprev" value="revenue" onChange={changeHandler} />
				<label htmlFor="name" style={styles.label}>
					Name for expense/revenue
				</label>
				<input type="text" name="name" onChange={changeHandler} style={styles.input} />
				<label htmlFor="amount" style={styles.label}>
					Amount
				</label>
				<input type="number" name="amount" min="1" onChange={changeHandler} style={styles.input} />
				<label htmlFor="category" style={styles.label}>
					Category
				</label>
				<select name="category" onChange={changeHandler} style={styles.input}>
					<option value="Household">Household</option>
					<option value="Shopping">Shopping</option>
					<option value="Fun">Fun</option>
				</select>
				<button type="submit" style={styles.button}>
					Add
				</button>
			</form>
			<Revenue data={rev} handler={setExpense} />
			<Expense data={exp} handler={setRevenue} />
		</Fragment>
	);
}
