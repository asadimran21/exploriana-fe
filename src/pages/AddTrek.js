import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Card, Dialog, Input, makeStyles } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import { url } from '../config';
import { toast } from 'react-toastify';
import { appContect } from '../context/context';

const FORM_VALIDATION = Yup.object().shape({
	title: Yup.string().required(),
	description: Yup.string().required(),
	price: Yup.number('only digits')
		.integer("can't include a decimal point")
		.required(),
	duration: Yup.number('only digits')
		.integer("can't include a decimal point")
		.max(100)
		.required(),
	image: Yup.mixed().required('File is required'),
	difficulty: Yup.string().required(),
});

const formState = () => {
	const INITIAL_FORM_STATE = {
		title: '',
		description: '',
		price: '',
		duration: '',
		difficulty: '',
		image: null,
	};

	return INITIAL_FORM_STATE;
};

const useStyles = makeStyles((theme) => ({
	imgBg: {
		borderRadius: '10px',
		background: theme.palette.primary.light,
		position: 'relative',
		height: '8vw',
		width: '8vw',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			height: '22vw',
			width: '22vw',
		},
	},
	imgBgChip: {
		position: 'absolute',
		background: 'white',
		borderRadius: '10px',
		padding: '2px',
		top: '15px',
		left: '10px',
		[theme.breakpoints.up('md')]: {
			fontSize: '0.66vw',
		},
		[theme.breakpoints.down('sm')]: {
			top: '5px',
			left: '2px',
			fontSize: '10px',
		},
	},
	inputDiv: {
		'& .MuiInputBase-input': {
			width: '380px',
		},
	},
	chooseFile: {
		padding: '0px',
		border: 'none',
		fontWeight: 'bold',
		fontSize: '12px',
		[theme.breakpoints.up('md')]: {
			fontSize: '0.8vw',
		},
	},
}));

export default function AddTrek() {
	const history = useNavigate();
	const { context } = React.useContext(appContect);

	const classes = useStyles();
	return (
		<>
			<Navbar />
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Dialog open>
					<Box
						style={{
							padding: '16px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar style={{ m: 1, bgcolor: 'secondary.main' }}>
							<AddPhotoAlternateIcon />
						</Avatar>

						<Typography component='h1' variant='h3'>
							Create a Track
						</Typography>

						<Formik
							initialValues={formState()}
							validationSchema={FORM_VALIDATION}
							onSubmit={async (values) => {
								console.log(values);
								var bodyFormData = new FormData();
								bodyFormData.append('image', values.image);
								bodyFormData.append('title', values.title);
								bodyFormData.append('description', values.description);
								bodyFormData.append('duration', values.duration);
								bodyFormData.append('price', values.price);
								bodyFormData.append('difficulty', values.difficulty);
								try {
									const res = await axios
										.post(`${url}/treks`, bodyFormData, {
											headers: {
												Authorization: `Bearer ${context.token}`,
												'Content-Type': 'multipart/form-data',
											},
										})
										.then((res) => {
											toast.success('Trek is added...');
											history('/treks');
										});
								} catch (error) {
									toast.warn('Only admin can add Trek');
								}
							}}
						>
							{({ values, handleSubmit, setFieldValue }) => (
								<Form>
									<Box
										style={{
											display: 'flex',
											marginTop: '1rem',
										}}
									>
										<div
											style={{
												gridArea: 'image',
												marginRight: '1rem',
												textAlign: 'start',
											}}
										>
											<div className={classes.imgBg}>
												{values.image ? (
													<img
														src={URL.createObjectURL(values.image)}
														height='90%'
														width='90%'
														alt=''
													/>
												) : (
													<img
														src={`logo512.png`}
														alt=''
														height='90%'
														width='90%'
													/>
												)}
												<Typography className={classes.imgBgChip} variant='h6'>
													Your image here
												</Typography>
											</div>
											<Button
												variant='outlined'
												color='primary'
												component='label'
												startIcon={<AddIcon />}
												className={classes.chooseFile}
											>
												Choose a File
												<input
													type='file'
													hidden
													onChange={(e) => {
														setFieldValue('image', e.target.files[0]);
													}}
												/>
											</Button>
											<ErrorMessage
												component='div'
												style={{ color: 'red' }}
												name='image'
											/>
										</div>
										<Box style={{ margin: '0px 10px 10px 10px' }}>
											<div style={{ marginBottom: '8px' }}>
												<Typography variant='h6' className={classes.label}>
													Title
												</Typography>
												<TextField
													name='title'
													fullWidth
													variant='outlined'
													onChange={(e) => {
														setFieldValue('title', e.target.value);
													}}
													style={{ fontSize: '16px' }}
												/>
												<ErrorMessage
													component='div'
													style={{ color: 'red' }}
													name='title'
												/>
											</div>
											<div style={{ marginBottom: '8px' }}>
												<Typography variant='h6' className={classes.label}>
													Description
												</Typography>
												<Field
													name='description'
													fullWidth
													as={TextField}
													variant='outlined'
													multiline
													maxRows={4}
													rows={4}
													style={{ fontSize: '16px' }}
												/>
												<ErrorMessage
													component='div'
													style={{ color: 'red' }}
													name='description'
												/>
											</div>
											<div style={{ marginBottom: '8px' }}>
												<Typography variant='h6' className={classes.label}>
													Price
												</Typography>
												<Field
													name='price'
													fullWidth
													variant='outlined'
													as={TextField}
													style={{ fontSize: '16px' }}
												/>
												<ErrorMessage
													component='div'
													style={{ color: 'red' }}
													name='price'
												/>
											</div>
											<div
												style={{ marginBottom: '8px' }}
												className={classes.inputDiv}
											>
												<Typography variant='h6' className={classes.label}>
													Duration
												</Typography>
												<Field
													name='duration'
													fullWidth
													variant='outlined'
													as={TextField}
													style={{ fontSize: '16px' }}
												/>
												<ErrorMessage
													component='div'
													style={{ color: 'red' }}
													name='duration'
												/>
											</div>

											<FormControl fullWidth style={{ marginTop: `20px` }}>
												<InputLabel
													variant='standard'
													htmlFor='uncontrolled-native'
												>
													Difficulty
												</InputLabel>
												<NativeSelect
													defaultValue={30}
													onChange={(e) => {
														setFieldValue('difficulty', e.target.value);
													}}
													inputProps={{
														name: 'difficulty',
														id: 'uncontrolled-native',
													}}
												>
													<option value='easy'>Easy</option>
													<option value='medium'>Medium</option>
													<option value='hard'>Hard</option>
												</NativeSelect>
												<ErrorMessage
													component='div'
													style={{ color: 'red' }}
													name='difficulty'
												/>
											</FormControl>
											<div
												style={{
													display: 'flex',
													justifyContent: 'space-around',
												}}
											>
												<Button
													type='submit'
													variant='contained'
													size='large'
													style={{
														marginTop: '24px',
														marginBottom: '16px',
														background: '#10221b',
														color: 'white',
													}}
												>
													Publish
												</Button>
												<Button
													variant='outlined'
													color='primary'
													size='large'
													onClick={() => {
														history('/treks');
													}}
													style={{
														marginTop: '24px',
														marginBottom: '16px',
													}}
												>
													Go Back
												</Button>
											</div>
										</Box>
									</Box>
								</Form>
							)}
						</Formik>
					</Box>
				</Dialog>
			</Container>
		</>
	);
}
