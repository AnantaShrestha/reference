import React,{useEffect,useRef} from 'react'
import {isEmpty} from 'lodash'
import {Link,useParams} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router";
import {Form,Button,TextField,CheckBox,useForm} from '@/components/Form'
import {PermissionRouteListAction,PermissionCreateAction,PermissionEditAction,PermissionUpdateAction} from '@/services/redux/usermanagement/permission/PermissionAction'
const PermissionForm = () =>{
	//ref
	const form = useRef(null)
	const {setFieldsValue} = useForm()
	//navigate
	const navigate=useNavigate()
	//dispatch
	const dispatch=useDispatch()
	//param
	const {id}=useParams()
	//form mode
	const isAddMode = id ? false : true
	//selector
	const {permissionRouteList,permission,permissionFormLoadingResponse} =useSelector((state) => state.permissionState)

	useEffect(()=>{
		dispatch(PermissionRouteListAction())
		if(!isAddMode) dispatch(PermissionEditAction(id))
	},[])

	useEffect(()=>{
		let accessUri =permission?.access_uri
		if(!isAddMode)
			setFieldsValue(form,{
				'name' : permission?.name,
				'access_uri' : accessUri?.split(',')
			})
	},[permission])

	const permissionForm = (values) =>{
		if(isAddMode) dispatch(PermissionCreateAction(values,navigate))
		else dispatch(PermissionUpdateAction(values,id,navigate))
	}
	
	return(
		<div className="content-body">
			<div className="page-heading-wrapper">
				<div className="page-title-wrapper">
					<h1>{!isAddMode ? 'Edit' : 'Create'} Permission</h1>
				</div>
				<div className="action-wrapper">
					<Link to="/admin/usermanagement/permission" className="btn-success">Back</Link>
				</div>
			</div>
			<div className="content-box-wrapper">
				<Form 
					onFinish={permissionForm}
					form = {form}
					name="permissionForm" 
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
						label="Permission Name" 
						name="name" 
						placeholder="Permission Name"
					/>
					<div className="form-group">
						<div className="form-label"></div>
						<div className="form-input">
							<div className="permission-list-wrapper">
								{
									Object.entries(permissionRouteList)?.map(([module,items],index)=>{
										return(
											<div className="permission-item-wrapper" key={index}>
												<div className="permission-module-title">
													<h3>{module.toUpperCase()}</h3>
												</div>
												<div className="permission-item-body">
													{
														Object.entries(items)?.map(([key,uri],i)=>{
															return(
																<div key={i}>
																	<CheckBox
																		value={uri}
																	    className="form-control"
																		wrapperClass="permission-check-list-wrapper"
																		name="access_uri"
																		label={`${key.toUpperCase()} ${module.toUpperCase()}`}
																	/>
																</div>
															)
														})
													}
												</div>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="form-label"></div>
						<div className="form-input form-action">
							<Button isLoading={permissionFormLoadingResponse}  type="submit" className="btn-success" name={!isAddMode ? 'Update' : 'Create'} />
						</div>
					</div>
				</Form>
			</div>
		</div>
	)
}

export default PermissionForm