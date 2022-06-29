import {AuthActionType} from '../../types'
import {init,success,notifyError,notifySuccess} from '../../common'
//login action
export const AuthLoginAction =(data,navigate) => (dispatch) =>{
	dispatch(init(AuthActionType.AUTH_LOGIN_TYPE))
	return new Promise((resolve,reject)=>{
		Api.post('/admin/login',data).then(resp=>{
			dispatch(success(AuthActionType.AUTH_LOGIN_TYPE,resp.data))
			dispatch(notifySuccess(resp.data.message))
			navigate('/admin/dashboard')
			resolve(resp)
		}).catch(err=>{
			if(err.response)
				dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})
}

//logout action
export const AuthLogoutAction = (navigate) => (dispatch) =>{
	dispatch(init(AuthActionType.AUTH_LOGOUT_TYPE))
	return new Promise((resolve,reject)=>{
		Api.get('/admin/logout').then(resp=>{
			dispatch(success(AuthActionType.AUTH_LOGOUT_TYPE,resp.data))
			dispatch(notifySuccess(resp.data.message))
			navigate('/admin/login')
			resolve(resp)
		}).catch(err=>{
			if(err.response)
				dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})
}