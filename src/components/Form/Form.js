import React, { Fragment, useState } from 'react';

import Input from './Input';
import TextArea from './TextArea';
import Thanks from './Thanks';

const styles = {
	display: 'flex',
	flexFlow: 'column wrap',
	alignItems: 'flex-start',
	width: '100%',
	maxWidth: '400px',
	backgroundColor: '#efe3d0',
	button: {
		border: 'none',
		padding: '1em 2em',
		borderRadius: '5px',
		backgroundColor: '#986d8e',
		fontWeight: 'bold',
		color: '#fff',
		margin: '1em'
	},
	redBorder: {
		border: '1px solid red'
	}
};

function FormInputs() {
	const [ value, setValue ] = useState('');
	const changeHandler = (event) => {
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		setValue(value);
	};
	return [ value, changeHandler ];
}

export default function Form() {
	const [ fname, setFname ] = FormInputs('');
	const [ email, setEmail ] = FormInputs('');
	const [ bio, setBio ] = FormInputs('');
	const [ gender, setGender ] = FormInputs('');
	const [ accept, setAccept ] = FormInputs(false);
	const [ attempt, setAttempt ] = useState(false);
	const [ toggle, setSubmit ] = useState(false);
	const values = [ fname, email, bio, gender, accept ];

	const blurHandler = (e) => {
		let isEmpty = e.target.value === '';
		isEmpty ? (e.target.style.border = '1px solid red') : (e.target.style.border = '1px solid #8f8f9d');
	};

	const validator = (arr) => {
		let isValid = true;
		arr.forEach((el) => {
			if (el === '') isValid = false;
		});
		return isValid;
	};

	const clickHandler = () => {
		setAttempt(true);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const readyToSend = validator(values);
		if (readyToSend) {
			setSubmit(true);
			e.target.reset();
		}
	};

	const resetHandler = () => {
		setSubmit(false);
		setAttempt(false);
	};

	return (
		<div>
			<p>Zadanie 2 - Form without react-hook-form</p>
			{toggle ? (
				<Thanks onReset={resetHandler} />
			) : (
				<form onSubmit={submitHandler} style={styles} id="form">
					<Input
						type="text"
						name="fname"
						placeholder="Name"
						onChange={setFname}
						onBlur={blurHandler}
						label="Name"
						submit={attempt}
						value={fname}
					/>
					<Input
						type="email"
						name="email"
						placeholder="Email"
						onChange={setEmail}
						onBlur={blurHandler}
						label="Email"
						submit={attempt}
						value={email}
					/>
					<TextArea
						name="bio"
						placeholder="Message"
						onChange={setBio}
						onFocus={blurHandler}
						label="Bio"
						submit={attempt}
						value={bio}
					/>
					<div>
						<Input
							type="radio"
							id="male"
							name="gender"
							value="Male"
							onChange={setGender}
							onBlur={blurHandler}
							label="Male"
						/>
						<Input
							type="radio"
							id="female"
							name="gender"
							value="Female"
							onChange={setGender}
							onBlur={blurHandler}
							label="Female"
						/>
					</div>
					<div>
						<Input
							type="checkbox"
							name="accept"
							onChange={setAccept}
							onBlur={blurHandler}
							label="Akceptuję regulamin"
							submit={attempt}
							value={accept}
						/>
					</div>
					<button type="submit" style={styles.button} onClick={clickHandler}>
						Wyślij
					</button>
				</form>
			)}
		</div>
	);
}
