import Navbar from '../Navbar';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AddIcon from '@material-ui/icons/Add';

import React, { useState } from 'react';
import { Button, IconButton } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { imageUrl, url } from '../config';
import { appContect } from '../context/context';
import { toast } from 'react-toastify';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Treks = ({ setLoginUser }) => {
	const [inputText, setInputText] = useState('');
	const history = useNavigate();
	const { context } = React.useContext(appContect);

	const setFavorite = async (data) => {
		debugger;
		try {
			const res = await axios.delete(`${url}/favorites/${data._id}`, {
				headers: {
					Authorization: `Bearer ${context.token}`,
				},
			});
			console.log(res);
			toast.success('favorite added...');
		} catch (error) {
			toast.success('Server Error');
		}
		apiCall();
	};

	const [TreksData, setTreksData] = useState([]);

	const apiCall = async () => {
		try {
			debugger;
			const res = await axios(`${url}/favorites`, {
				headers: {
					Authorization: `Bearer ${context.token}`,
				},
			});
			setTreksData(res.data);
		} catch (error) {
			toast.warn('Error');
		}
	};

	React.useEffect(() => {
		apiCall();
	}, []);
	const handleInputText = (value) => {
		setInputText(value);
		console.log(inputText);
	};

	return (
		<div>
			<Navbar setLoginUser={setLoginUser} />
			<section className='packages' id='packages' style={{ marginTop: '70px' }}>
				<div
					style={{
						position: 'relative',
					}}
				>
					<h1 className='heading'>Favorite Treks</h1>
					<Button
						variant='contained'
						color='primary'
						size='large'
						onClick={() => {
							if (context.role !== 'admin') {
								return toast.warn('only admin allowed...');
							}
							history('/addTrek');
						}}
						style={{
							color: 'white',
							position: 'absolute',
							right: '1px',
							top: '0px',
						}}
						startIcon={<AddIcon fontSize='small' />}
					>
						Add Trek
					</Button>
				</div>
				<section className='newsletter'>
					<div className='content'>
						<form action=''>
							<input
								type='email'
								name=''
								placeholder='Search Treks'
								id=''
								value={inputText}
								onChange={(e) => handleInputText(e.target.value)}
								className='email'
							></input>
							<div className='btn'>
								<i className='fas fa-search'></i>
							</div>
						</form>
					</div>
				</section>
				<div className='box-container'>
					{TreksData &&
						TreksData?.map((data) => {
							if (
								data.trek &&
								data.trek.title.toLowerCase().indexOf(inputText.toLowerCase()) >
									-1
							) {
								return (
									<div className='box'>
										<div key={data.id}>
											<div className='image'>
												<img src={`${imageUrl}/${data.trek.image}`} />
												{/* <img src="images/img-1.jpg" alt=""> */}
											</div>
											<div className='content'>
												<h3>{data.title}</h3>
												<p>{data.description}</p>
												<div className='price'>{data.trek.price}</div>
												<a href='#' className='btn'>
													Continue
												</a>

												<IconButton
													style={{
														background: 'red',
														marginLeft: '2rem',
													}}
													onClick={() => {
														setFavorite(data);
													}}
												>
													<FavoriteIcon />
												</IconButton>
											</div>
										</div>
									</div>
								);
							}
						})}
				</div>
			</section>
		</div>
	);
};

export default Treks;
