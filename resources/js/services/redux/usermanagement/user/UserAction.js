import {UserActionType} from '../../../types'
import {init,success,failed,notifyError,notifySuccess} from '../../../common'


export const UserListAction = (data) => (dispatch) =>{
	dispatch(init(UserActionType.USER_LIST_TYPE))
	let query =data ? '?page='+data.page+'&&perPage='+data.perPage+'&&search='+data.search : ''

	return new Promise((resolve,reject)=>{
		Api.get(`/admin/usermanagement/user?${query}`).then(resp=>{
			dispatch(success(UserActionType.USER_LIST_TYPE,resp.data))
			resolve(resp)
		}).catch(err=>{
			if(err.response){
				dispatch(notifyError(err.response.data.message))
				dispatch(failed(UserActionType.USER_LIST_TYPE))
			}
			reject(err)
		})
	})
}
//store user
export const UserCreateAction = (data,navigate) => (dispatch)=>{
		dispatch(init(UserActionType.USER_CREATE_TYPE))

		return new Promise((resolve,reject) =>{
			Api.post('/admin/usermanagement/user/store',data).then(resp=>{
				dispatch(success(UserActionType.USER_CREATE_TYPE,resp.data))
				dispatch(notifySuccess(resp.data.message))
				navigate('/admin/usermanagement/user')
				resolve(resp)
			}).catch(err=>{
				if(err.response){
					dispatch(notifyError(err.response.data.message))
					dispatch(failed(UserActionType.USER_CREATE_TYPE))
				}
				reject(err)
			})
		})
}

//get user according to id
export const UserEditAction = (id) => (dispatch) =>{
	dispatch(init(UserActionType.USER_EDIT_TYPE))

	return new Promise((resolve,reject)=>{
		Api.get(`/admin/usermanagement/user/edit/${id}`).then(resp=>{
			dispatch(success(UserActionType.USER_EDIT_TYPE,resp.data))
			resolve(resp)
		}).catch(err=>{
			if(err.response){
					dispatch(notifyError(err.response.data.message))
					dispatch(failed(UserActionType.USER_EDIT_TYPE))
			}
			reject(err)
		})
	})
}

//update user according to id
export const UserUpdateAction = (data,id,navigate) => (dispatch) =>{
	dispatch(init(UserActionType.USER_UPDATE_TYPE))
	return new Promise((resolve,reject)=>{
		Api.put(`/admin/usermanagement/user/edit/${id}`,data).then(resp=>{
			dispatch(success(UserActionType.USER_UPDATE_TYPE,resp.data))
			dispatch(notifySuccess(resp.data.message))
			navigate('/admin/usermanagement/user')
			resolve(resp)
		}).catch(err=>{
			if(err.response){
					dispatch(notifyError(err.response.data.message))
					dispatch(failed(UserActionType.USER_UPDATE_TYPE))
			}
			reject(err)

		})
	})
}


//delete user according to id
export const UserDeleteAction = (id) => (dispatch) =>{
	dispatch(init(UserActionType.USER_DELETE_TYPE))
	
	return new Promise((resolve,reject)=>{
		Api.delete(`/admin/usermanagement/user/delete/${id}`).then(resp=>{
			dispatch(success(UserActionType.USER_DELETE_TYPE,resp.data))
			dispatch(notifySuccess(resp.data.message))
			resolve(resp)
		}).catch(err=>{
			if(err.response){
				dispatch(notifyError(err.response.data.message))
				dispatch(failed(UserActionType.USER_DELETE_TYPE))
			}
			reject(err)
		})
	})
}