import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import Thanks from './Thanks';

const styles = {
	display: 'flex',
	flexFlow: 'column wrap',
	alignItems: 'flex-start',
	width: '100%',
	maxWidth: '400px',
	backgroundColor: '#efe3d0',
	input: {
		padding: '1em',
		margin: '1em'
	},
	label: {
		margin: '1em'
	},
	button: {
		border: 'none',
		padding: '1em 2em',
		borderRadius: '5px',
		backgroundColor: '#986d8e',
		fontWeight: 'bold',
		color: '#fff',
		margin: '1em'
	},
	error: {
		margin: '1em',
		color: 'red'
	}
};

export default function FormHooks() {
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		defaultValues: {
			fname: '',
			email: '',
			bio: '',
			gender: '',
			accept: false
		}
	});
	const [ submittedData, setSubmittedData ] = useState({});
	const [ submit, setSubmit ] = useState(false);
	const onSubmit = (data) => {
		setSubmittedData(data);
		reset({ fname: '', email: '', bio: '', gender: '', accept: false });
		setSubmit(!submit);
	};

	const onReset = () => {
		setSubmit(!submit);
	};

	return (
		<div>
			<p>Zadanie 3 - Form with react-hook-form</p>
			{submit ? (
				<Thanks onReset={onReset} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} style={styles}>
					<label htmlFor="fname" style={styles.label}>
						Name
					</label>
					<input
						style={styles.input}
						type="text"
						name="fname"
						placeholder="Name"
						{...register('fname', {
							required: true,
							minLength: 3,
							maxLength: 20
						})}
					/>
					{errors.fname && <span style={styles.error}>Name is required</span>}
					<label htmlFor="email" style={styles.label}>
						Email
					</label>
					<input
						style={styles.input}
						type="email"
						name="email"
						placeholder="Your email"
						{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
					/>
					{errors.email && <span style={styles.error}>Email is required</span>}
					<label htmlFor="bio" style={styles.label}>
						Bio
					</label>
					<textarea
						style={styles.input}
						name="bio"
						placeholder="Message"
						{...register('bio', { required: true, minLength: 5 })}
					/>
					{errors.bio && <span style={styles.error}>Message is required</span>}
					<label htmlFor="gender" style={styles.label}>
						Gender
					</label>
					<select style={styles.input} {...register('gender', { required: true })}>
						<option value="">Select</option>
						<option value="female">female</option>
						<option value="male">male</option>
					</select>
					{errors.gender && <span style={styles.error}>Gender is required</span>}
					<label htmlFor="accept" style={styles.label}>
						Accept terms
					</label>
					<input
						style={styles.input}
						type="checkbox"
						name="accept"
						{...register('accept', { required: true })}
					/>
					{errors.accept && <span style={styles.error}>Accepting terms is required</span>}
					<input type="submit" style={styles.button} value="Wyślij" />
				</form>
			)}
		</div>
	);
}
