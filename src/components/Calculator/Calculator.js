import React from 'react';

import Form from './Form';

const styles = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center'
};

export default function Calculator() {
	return (
		<div>
			<p>Zadanie 4 - Expense/Revenue calculator</p>
			<div style={styles}>
				<Form />
			</div>
		</div>
	);
}
