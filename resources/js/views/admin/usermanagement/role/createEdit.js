import React,{useEffect,useState,useRef} from 'react'
import {isEmpty} from 'lodash'
import {Link,useParams} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router";
import {Form,Button,TextField,CheckBox,Select,useForm} from '@/components/Form'
import {PermissionListAction} from '@/services/redux/usermanagement/permission/PermissionAction'
const RoleForm = () =>{
	//ref
	const form = useRef(null)
	const {setFieldsValue} = useForm()
	//navigate
	const navigate=useNavigate()
	//dispatch
	const dispatch=useDispatch()
	//params
	const {id}=useParams()
	//form mode
	const isAddMode = id ? false : true
	const [currentPage,setCurrentPage] = useState(1)
	const [search,setSearch] = useState('')
	//selector
	const {permissionList,permissionListLoadingResponse } =useSelector((state) => state.permissionState)
	const perPage = 10

	useEffect(()=>{
		dispatch(PermissionListAction({page:currentPage,perPage:perPage,search:search}))
	},[])

	const roleForm = (values) =>{
		console.log(values)
	}
	
	return(
		<div className="content-body">
			<div className="page-heading-wrapper">
				<div className="page-title-wrapper">
					<h1>{!isAddMode ? 'Edit' : 'Create'} Role</h1>
				</div>
				<div className="action-wrapper">
					<Link to="/admin/usermanagement/role" className="btn-success">Back</Link>
				</div>
			</div>
			<div className="content-box-wrapper">
				<Form 
					onFinish={roleForm}
					form = {form}
					name="roleForm" 
					className="form-wrapper form"
					validation={[
							{
								name:'name',
								rules:'required'
							},	
						]}
				>
					<TextField 
					    className="form-control"
						label="Role Name" 
						name="name" 
						placeholder="Role Name"
					/>
					<Select
						multiple={true}
						name='permission_id'
						className = 'form-control'
						label="Permisions"
						placeholder="Permission"
						optionValue = 'id'
						optionLabel ='name'
						options ={permissionList}
					/>
					<div className="form-group">
						<div className="form-label"></div>
						<div className="form-input form-action">
							<Button  type="submit" className="btn-success" name={!isAddMode ? 'Update' : 'Create'} />
						</div>
					</div>
				</Form>
			</div>
		</div>
	)
}

export default RoleForm