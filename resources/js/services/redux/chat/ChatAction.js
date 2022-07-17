import {ChatActionType} from '../../types'
import {init,success,notifyError,notifySuccess} from '../../common'

//get chat user list
export const ChatUserListAction = (data) => (dispatch) =>{
	dispatch(init(ChatActionType.CHAT_USER_LIST_TYPE))
	let query =data ? '?page='+data.page+'&&perPage='+data.perPage+'&&search='+data.search : ''

	return new Promise((resolve,reject)=>{
		Api.get(`/admin/chat/users?${query}`).then(resp=>{
			dispatch(success(ChatActionType.CHAT_USER_LIST_TYPE,resp.data))
			resolve(resp)
		}).catch(err=>{
			if(err.response){
				dispatch(notifyError(err.response.data.message))
				dispatch(failed(ChatActionType.CHAT_USER_LIST_TYPE))
			} 
			reject(err)
		})
	})
}

//get user message
export const ChatUserGetMessageAction = (receiverId) =>(dispatch) =>{
	dispatch(init(ChatActionType.CHAT_USER_GET_MESSAGE_TYPE))

	return new Promise((resolve,reject)=>{
		Api.get(`/admin/chat/user/message/${receiverId}`).then(resp=>{
			dispatch(success(ChatActionType.CHAT_USER_GET_MESSAGE_TYPE,resp.data))
			resolve(resp)
		}).catch(err=>{
			if(err.response){
				dispatch(notifyError(err.response.data.message))
				dispatch(failed(ChatActionType.CHAT_USER_LIST_TYPE))
			} 
			reject(err)
		})
	})
}


//store message
export const ChatUserStoreMessageAction = (body) => (dispatch) =>{
	dispatch(init(ChatActionType.CHAT_USER_STORE_MESSAGE_TYPE))

	return new Promise((resolve,reject)=>{
		Api.post('/admin/chat/user/message/store',body).then(resp=>{
			dispatch(success(ChatActionType.CHAT_USER_STORE_MESSAGE_TYPE,resp.data))
			resolve(resp)
		}).catch(err=>{
			if(err.response){
				dispatch(notifyError(err.response.data.message))
				dispatch(failed(ChatActionType.CHAT_USER_LIST_TYPE))
			} 
			reject(err)
		})
	})

}