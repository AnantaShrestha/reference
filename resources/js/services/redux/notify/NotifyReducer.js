import {NotificationActionType} from '../../types'
const notificationState = {
	messageObj:{}
}

const NotifyReducer = (state=notificationState,action) =>{
	switch(action.type){
		case NotificationActionType.NOTIFICATION_SUCCESS_MESSAGE :
			return{
				...state,
				messageObj:{
					type:'success',
					message:action.payload
				}
			}
		case NotificationActionType.NOTIFICATION_ERROR_MESSAGE :
			return{
				...state,
				messageObj:{
					type:'danger',
					message:action.payload
				}
			}
		default:
			return state
	}
}

export default NotifyReducer