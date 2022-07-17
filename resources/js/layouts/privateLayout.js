import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom'
import FlashMessage from '@/components/FlashMessage'
import SideBar from './includes/sideBar'
import TopHeader from './includes/topheader'
const PrivateLayout = ({children}) =>{
	const {isLoggedIn} =useSelector(
		(state) => state.authState
	);
	
	return (
		<>
			<FlashMessage />

			{
				isLoggedIn ? (
					<div className="body-compose">
						<SideBar />
						<div className="main-content-wrapper">
							<TopHeader />
							<div className="content-box">
								{children}
							</div>
						</div>
					</div>
				) : (
					<Navigate to="/admin/login"></Navigate>
				)
			}
		</>
	);
}

export default PrivateLayout;