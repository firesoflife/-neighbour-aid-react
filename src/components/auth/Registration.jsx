import axios from 'axios';
import React, { useState } from 'react';

// export default class Registration extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			email: '',
// 			password: '',
// 			password_confirmation: '',
// 			registrationErrors: '',
// 		};

// 		this.handleSubmit = this.handleSubmit.bind(this);
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(event) {
// 		console.log(event);
// 	}

// 	handleSubmit(event) {
// 		console.log('form submitted');
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h2>Registration</h2>
// 				<form onSubmit={this.handleSubmit}>
// 					<input
// 						type='email'
// 						name='email'
// 						placeholder='Email'
// 						value={this.state.email}
// 						onChange={this.handleChange}
// 						required
// 					/>
// 					<input
// 						type='password'
// 						name='password'
// 						placeholder='Password'
// 						value={this.state.password}
// 						onChange={this.handleChange}
// 						required
// 					/>
// 					<input
// 						type='password_confirmation'
// 						name='password_confirmation'
// 						placeholder='Password Confirmation'
// 						value={this.state.password_confirmation}
// 						onChange={this.handleChange}
// 						required
// 					/>

// 					<button type='submit'>Register</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

const Registration = () => {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
		password_confirmation: '',
	});

	const handleChange = e => {
		setUserData(user => ({ ...user, [e.target.name]: e.target.value }));
	};

	const handleSubmit = e => {
		console.log('submitted!');

		// Axios
		const { email, password, password_confirmation } = userData;

		axios
			.post(
				'http://localhost:3001/registrations',
				{
					user: {
						email: email,
						password: password,
						password_confirmation: password_confirmation,
					},
				},
				{ withCredentials: true }
			)
			.then(resp => {
				console.log('registration res', resp);
			})
			.catch(error => {
				console.log('There was an error', error);
			});
		e.preventDefault();
	};

	return (
		<div>
			<h2>Registration</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					placeholder='Email'
					value={userData.email}
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					value={userData.password}
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					name='password_confirmation'
					placeholder='Password Confirmation'
					value={userData.password_confirmation}
					onChange={handleChange}
					required
				/>

				<button type='submit'>Register</button>
			</form>
		</div>
	);
};

export default Registration;
