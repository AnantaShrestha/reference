import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom'
import FlashMessage from '@/components/FlashMessage'
import SideBar from './includes/sideBar'
import TopHeader from './includes/topheader'
const PrivateLayout = ({children}) =>{
	return (
		<>
		<FlashMessage />
		<div className="body-compose">
			<SideBar />
			<div className="main-content-wrapper">
				<TopHeader />
				<div className="content-box">
					{children}
				</div>
			</div>
		</div>
		</>
	);
}

export default PrivateLayout;