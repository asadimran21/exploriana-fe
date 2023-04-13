import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from '../../config';
import { toast } from 'react-toastify';

const Register = () => {
	const history = useNavigate();

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		reEnterPassword: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const register = () => {
		const { name, email, password, reEnterPassword } = user;
		if (name && email && password && password === reEnterPassword) {
			axios.post(`${url}/users`, user).then((res) => {
				toast.success('Registered successfully...');
				history('/login');
			});
		} else {
			alert('invlid input');
		}
	};

	return (
		<div className='register' style={{}}>
			{console.log('User', user)}
			<h1 style={{ marginBlock: '10px', fontSize: '40px' }}>Register</h1>
			<input
				type='text'
				name='name'
				value={user.name}
				placeholder='Your Name'
				onChange={handleChange}
				style={{ marginBlock: '10px' }}
			></input>
			<input
				type='text'
				name='email'
				value={user.email}
				placeholder='Your Email'
				onChange={handleChange}
				style={{ marginBlock: '10px' }}
			></input>
			<input
				type='password'
				name='password'
				value={user.password}
				placeholder='Your Password'
				onChange={handleChange}
				style={{ marginBlock: '10px' }}
			></input>
			<input
				type='password'
				name='reEnterPassword'
				value={user.reEnterPassword}
				placeholder='Re-enter Password'
				onChange={handleChange}
				style={{ marginBlock: '10px' }}
			></input>
			<div className='button' onClick={register} style={{ marginTop: '30px' }}>
				Register
			</div>
			<div style={{ fontSize: '20px' }}>or</div>
			<div className='button' onClick={() => history('/login')}>
				Login
			</div>
		</div>
	);
};

export default Register;
