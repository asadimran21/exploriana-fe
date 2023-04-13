import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import React, { useState } from 'react';
import { appContect } from './context/context';

const Navbar = ({ setLoginUser }) => {
	const [isActive, setIsActive] = useState(false);
	const handleClick = (event) => {
		setIsActive((current) => !current);
	};

	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 70) {
			setColor(true);
		} else {
			setColor(false);
		}
	};
	window.addEventListener('scroll', changeColor);

	return (
		<header className={color ? 'header active' : 'header'}>
			<Link to='/' className='logo'>
				{' '}
				<i className='fas fa-hiking'></i> Exploriana{' '}
			</Link>

			<nav className={isActive ? 'navbar active' : 'navbar'}>
				<div
					id={isActive ? 'nav-close active' : 'nav-close'}
					style={{ position: 'absolute', top: '5px', right: '10px' }}
					className='fas fa-times fa-4x'
					onClick={() => handleClick({})}
				></div>
				<CustomLink to='/favorites'>Favorite</CustomLink>
				<CustomLink to='/treks'>Treks</CustomLink>
				<CustomLink to='/posts'>Posts</CustomLink>
				<CustomLink to='/camps'>Camps</CustomLink>
				<CustomLink to='/equipment-lister'>Feacture Product</CustomLink>
				<CustomLink to='/blogs'>Blogs</CustomLink>
				<CustomLink to='/contact-us'>Contact us</CustomLink>
			</nav>
			<div className='icons'>
				<div id='menu-btn' className='fas fa-bars' onClick={handleClick}></div>
				{/* <CustomLink to="#" className="fas fa-edit"></CustomLink> */}
				<CustomLink
					to='/'
					className='fas fa-sign-out-alt'
					onClick={() => setLoginUser({})}
				></CustomLink>
			</div>
		</header>
	);
};

function CustomLink({ to, children, ...props }) {
	return (
		<Link to={to} {...props}>
			{children}
		</Link>
	);
}

export default Navbar;
