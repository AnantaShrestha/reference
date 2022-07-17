import {ChatActionType} from '../../types'

const chatState = {
	chatUserList:[],
	chatUserMessage:[],
	chatUserMessageStoreResponse : {},
	chatUserListLoadingResponse:false,
	chatUserMessageLoadingResponse:false,
	chatUserMessageStoreLoadingResponse :false
}


const ChatReducer = (state=chatState,action) =>{
	switch(action.type){
		case ChatActionType.CHAT_USER_LIST_TYPE_INIT :
		
			return{
				...state,
				chatUserListLoadingResponse:true
			}
		case ChatActionType.CHAT_USER_LIST_TYPE_SUCCESS:

			return{
				...state,
				chatUserListLoadingResponse:false,
				chatUserList:action.payload.items.data
			}
		case ChatActionType.CHAT_USER_LIST_TYPE_FAILED:

			return{
				...state,
				chatUserListLoadingResponse:false
			}
		case ChatActionType.CHAT_USER_GET_MESSAGE_TYPE_INIT:
			return{
				chatUserMessageLoadingResponse:true
			}
		case ChatActionType.CHAT_USER_GET_MESSAGE_TYPE_SUCCESS:
			return{
				chatUserMessageLoadingResponse:false,
				chatUserMessage:action.payload.items
			}
		case ChatActionType.CHAT_USER_GET_MESSAGE_TYPE_FAILED:
			return{
				chatUserMessageLoadingResponse:false,

			}
		case ChatActionType.CHAT_USER_STORE_MESSAGE_TYPE_INIT:
			return{
				chatUserMessageStoreLoadingResponse:true,
				chatUserMessageStoreResponse:{}
				
			}
		case ChatActionType.CHAT_USER_STORE_MESSAGE_TYPE_SUCCESS:
			return{
				chatUserMessageStoreLoadingResponse:false,
				chatUserMessageStoreResponse:action.payload.items
			}
		case ChatActionType.CHAT_USER_STORE_MESSAGE_TYPE_FAILED:
			return{
				chatUserMessageStoreLoadingResponse:false,
				chatUserMessageStoreResponse:{}
			}
		default:
			return state
	}
}

export default ChatReducer
