import {NotificationActionType} from './types'
export const init=(type)=>{
	return {
		type: `${type}_INIT`,
	};
}

export const success = (type,payload) =>{
	return{
		type:`${type}_SUCCESS`,
		payload
	}
}

export const failed = (type) =>{
	return{
		type:`${type}_FAILED`
	}
}

export const notifySuccess = (payload) =>{
	return{
		type:NotificationActionType.NOTIFICATION_SUCCESS_MESSAGE,
		payload
	}
}

export const notifyError = (payload) =>{
	return{
		type:NotificationActionType.NOTIFICATION_ERROR_MESSAGE,
		payload
	}
}


