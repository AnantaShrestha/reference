import {AuthActionType} from '../../types'
const authState= {
	isLoggedIn:false,
	loginLoadingResponse:false,
	logoutLoadinResponse:false,
	user:{},
	userPermission:[],
}
const getAuthState = () =>{
	const getToken =localStorage.getItem('token')
	if(getToken){
		const authObj =JSON.parse(getToken)
		const now = new Date()
		if(now.getTime() > authObj.expiry){
			localStorage.removeItem('token')
			delete axios.defaults.headers.common['Authorization']
			return authState
		}
		return {
			isLoggedIn:true,
			user:authObj.user
		}
	}
	else{
		return authState
	}
		
}
const newAuth=getAuthState()
const AuthReducer = (state=newAuth,action)=>{
	switch(action.type){
		case AuthActionType.AUTH_LOGIN_TYPE_INIT:
			return{
				...state,
				loginLoadingResponse:true
			}
		case AuthActionType.AUTH_LOGIN_TYPE_SUCCESS:
			const now =new Date()
			const setToken ={
				token:action.payload.items.access_token,
				expiry:now.getTime() + action.payload.items.expires_in,
				user:action.payload.items.user
			}
			localStorage.setItem('token',JSON.stringify(setToken))
			axios.defaults.headers.common[
				"Authorization"
			]  =`Bearer ${action.payload.items.access_token}`;
			return{
				...state,
				isLoggedIn:true,
				loginLoadingResponse:false,
				user:action.payload.items.user,
			}
		case AuthActionType.AUTH_LOGOUT_TYPE_INIT:
			return{
				...state,
				logoutLoadinResponse:true
			}
		case AuthActionType.AUTH_LOGOUT_TYPE_SUCCESS:{
			localStorage.removeItem('token')
			delete axios.defaults.headers.common['Authorization']
			return{
				...state,
				isLoggedIn:false,
				logoutLoadinResponse:false,
				user:[]
			}
		}
		default:
			return state
	}
}

export default AuthReducer