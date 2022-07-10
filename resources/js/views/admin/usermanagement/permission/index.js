import React,{useEffect,useState} from 'react'
import {Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import Table from '@/components/Table'
import {PermissionListAction,PermissionDeleteAction} from '@/services/redux/usermanagement/permission/PermissionAction'
import {FaTrashAlt,FaPen} from 'react-icons/fa'
const PermissionList = () =>{
	//dispatch
	const dispatch =useDispatch()
	const perPage = 10
	// state
	const [currentPage,setCurrentPage] = useState(1)
	const [search,setSearch] = useState('')
	//selector
	const {permissionList,permissionListLoadingResponse } =useSelector((state) => state.permissionState)
	useEffect(()=>{
		dispatch(PermissionListAction({page:currentPage,perPage:perPage,search:search}))
	},[search])
	//search
	const handleSearch = (e) =>{
		e.preventDefault()
		const searchValue=Object.fromEntries(new FormData(e.target))
		setSearch(searchValue.search)
	}
	//delete 
	const handlePermissionDelete = (id) =>{
		dispatch(PermissionDeleteAction(id))
	}
	//table columns
	const columns = [
		{
			key:'sno',
			title:'S.NO',
			render: (row,index)=>{
				return(
					<>
					{(currentPage * perPage) - (perPage - ((index + 2) - 1))}
					</>
				)
			}
		},
		{
			key:'name',
			title:'Name'
		},
		{
			key:'access_uri',
			title:'Access Uri',
			render: (row) =>{
				let uriArr = row.access_uri.split(',')
				return(
					<div className="role-permissions-wrapper">
						<ul>
							{
								uriArr?.map((item,i)=>{
									let itemArr =item.split('/')
									let action = itemArr.length > 2 ? itemArr[2].toUpperCase() : 'VIEW'
									let module = itemArr[1].toUpperCase()
		
									return(
										<li key={i}>{item  == 'api/admin/*' ? 'FULL CONTROL' : (`${action} ${module}`)}</li>
									)
								})
							}
						</ul>
					</div>
				)
			}
		},
		{
			key:'created_at',
			title:'Created At'
		},
		{
			key:'action',
			title:'Action',
			render: (row) =>{
				return(
					<div className="table-action-wrapper">
						<Link className="table-edit-btn" to={`/admin/usermanagement/permission/edit/${row.id}`} ><FaPen /></Link>
			    		<button className="table-delete-btn" onClick={() => handlePermissionDelete(row.id)} ><FaTrashAlt /></button>
			    	</div>
				)
			}
		},
	]
	return(
		<div className="content-body">
			<div className="page-heading-wrapper">
				<div className="page-title-wrapper">
					<h1>Permission</h1>
				</div>
				<div className="action-wrapper">
					<Link to="/admin/usermanagement/permission/create" className="btn-success">Create</Link>
				</div>
			</div>
			<div className="content-box-wrapper">
				<Table
					columns={columns}
					rowsWrapperClass="permission-list-body"
					rows={permissionList}
					handleSearch ={handleSearch}
					loading={permissionListLoadingResponse}
				/>
			</div>
		</div>
	)
}

export default PermissionList