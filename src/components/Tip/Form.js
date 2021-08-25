import React from 'react';

export default function Form({ submitHandler, changeHandler, styles }) {
	return (
		<form onSubmit={submitHandler} style={styles.grid}>
			<input
				type="number"
				name="net"
				onChange={changeHandler}
				style={styles.input}
				placeholder="netto"
				required
			/>
			<select name="tip" id="tip" onChange={changeHandler} style={styles.select} required>
				<option disabled selected value="">
					-- select tip value --
				</option>
				<option value="5">5%</option>
				<option value="10">10%</option>
				<option value="15">15%</option>
				<option value="20">20%</option>
			</select>
			<button type="submit" style={styles.button}>
				Calculate
			</button>
		</form>
	);
}
