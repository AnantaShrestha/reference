import {RoleActionType} from '../../../types'
const roleState= {
	roleList:[],
	role:{},
	roleListLoadingResponse:false,
	roleFormLoadingResponse:false,
	roleDeleteLoadingResponse:false
}

const RoleReducer = (state=roleState,action) =>{
	switch(action.type){
		case RoleActionType.ROLE_LIST_TYPE_INIT:
			return{
				...state,
				roleListLoadingResponse:true
			}
		case RoleActionType.ROLE_LIST_TYPE_SUCCESS:
			return{
				...state,
				roleListLoadingResponse:false,
				roleList:action.payload.items.data
			}

		case RoleActionType.ROLE_CREATE_TYPE_INIT:
			return{
				...state,
				roleFormLoadingResponse:true
			}
		case RoleActionType.ROLE_CREATE_TYPE_SUCCESS:
			return{
				...state,
				roleFormLoadingResponse:false
			}
		case RoleActionType.ROLE_EDIT_TYPE_SUCCESS:
			return{
				...state,
				role:action.payload.items
			}
		case RoleActionType.ROLE_UPDATE_TYPE_INIT:
			return{
				...state,
				roleFormLoadingResponse:true
			}
		case RoleActionType.ROLE_UPDATE_TYPE_SUCCESS:
			return{
				...state,
				roleFormLoadingResponse:false
			}
		case RoleActionType.ROLE_DELETE_TYPE_INIT:
			return{
				...state,
				roleDeleteLoadingResponse:true,
			}
		case RoleActionType.ROLE_DELETE_TYPE_SUCCESS:
			return{
				...state,
				roleDeleteLoadingResponse:false,
				roleList:state.roleList.filter(role =>{ return role.id != action.payload.items.id})
			}
		default:
			return state
	}
}

export default RoleReducer