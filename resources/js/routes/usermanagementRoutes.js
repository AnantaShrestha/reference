import {lazy} from 'react'
import PermissionList from '@/views/admin/usermanagement/permission'
import PermissionForm from '@/views/admin/usermanagement/permission/createEdit'
import RoleList from '@/views/admin/usermanagement/role/'
import RoleForm from '@/views/admin/usermanagement/role/createEdit'
import UserList from '@/views/admin/usermanagement/user'
import UserForm from '@/views/admin/usermanagement/user/createEdit'

export default[
	{
		path:'/admin/usermanagement/permission',
		exact:true,
		auth:true,
		component:<PermissionList />
	},
	{
		path:'/admin/usermanagement/permission/create',
		exact:true,
		auth:true,
		component:<PermissionForm />
	},
	{
		path:'/admin/usermanagement/permission/edit/:id',
		exact:true,
		auth:true,
		component:<PermissionForm />
	},
	{
		path:'/admin/usermanagement/role',
		exact:true,
		auth:true,
		component:<RoleList />
	},
	{
		path:'/admin/usermanagement/role/create',
		exact:true,
		auth:true,
		component:<RoleForm />
	},
	{
		path:'/admin/usermanagement/role/edit/:id',
		exact:true,
		auth:true,
		component:<RoleForm />
	},
	{
		path:'admin/usermanagement/user',
		exact:true,
		auth:true,
		component:<UserList />
	},
	{
		path:'/admin/usermanagement/user/create',
		exact:true,
		auth:true,
		component:<UserForm />
	},
	{
		path:'/admin/usermanagement/user/edit/:id',
		exact:true,
		auth:true,
		component:<UserForm />
	}
];