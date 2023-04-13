import Navbar from '../Navbar';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TreksDataRaw from '../json/trekData.json';
import React, { useState } from 'react';
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { imageUrl, url } from '../config';
import { appContect } from '../context/context';
import { toast } from 'react-toastify';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

const Treks = ({ setLoginUser }) => {
	const [inputText, setInputText] = useState('');
	const history = useNavigate();
	const { context } = React.useContext(appContect);

	const setDelete = async (data) => {
		debugger;
		try {
			const res = await axios.delete(`${url}/treks/${data._id}`, {
				headers: {
					Authorization: `Bearer ${context.token}`,
				},
			});
			toast.success('trek removed...');
		} catch (error) {
			toast.success('Server Error');
		}
		apiCall();
	};

	const setFavorite = async (data) => {
		debugger;
		try {
			const res = await axios.post(
				`${url}/favorites`,
				{
					trek: data._id,
				},
				{
					headers: {
						Authorization: `Bearer ${context.token}`,
					},
				}
			);
			toast.success('favorite added...');
		} catch (error) {
			toast.success('Server Error');
		}
		apiCall();
	};

	const [TreksData, setTreksData] = useState(TreksDataRaw);

	const apiCall = async () => {
		try {
			const res = await axios(`${url}/treks`, {
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
					<h1 className='heading'>Popular Treks</h1>
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
								data.title.toLowerCase().indexOf(inputText.toLowerCase()) > -1
							) {
								return (
									<div className='box'>
										<div key={data.id}>
											<div className='image'>
												<img src={`${imageUrl}/${data.image}`} />
												{/* <img src="images/img-1.jpg" alt=""> */}
											</div>
											<div className='content'>
												<h3>{data.title}</h3>
												<p>{data.description}</p>
												<div className='price'>{data.price}</div>
												<div>
													{context.role === 'admin' && (
														<IconButton
															style={{
																background: '#eee',
																marginRight: '2rem',
																color: 'red',
															}}
															onClick={() => setDelete(data)}
														>
															<DeleteIcon size='large' />
														</IconButton>
													)}
													<a href='#' className='btn'>
														Continue
													</a>

													<IconButton
														style={{
															marginLeft: '2rem',
															background: '#eee',

															color: 'red',
														}}
														onClick={() => setFavorite(data)}
													>
														<FavoriteIcon />
													</IconButton>
												</div>
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
