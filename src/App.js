// import './App.css';
import React from 'react';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './pages/Home';
import Treks from './pages/Treks';
import Posts from './pages/Posts';
import EquipmentLister from './pages/EquipmentLister';
import Camps from './pages/Camps';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Mountains from './pages/Mountains';
import Valleys from './pages/Valleys';
import Waterfalls from './pages/Waterfalls';
import Lakes from './pages/Lakes';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import { appContect } from './context/context';
import AddTrek from './pages/AddTrek';
import AddPost from './pages/AddPost';
import PrivateRoutes from './components/PrivateRoute';
import Favorites from './pages/Favorites';

const theme = createTheme({
	typography: { fontFamily: 'Poppins' },
	palette: {
		mode: 'light',
		primary: {
			main: '#10221b',
			light: '#efefef',
			dark: '#2a1702',
		},
		primary: {
			main: '#d3740b',
			light: '#efefef',
			dark: '#d3740b',
		},

		background: {
			default: '#E9EDF0',
		},
	},
});

function App() {
	const [user, setLoginUser] = useState({});
	const [context, setContext] = React.useState(null);
	return (
		<>
			<div className='container'>
				<appContect.Provider value={{ context, setContext }}>
					<ThemeProvider theme={theme}>
						<Routes>
							<Route
								exact
								path='/'
								element={
									// user && user._id ? (
										<Home setLoginUser={setLoginUser} />
									// ) : (
									// 	<Login setLoginUser={setLoginUser} />
									// )
								}
							/>
							<Route
								path='/treks'
								element={
									<PrivateRoutes>
										<Treks />
									</PrivateRoutes>
								}
							/>
							<Route
								path='/addTrek'
								element={
									<PrivateRoutes>
										<AddTrek />
									</PrivateRoutes>
								}
							/>
							<Route
								path='/favorites'
								element={
									<PrivateRoutes>
										<Favorites />
									</PrivateRoutes>
								}
							/>
							<Route
								path='/posts'
								element={
									<PrivateRoutes>
										<Posts />{' '}
									</PrivateRoutes>
								}
							/>
							<Route
								path='/addPost'
								element={
									<PrivateRoutes>
										<AddPost />{' '}
									</PrivateRoutes>
								}
							/>
							<Route path='/equipment-lister' element={<EquipmentLister />} />
							<Route path='/camps' element={<Camps />} />
							<Route path='/blogs' element={<Blogs />} />
							<Route path='/contact-us' element={<ContactUs />} />
							<Route path='/mountains' element={<Mountains />} />
							<Route path='/valleys' element={<Valleys />} />
							<Route path='/waterfalls' element={<Waterfalls />} />
							<Route path='/Lakes' element={<Lakes />} />
							<Route
								path='/login'
								element={<Login setLoginUser={setLoginUser} />}
							/>
							<Route path='/register' element={<Register />} />
						</Routes>
					</ThemeProvider>
				</appContect.Provider>
				<ToastContainer autoClose={2000} />
			</div>
		</>
	);
}

export default App;
