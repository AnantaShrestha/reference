import React,{useEffect,useState} from 'react'
import {Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import Table from '@/components/Table'
const RoleList = () =>{
	return(
		<div className="content-body">
			<div className="page-heading-wrapper">
				<div className="page-title-wrapper">
					<h1>Role</h1>
				</div>
				<div className="action-wrapper">
					<Link to="/admin/usermanagement/role/create" className="btn-success">Create</Link>
				</div>
			</div>
			<div className="content-box-wrapper">
				
			</div>
		</div>
	)
}

export default RoleList