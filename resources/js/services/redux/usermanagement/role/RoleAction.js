import {RoleActionType} from '../../../types'
import {init,success,notifyError,notifySuccess} from '../../../common'

//list of role action
export const RoleListAction = (data) => (dispatch) =>{
	dispatch(init(RoleActionType.ROLE_LIST_TYPE))
	let query =data ? '?page='+data.page+'&&perPage='+data.perPage+'&&search='+data.search : ''

	return new Promise((resolve,reject)=>{
		Api.get(`/admin/usermanagement/role?${query}`).then(resp=>{
			dispatch(success(RoleActionType.ROLE_LIST_TYPE,resp.data))
			resolve(resp)
		}).catch(err=>{
			if(err.response) dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})
}

//create role action
export const RoleCreateAction = (data,navigate) => (dispatch) =>{
	dispatch(init(RoleActionType.ROLE_CREATE_TYPE))

	return new Promise((resolve,reject)=>{
		Api.post('/admin/usermanagement/role/store',data).then(resp=>{
			dispatch(success(RoleActionType.ROLE_CREATE_TYPE,resp.data))
			dispatch(notifySuccess(resp.data.message))
			navigate('/admin/usermanagement/role')
			resolve(resp)
		}).catch(err=>{
			if(err.response) dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})
}

//find role according to id action
export const RoleEditAction = (id) => (dispatch) =>{

	return new Promise((resolve,reject)=>{
		Api.get(`/admin/usermanagement/role/edit/${id}`).then(resp=>{
			dispatch(success(RoleActionType.ROLE_EDIT_TYPE,resp.data))
			resolve(resp)
		}).catch(err=>{
			if(err.response) dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})
}

//update role according to id action
export const RoleUpdateAction = (data,id,navigate) => (dispatch) =>{
	dispatch(init(RoleActionType.ROLE_UPDATE_TYPE))

	return new Promise((resolve,reject)=>{
		Api.put(`admin/usermanagement/role/edit/${id}`,data).then(resp=>{
			dispatch(success(RoleActionType.ROLE_UPDATE_TYPE,resp.data))
			navigate('/admin/usermanagement/role')
			resolve(resp)
		}).catch(err=>{
			if(err.response) dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})
}

//delete role action
export const RoleDeleteAction = (id) => (dispatch) =>{
	dispatch(init(RoleActionType.ROLE_DELETE_TYPE))

	return new Promise((resolve,reject)=>{
		Api.delete('/admin/usermanagement/role/delete/'+id).then(resp=>{
			dispatch(success(RoleActionType.ROLE_DELETE_TYPE,resp.data))
			dispatch(notifySuccess(resp.data.message))
			resolve(resp)
		}).catch(err=>{
			if(err.response) dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})
}