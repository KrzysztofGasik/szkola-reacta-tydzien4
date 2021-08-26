import React from 'react';

const styles = {
	backgroundColor: '#deba9d',
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

export default function Revenue({ handler, handlerSum, calculateSum }) {
	const revenues = JSON.parse(localStorage.getItem('revenues'));
	const dataFromLocalStorage = revenues === null || revenues.length === 0;

	const removeHandler = (element) => {
		const { id } = element;
		const update = revenues.filter((el) => el.id !== id);
		handler(() => [ ...update ]);
		handlerSum(calculateSum);
		localStorage.setItem('revenues', JSON.stringify(update));
	};

	return (
		<div style={styles}>
			<p style={styles.par}>Revenues</p>
			<ul style={styles.list}>
				{dataFromLocalStorage ? (
					<li>No data</li>
				) : (
					revenues.map((revenue) => {
						const { id, name, amount, category } = revenue;
						return (
							<li key={id} style={styles.element}>
								<p style={styles.par}>Name: {name}</p>
								<p style={styles.par}>Amount: {amount}</p>
								<p style={styles.par}>Category: {category}</p>
								<button onClick={() => removeHandler(revenue)} style={styles.button}>
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
