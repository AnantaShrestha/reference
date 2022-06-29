import React from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router";
import {FaSignInAlt} from 'react-icons/fa';
import {AuthLogoutAction} from  '@/services/redux/auth/AuthAction';
const TopHeader = (props) =>{
	const dispatch=useDispatch()
	const navigate = useNavigate()
	const logoutHandle = () =>{
		dispatch(AuthLogoutAction(navigate))
	}
	return (
		<>
			<div className="top-header-wrapper">
				<div className="top-right-side">
					<button className="logout-btn" onClick={logoutHandle}>Logout <FaSignInAlt /></button>
				</div>
			</div>
		</>
	);
}

export default TopHeader;