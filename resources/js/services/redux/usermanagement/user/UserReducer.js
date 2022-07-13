import {UserActionType} from '../../../types'

const userState = {
	userList:[],
	user:{},
	userListLoadingResponse:false,
	userFormLoadingResponse:false,
	userDeleteLoadingResponse:false
}

const UserReducer = (state=userState,action) =>{
	switch(action.type){
		case UserActionType.USER_LIST_TYPE_INIT:

			return{
				...state,
				userListLoadingResponse:true
			}
		case UserActionType.USER_LIST_TYPE_SUCCESS:

			return{
				...state,
				userListLoadingResponse:false,
				userList:action.payload.items.data
			}
		case UserActionType.USER_LIST_TYPE_FAILED:

			return{
				...state,
				userListLoadingResponse:false
			}
		case UserActionType.USER_CREATE_TYPE_INIT:

			return{
				...state,
				userFormLoadingResponse:true
			}
		case UserActionType.USER_CREATE_TYPE_SUCCESS:

			return{
				...state,
				userFormLoadingResponse:false
			}
		case UserActionType.USER_CREATE_TYPE_FAILED:

			return{
				...state,
				userFormLoadingResponse:false
			}
		case UserActionType.USER_EDIT_TYPE_SUCCESS:

			return{
				...state,
				user:action.payload.items
			}
		case UserActionType.USER_UPDATE_TYPE_INIT:

			return{
				...state,
				userFormLoadingResponse:true
			}	
		case UserActionType.USER_UPDATE_TYPE_SUCCESS:

			return{
				...state,
				userFormLoadingResponse:false
			}
		case UserActionType.USER_UPDATE_TYPE_FAILED:

			return{
				...state,
				userFormLoadingResponse:false
			}
		case UserActionType.USER_DELETE_TYPE_INIT:

			return{
				...state,
				userDeleteLoadingResponse:true,
			}
		case UserActionType.USER_DELETE_TYPE_SUCCESS:

			return{
				...state,
				userDeleteLoadingResponse:false,
				userList:state.userList.filter(user =>{ return user.id != action.payload.items.id})
			}
		default:
		 return state
	}
}

export default UserReducer