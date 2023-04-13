import React, { useState } from 'react';
import '../style.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from '../Navbar';
import { Button, IconButton } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { appContect } from '../context/context';
import { toast } from 'react-toastify';
import axios from 'axios';
import { imageUrl, url } from '../config';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';

const Posts = ({ setLoginUser }) => {
	const history = useNavigate();
	const { context } = React.useContext(appContect);

	const [PostsData, setPostsData] = useState([]);

	const setDelete = async (data) => {
		try {
			const res = await axios.delete(`${url}/posts/${data._id}`, {
				headers: {
					Authorization: `Bearer ${context.token}`,
				},
			});
			toast.success('post removed...');
		} catch (error) {
			toast.success('Server Error');
		}
		apiCall();
	};

	const apiCall = async () => {
		try {
			const res = await axios(`${url}/posts`, {
				headers: {
					Authorization: `Bearer ${context.token}`,
				},
			});
			setPostsData(res.data);
		} catch (error) {
			toast.warn('Error');
		}
	};

	React.useEffect(() => {
		apiCall();
	}, []);
	return (
		<div style={{ marginTop: '40px' }}>
			<Navbar setLoginUser={setLoginUser} />
			<section className='blogs' id='blogs'>
				<div
					style={{
						position: 'relative',
					}}
				>
					<div>
						<h1 className='heading'> Our Daily Posts </h1>
						<Button
							variant='contained'
							color='primary'
							size='large'
							onClick={() => {
								history('/addPost');
							}}
							style={{
								color: 'white',
								position: 'absolute',
								right: '1px',
								top: '0px',
							}}
							startIcon={<AddIcon fontSize='small' />}
						>
							Add Post
						</Button>
					</div>
					<Grid container spacing={2}>
						{PostsData.map((_, i) => (
							<Grid item xs={12} sm={6} md={4} key={i}>
								<Paper>
									<div className='slide'>
										<img src={`${imageUrl}/${_.image}`} />
										{/* <img src="images/img-1.jpg" alt=""> */}
										<div className='icons'>
											<a href='#'>
												{' '}
												<i className='fas fa-calendar'></i>{' '}
												{moment(_.createdAt).format('YYYY-MM-DD')}
											</a>
											<a href='#'>
												{' '}
												<i className='fas fa-user'></i>{' '}
												{_.user?.role === 'admin' ? 'admin' : _.user?.name}
											</a>
										</div>
										<h3>{_.title}</h3>
										<p>{_.description}</p>
										<div>
											{context._id === _.user?._id && (
												<IconButton
													style={{
														background: '#eee',
														marginRight: '2rem',
														color: 'red',
													}}
													onClick={() => setDelete(_)}
												>
													<DeleteIcon size='large' />
												</IconButton>
											)}
											<a href='#' className='btn'>
												read more
											</a>
										</div>
									</div>
								</Paper>
							</Grid>
						))}
					</Grid>
				</div>
			</section>
		</div>
	);
};

export default Posts;
