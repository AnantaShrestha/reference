import React,{useEffect,useState,useRef} from 'react'
import {isEmpty} from 'lodash'
import {Link,useParams} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router";
import {Form,Button,TextField,CheckBox,Select,useForm} from '@/components/Form'
import {PermissionListAction} from '@/services/redux/usermanagement/permission/PermissionAction'
import {RoleCreateAction,RoleEditAction,RoleUpdateAction} from '@/services/redux/usermanagement/role/RoleAction'

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
	const [selectedPermissions,setSelectedPermissions] = useState([])
	const [currentPage,setCurrentPage] = useState(1)
	const [search,setSearch] = useState('')
	//selector
	const {permissionList } =useSelector((state) => state.permissionState)
	const {roleFormLoadingResponse,role} = useSelector((state) => state.roleState)
	const perPage = 10

	useEffect(()=>{
		dispatch(PermissionListAction({page:currentPage,perPage:perPage,search:search}))
		if(!isAddMode) dispatch(RoleEditAction(id))

	},[])

	useEffect(()=>{
		setSelectedPermissions([])
		if(!isAddMode){
			let permissions = role?.permissions
			permissions?.map((item,i)=>{
				setSelectedPermissions(selectedPermissions=>[...selectedPermissions,item.id])
			})
			setFieldsValue(form,{
				'name' : role?.name,
			})
		}
	},[role])

	useEffect(()=>{
		setFieldsValue(form,{
			'permissions' : selectedPermissions,
		})
	},[selectedPermissions])
	const searchOption = (value) =>{
		
	}

	const roleForm = (values) =>{
		isAddMode ? dispatch(RoleCreateAction(values,navigate)) :
	 			dispatch(RoleUpdateAction(values,id,navigate))
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
						name='permissions'
						className = 'form-control'
						label="Permisions"
						placeholder="Permission"
						optionValue = 'id'
						optionLabel ='name'
						options ={permissionList}
						searchAllow = {true}
						
					/>
					<div className="form-group">
						<div className="form-label"></div>
						<div className="form-input form-action">
							<Button isLoading={roleFormLoadingResponse}  type="submit" className="btn-success" name={!isAddMode ? 'Update' : 'Create'} />
						</div>
					</div>
				</Form>
			</div>
		</div>
	)
}

export default RoleForm