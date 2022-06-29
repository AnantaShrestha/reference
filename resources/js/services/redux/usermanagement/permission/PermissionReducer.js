import {PermissionActionType} from '../../../types'
const permissionState= {
  permissionRouteList: [],
  permissionList:[],
  permission:{},
  permissionFormLoadingResponse:false,
  permissionRouteListLoadingResponse:false,
  permissionListLoadingResponse:false,
  permissionDeleteLoadingResponse:false
}


const PermissionReducer = (state=permissionState,action) =>{
	switch(action.type){
		case PermissionActionType.PERMISSION_LIST_TYPE_INIT :
			return{
				...state,
				permissionListLoadingResponse:true
			}
		case PermissionActionType.PERMISSION_LIST_TYPE_SUCCESS:
			return{
				...state,
				permissionList:action.payload.items.data,
				permissionListLoadingResponse:false
			}
		case PermissionActionType.PERMISSION_CREATE_TYPE_INIT :
			return{
				...state,
				permissionFormLoadingResponse:true
			}
		case PermissionActionType.PERMISSION_CREATE_TYPE_SUCCESS :
			return{
				...state,
				permissionFormLoadingResponse:false
			}
		case PermissionActionType.PERMISSION_EDIT_TYPE_SUCCESS:
			return{
				...state,
				permission:action.payload.items
			}
		case PermissionActionType.PERMISSION_UPDATE_TYPE_INIT:
			return{
				...state,
				permissionFormLoadingResponse:true
			}
		case PermissionActionType.PERMISSION_UPDATE_TYPE_SUCCESS:
			return{
				...state,
				permissionFormLoadingResponse:false
			}
		case PermissionActionType.PERMISSION_DELETE_TYPE_INIT:
			return{
				...state,
				permissionDeleteLoadingResponse:true,
			}
		case PermissionActionType.PERMISSION_DELETE_TYPE_SUCCESS:
			return{
				...state,
				permissionDeleteLoadingResponse:false,
				permissionList:state.permissionList.filter(permission =>{ return permission.id != action.payload.items.id})
			}
		case PermissionActionType.PERMISSION_ROUTE_LIST_TYPE_INIT:
			return{
				...state,
				permissionRouteListLoadingResponse:true
			}
		case PermissionActionType.PERMISSION_ROUTE_LIST_TYPE_SUCCESS:
			return{
				...state,
				permissionRouteList:action.payload.items,
				permissionRouteListLoadingResponse:false
			}

		default :
			return state
	}
}

export default PermissionReducer