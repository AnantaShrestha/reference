import React,{useEffect,useState} from 'react'
import {Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import Table from '@/components/Table'
import {RoleListAction,RoleDeleteAction} from '@/services/redux/usermanagement/role/RoleAction'
import {FaTrashAlt,FaPen} from 'react-icons/fa'
const RoleList = () =>{
	//dispatch
	const dispatch =useDispatch()
	const perPage = 10
	// state
	const [currentPage,setCurrentPage] = useState(1)
	const [search,setSearch] = useState('')
	//selector 
	const {roleList,roleListLoadingResponse} = useSelector((state)=>state.roleState)

	useEffect(()=>{
		dispatch(RoleListAction({page:currentPage,perPage:perPage,search:search}))
	},[search])
	//search
	const handleSearch = (e) =>{
		e.preventDefault()
		const searchValue=Object.fromEntries(new FormData(e.target))
		setSearch(searchValue.search)
	}
	//delete role
	//delete 
	const handleRoleDelete = (id) =>{
		dispatch(RoleDeleteAction(id))
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
			title:'Role Name',

		},
		{
			key:'permissions',
			title:'Permissions',
			render: (row) =>{
				return(
					<div className="role-permissions-wrapper">
						<ul>
							{
								row.permissions?.map((item,i)=>{
									return(
										<li key={i}>{item.name}</li>
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
						<Link className="table-edit-btn" to={`/admin/usermanagement/role/edit/${row.id}`} ><FaPen /></Link>
			    		<button className="table-delete-btn" onClick={() => handleRoleDelete(row.id)} ><FaTrashAlt /></button>
			    	</div>
				)
			}
		},
	]

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
				<Table
					columns={columns}
					rowsWrapperClass="role-list-body"
					rows={roleList}
					handleSearch ={handleSearch}
					loading={roleListLoadingResponse}
				/>
			</div>
		</div>
	)
}

export default RoleList