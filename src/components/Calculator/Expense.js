import React from 'react';

const styles = {
	backgroundColor: '#efe3d0',
	list: {
		listStyleType: 'none',
		width: '30vw'
	},
	element: {
		margin: '1em',
		padding: '1em 0',
		backgroundColor: '#5f939a',
		color: '#010101'
	},
	par: {
		padding: '0.5em'
	},
	button: {
		margin: '1em',
		padding: '1em',
		backgroundColor: '#bbb',
		border: 'none',
		cursor: 'pointer'
	}
};

export default function Expense({ data, handler }) {
	const expenses = JSON.parse(localStorage.getItem('expenses'));
	const dataFromLocalStorage = expenses === null || expenses.length === 0;

	const removeHandler = (element) => {
		const { id } = element;
		const update = expenses.filter((el) => el.id !== id);
		handler(() => [ ...update ]);
		localStorage.setItem('expenses', JSON.stringify(update));
	};
	return (
		<div style={styles}>
			<p style={styles.par}>Expenses</p>
			<ul style={styles.list}>
				{dataFromLocalStorage ? (
					<li>No data</li>
				) : (
					expenses.map((expense) => {
						const { id, name, amount, category } = expense;
						return (
							<li key={id} style={styles.element}>
								<p style={styles.par}>Name: {name}</p>
								<p style={styles.par}>Amount: {amount}</p>
								<p style={styles.par}>Category: {category}</p>
								<button onClick={() => removeHandler(expense)} style={styles.button}>
									Remove
								</button>
							</li>
						);
					})
				)}
			</ul>
		</div>
	);
}
