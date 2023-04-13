import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { appContect } from '../context/context';

const PrivateRoutes = ({ children }) => {
	const { context } = useContext(appContect);
	console.log(context);
	// if (!context) {
	// 	return <Navigate to='/login' replace />;
	// }

	return children;
};

export default PrivateRoutes;
