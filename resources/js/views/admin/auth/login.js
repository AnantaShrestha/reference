import React, {useEffect,useRef} from 'react'
import {isEmpty} from 'lodash'
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router";
import {Navigate} from 'react-router-dom'
import {Form,Button,TextField} from '@/components/Form'
import { AuthLoginAction } from "@/services/redux/auth/AuthAction";
const Login = (props) =>{
	const authImage='/images/loginimage.svg'
	const form =useRef(null)
	const navigate =useNavigate()
	const dispatch=useDispatch()
	const {isLoggedIn,loginLoadingResponse} = useSelector((state) => state.authState)
	const loginFormSubmit=(values)=>{
		dispatch(AuthLoginAction(values,navigate))
	}
	return (
		<>
		  {
		  	!isLoggedIn ? 
		  	(
		  		<div className="auth-wrapper">
					<div className="flex-row">
						<div className="auth-image">
						    <img src={authImage} />
						</div>
						<div className="auth-form">
							<Form 
								form={form}
								name='loginForm' 
								className="form-wrapper" 
								onFinish={loginFormSubmit}
								validation={[
									  	{
									  		name:'username',
									  		rules:'required'
									  	},
									  	{
									  		name:'password',
									  		rules:'required'
									  	}
									]}
							>
								<div className="form-flex">
									<TextField 
										className="form-input-control" 
										label="Username" 
										name="username" 
										placeholder="Username"
									/>
									<TextField 
										className="form-input-control" 
										type="password" 
										label="Password"
										name="password" 
										placeholder="Password"
									/>
									<div className="form-group">
										<Button 
										   isLoading={loginLoadingResponse}
											type="submit" 
											name="Login" 
											className="auth-btn" 
										/>
									</div>
								</div>
							</Form>
						</div>
					</div>
				</div>
		  	) :
		  	(<Navigate to="/admin/dashboard"></Navigate>)
		  }
		</>
		)
	}
export default Login