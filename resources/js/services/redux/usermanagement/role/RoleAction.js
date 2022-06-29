import {RoleActionType} from '../../../types'
import {init,success,notifyError,notifySuccess} from '../../../common'


//create role action
export const RoleCreateAction =(data,navigate) => (dispatch) =>{
	dispatch(init(PermissionActionType.ROLE_CREATE_TYPE))

	return new Promise((resolve,reject)=>{
	})
}