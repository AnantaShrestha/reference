import {combineReducers} from 'redux'
import AuthReducer from '../redux/auth/AuthReducer'
import NotifyReducer from '../redux/notify/NotifyReducer'
import PermissionReducer from '../redux/usermanagement/permission/PermissionReducer'
import RoleReducer from '../redux/usermanagement/role/RoleReducer'
import UserReducer from '../redux/usermanagement/user/UserReducer'
import ChatReducer from '../redux/chat/ChatReducer'
const RootReducers = combineReducers({
   authState:AuthReducer,
   notifyState:NotifyReducer,
   permissionState:PermissionReducer,
   roleState:RoleReducer,
   userState:UserReducer,
   chatState:ChatReducer
})

export default RootReducers