import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: '#fff',
	},
	blogsContainer: {
		paddingTop: theme.spacing(4),
	},
	blogTitle: {
		fontWeight: 800,
		paddingBottom: theme.spacing(3),
	},
	card: {
		maxWidth: '300%',
	},
	media: {
		height: 240,
	},
	cardActions: {
		display: 'flex',
		margin: '0 10px',
		justifyContent: 'space-between',
	},
	author: {
		display: 'flex',
	},
	paginationContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
}));

const Blogs = ({ setLoginUser }) => {
	const classes = useStyles();
	const navigate = useNavigate();
	return (
		<div className='App'>
			<Navbar setLoginUser={setLoginUser} />
			<section className='home' id='home'>
				<div
					className='box second'
					style={{ backgroundImage: "url('images/banner-bg.jpg')" }}
				>
					{/* style="background: url(images/home-bg-1.jpg) no-repeat;" */}
					<div className='content'>
						<span>Explore</span>
						<h3 style={{ color: 'Black' }}> Pakistan</h3>
						<p style={{ color: 'White' }}>
							From the mighty stretches of the Karakorams in the North to the
							vast alluvial delta of the Indus River in the South, Pakistan
							remains a land of high adventure and nature. Trekking,
							mountaineering, white water rafting, wild boar hunting, mountain
							and desert jeep safaris, camel and yak safaris, trout fishing and
							bird watching, are a few activities, which entice the adventure
							and nature lovers to Pakistan.
						</p>
					</div>
				</div>
			</section>
			<Container maxWidth='lg' className={classes.blogsContainer}>
				<Typography
					variant='h4'
					className={classes.blogTitle}
					style={{ fontSize: '40px' }}
				>
					Blogs
				</Typography>
				<Grid container spacing={7}>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card} style={{ height: 'auto' }}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='/images/footer-bg.jpg'
									title='Contemplative Reptile'
									onClick={() => navigate('/mountains')}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
										style={{ fontSize: '25px' }}
									>
										Mountains
									</Typography>
									<Typography
										variant='body2'
										color='black'
										component='p'
										style={{ fontSize: '15px' }}
									>
										Pakistan is home to 108 peaks above 7,000 metres and 4555
										above 6,000 m. There is no count of the peaks above 5,000
										and 4,000 m. Five of the 14 highest independent peaks in the
										world (the eight-thousanders) are in Pakistan
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='/images/gallery-img-4.jpg'
									title='Contemplative Reptile'
									onClick={() => navigate('/valleys')}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
										style={{ fontSize: '25px' }}
									>
										Valleys
									</Typography>
									<Typography
										variant='body2'
										color='black'
										component='p'
										style={{ fontSize: '15px' }}
									>
										A large part of Pakistan is within the broad Indus valley.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='/images/water.jpg'
									title='Contemplative Reptile'
									onClick={() => navigate('/waterfalls')}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
										style={{ fontSize: '25px' }}
									>
										Waterfalls
									</Typography>
									<Typography
										variant='body2'
										color='black'
										component='p'
										style={{ fontSize: '15px' }}
									>
										Pakistan being a picturesque country has numerous
										breathtaking destinations. The country is blessed with
										unique landscapes and marvelous mountain ranges. The
										waterfalls in Pakistan are great tourist destinations. All
										of them are accessible in summers and some of them in
										winters.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='/images/Ratti-Gali.jpg'
									title='Contemplative Reptile'
									onClick={() => navigate('/Lakes')}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
										style={{ fontSize: '25px' }}
									>
										Lakes
									</Typography>
									<Typography
										variant='body2'
										color='black'
										component='p'
										style={{ fontSize: '15px' }}
									>
										You dont need to travel to Turkey or Scotland to see some
										iconic castles. If you love history and appreciate ancient
										architecture, you must make sure to visit at least one of
										the several historical forts in Pakistan this summer.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Blogs;
