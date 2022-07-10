import Login from '@/views/admin/auth/login'
import Dashboard from '@/views/admin/dashboard'
import ChatRoom from '@/views/admin/chatroom'
import UsermanagementRoutes from './usermanagementRoutes'
const routes=[
	{
		path:'/admin/login',
		exact:true,
		auth:false,
		component:<Login />
	},
	{
		path:'/admin/dashboard',
		exact:true,
		auth:true,
		component:<Dashboard />
	},
	{
		path:'/admin/chat',
		exact:true,
		auth:true,
		component:<ChatRoom />
	}
];
export default [...routes,...UsermanagementRoutes]