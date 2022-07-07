
import React,{useEffect,useState} from 'react'
import {Link } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import {FaTrashAlt,FaPen} from 'react-icons/fa'
const UserList = () =>{
    return(
        <div className="content-body">
            <div className="page-heading-wrapper">
                <div className="page-title-wrapper">
                    <h1>User</h1>
                </div>
                <div className="action-wrapper">
                    <Link to="/admin/usermanagement/user/create" className="btn-success">Create</Link>
                </div>
            </div>
            <div className="content-box-wrapper">

            </div>
        </div>
    )
}

export default UserList