<?php 
namespace Modules\Usermanagement\Repository;
use Modules\Usermanagement\Entities\Permission;
class PermissionRepository{
	private $permission;
	public function __construct(){
		$this->permission=(new Permission);
	}
	/**
	 * get list of permission
	 */
	public function getPermissionPagination(array $data=null){
		$permissions = \DB::table('permissions')
					->select('id','name','access_uri','created_at')
					->orderBy('created_at','desc');
		if($data['search'])
			$permissions=$permissions->where('name','LIKE','%'.$data['search'].'%');
		$permissions=$permissions->paginate($data['perPage'],['*'],'page',$data['page']);

		return $permissions;
	}
	/**
	 * @return null
	 * store permission in database
	 */
	public function storePermission(array $data){

		return $this->permission->create($data);
	}
	/**
	 * @return permission according to id
	 */
	public function findPermission(int $id){

		return $this->permission
				->where('id',$id)
				->select('id','name','access_uri')
				->first();
	}
	/**
	 * @return null
	 * update permission in database
	 */
	public function updatePermission(array $data,int $id){
		$permission=$this->findPermission($id);
		$permission->update($data);

		return $permission;
	}
	/**
	 * @return null
	 * delete permission in database
	 */
	public function deletePermission(int $id){
		$permission=$this->findPermission($id);
		$permission->delete();
		
		return $permission;
	}
}