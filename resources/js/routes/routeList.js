import Login from '@/views/admin/auth/login'
import Dashboard from '@/views/admin/dashboard'
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
	}
];
export default [...routes,...UsermanagementRoutes]