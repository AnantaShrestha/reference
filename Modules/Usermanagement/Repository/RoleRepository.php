<?php
namespace Modules\Usermanagement\Repository;
use Modules\Usermanagement\Entities\Role;
class RoleRepository{
	private $role;
	public function __construct(){
		$this->role = new Role();
	}
	/**
	* @return get list of role
	*/
	public function getRolePagination(array $data=null){
		// $roles=\DB::table('roles AS role')
		// 		->leftJoin('role_permissions',function($join){
		// 			$join->on('role.id','=','role_permissions.role_id')
		// 			->leftJoin('permissions','permissions.id','=','role_permissions.permission_id')
		// 			->select('permissions.id','permissions.name');
		// 		})
		// 		->select('role.id','role.name','role.created_at','permissions.name AS permission_name','permissions.id AS permission_id')
		// 		->orderBy('created_at','desc');
		$roles =$this->role
					->with('permissions')
					->orderBy('created_at','desc');
		if($data['search'])
			$roles=$roles->where('name','LIKE','%'.$data['search'].'%');
		$roles=$roles->paginate($data['perPage'],['*'],'page',$data['page']);
		
		return $roles;
	}

	/**
	 * @return create role 
	 */
	public function storeRole(array $data){
		$role =$this->role->create([
					'name' => $data['name']
				]);
		if(isset($data['permissions'])){
			$role->permissions()->attach($data['permissions']);
		}

		return $role;
	}

	/**
	 * @return  get role according to id
	 */
	public function findRole(int $id){

		return $this->role
				->where('id',$id)
				->with('permissions')
				->select('id','name')
				->first();
	}

	/**
	 * @return null
	 * update role according to id
	 */
	public function updateRole(array $data,int $id){
		$role=$this->findRole($id);
		$role->update([
			'name' =>$data['name']
		]);
		if(isset($data['permissions'])){
			$role->permissions()->detach();
			$role->permissions()->attach($data['permissions']);
		}

		return $role;
	}

	/**
	 * @return null
	 * delete role according to id
	 */
	public function deleteRole($id){
		$role=$this->findRole($id);
		$role->permissions()->detach();
		$role->delete();

		return $role;
	}
}