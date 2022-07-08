import {UserActionType} from '../../../types'
import {init,success,notifyError,notifySuccess} from '../../../common'




export const UserCreateAction = (data,navigate) => (dispatch)=>{
		dispatch(init(UserActionType.USER_CREATE_TYPE))

		return new Promise((resolve,reject) =>{
			
		})
}