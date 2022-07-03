import {PermissionActionType} from '../../../types'
import {init,success,notifyError,notifySuccess} from '../../../common'
//get permission pagination
export const PermissionListAction = (data) => (dispatch) =>{
	dispatch(init(PermissionActionType.PERMISSION_LIST_TYPE))
	let query =data ? '?page='+data.page+'&&perPage='+data.perPage+'&&search='+data.search : ''

	return new Promise((resolve,reject) =>{
		Api.get(`admin/usermanagement/permission?${query}`).then(resp=>{
			dispatch(success(PermissionActionType.PERMISSION_LIST_TYPE,resp.data))
			resolve(resp)
		}).catch(err=>{
			if(err.response) dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})
}
//create permission action
export const PermissionCreateAction =(data,navigate) => (dispatch) =>{
	dispatch(init(PermissionActionType.PERMISSION_CREATE_TYPE))

	return new Promise((resolve,reject)=>{
		Api.post('/admin/usermanagement/permission/store',data).then(resp=>{
			dispatch(success(PermissionActionType.PERMISSION_CREATE_TYPE,resp.data))
			dispatch(notifySuccess(resp.data.message))
			navigate('/admin/usermanagement/permission')
			resolve(resp)
		}).catch(err=>{
			if(err.response) dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})
}
//find permission according to id action
export const PermissionEditAction = (id) => (dispatch) =>{

	return new Promise((resolve,reject)=>{
		Api.get(`/admin/usermanagement/permission/edit/${id}`).then(resp=>{
			dispatch(success(PermissionActionType.PERMISSION_EDIT_TYPE,resp.data))
			resolve(resp)
		}).catch(err=>{
			if(err.response) dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})

}
//update permission according to id
export const PermissionUpdateAction = (data,id,navigate) => (dispatch) =>{
	dispatch(init(PermissionActionType.PERMISSION_UPDATE_TYPE))

	return new Promise((resolve,reject)=>{
		Api.put(`/admin/usermanagement/permission/edit/${id}`,data).then(resp=>{
			dispatch(success(PermissionActionType.PERMISSION_UPDATE_TYPE,resp.data))
			dispatch(notifySuccess(resp.data.message))
			navigate('/admin/usermanagement/permission')
			resolve(resp)
		}).catch(err=>{
			if(err.response) dispatch(notifyError(err.response.data.message))
				reject(err)
		})
	})
}
//delete permission action
export const PermissionDeleteAction = (id) => (dispatch) =>{
	dispatch(init(PermissionActionType.PERMISSION_DELETE_TYPE))

	return new Promise((resolve,reject)=>{
		Api.delete('/admin/usermanagement/permission/delete/'+id).then(resp=>{
			dispatch(success(PermissionActionType.PERMISSION_DELETE_TYPE,resp.data))
			dispatch(notifySuccess(resp.data.message))
			resolve(resp)
		}).catch(err=>{
			if(err.response) dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})
}
// get permission route list action
export const PermissionRouteListAction = () => (dispatch) =>{
	dispatch(init(PermissionActionType.PERMISSION_ROUTE_LIST_TYPE))

	return new Promise((resolve,reject)=>{
		Api.get('/admin/usermanagement/permission/routeList').then(resp=>{
			dispatch(success(PermissionActionType.PERMISSION_ROUTE_LIST_TYPE,resp.data))
			resolve(resp)
		}).catch(err=>{
			if(err.response) dispatch(notifyError(err.response.data.message))
			reject(err)
		})
	})
}