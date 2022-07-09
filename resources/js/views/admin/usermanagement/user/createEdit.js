import React,{useRef,useEffect,useState} from 'react'
import {Link,useParams} from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router"
import {Form,Button,TextField,CheckBox,Select,useForm} from '@/components/Form'
import {RoleListAction} from '@/services/redux/usermanagement/role/RoleAction'
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
    const [currentPage,setCurrentPage] = useState(1)
    const [search,setSearch] = useState('')

    //selector
    const {roleList,roleListLoadingResponse} = useSelector((state)=>state.roleState)
    const perPage = 10

    useEffect(()=>{
        dispatch(RoleListAction({page:currentPage,perPage:perPage,search:search}))
    },[])
    //user form
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
                            }, 
                            {
                                name:'password',
                                rules : 'required'
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
                            type="email"
                    />
                    <TextField 
                            className="form-control"
                            label="Phone No" 
                            name="phone_no" 
                            placeholder="Phone No"
                    />
                    <TextField 
                            className="form-control"
                            label="Password" 
                            name="password" 
                            placeholder="Password"
                            type="password"
                    />
                    <Select
                        multiple={true}
                        name='roles'
                        className = 'form-control'
                        label="Roles"
                        placeholder="Roles"
                        optionValue = 'id'
                        optionLabel ='name'
                        options ={roleList}
                        searchAllow = {true}
                        
                    />
                    <div className="form-group">
                        <div className="form-label"></div>
                        <div className="form-input form-action">
                            <Button   type="submit" className="btn-success" name={!isAddMode ? 'Update' : 'Create'} />
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default UserForm
