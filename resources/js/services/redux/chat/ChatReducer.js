import {ChatActionType} from '../../types'

const chatState = {
	chatUserList:[],
	chatUserListLoadingResponse:false,
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
		default:
			return state
	}
}

export default ChatReducer
