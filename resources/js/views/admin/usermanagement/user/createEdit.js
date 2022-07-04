import React,{useEffect,useState,useRef} from 'react'
import {Link,useParams} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router";
import {Form,Button,TextField,CheckBox,Select,useForm} from '@/components/Form'
const UserForm = () =>{
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

    const userForm = (values) =>{

    }

    return(
        <div className="content-body">
        <div className="page-heading-wrapper">
            <div className="page-title-wrapper">
                <h1>{!isAddMode ? 'Edit' : 'Create'} User</h1>
            </div>
            <div className="action-wrapper">
                <Link to="/admin/usermanagement/user" className="btn-success">Back</Link>
            </div>
        </div>
        <div className="content-box-wrapper">
            <Form 
                onFinish={userForm}
                form = {form}
                name="userForm" 
                className="form-wrapper form"
                validation={[
                        {
                            name:'name',
                            rules:'required'
                        },
                        {
                            name:'username',
                            rules:'required'
                        },
                        {
                            name:'email',
                            rules:'required|email'
                        }
                    ]}
            >
                <TextField 
					    className="form-control"
						label="Full Name" 
						name="name" 
						placeholder="Full Name"
				/>
                <TextField 
					    className="form-control"
						label="Username" 
						name="username" 
						placeholder="Username"
				/>
                <TextField 
					    className="form-control"
						label="Email" 
						name="email" 
						placeholder="Email"
                        type='email'
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

export default UserForm
