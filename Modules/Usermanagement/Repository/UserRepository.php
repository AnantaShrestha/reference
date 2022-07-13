<?php 
namespace Modules\Usermanagement\Repository;
use Modules\Usermanagement\Entities\User;

class UserRepository{
	private $user;


	public function __construct(){
		$this->user = (new User);
	}

	public function getUserPagination(array $data = null){
		$users =$this->user
					->with('roles')
					->select('id','name','username','email','phone_no','created_at')
					->orderBy('created_at','desc');
		if($data['search'])
			$users=$users->where('name','LIKE','%'.$data['search'].'%');
		$users=$users->paginate($data['perPage'],['*'],'page',$data['page']);
		
		return $users;
	}

	/**
	* @return store user
	*/
	public function storeUser(array $data){
		$user =$this->user->create([
			'name' => $data['name'],
			'username' => $data['username'],
			'email' => $data['email'],
			'phone_no' =>$data['phone_no'],
			'password' =>$data['password']
		]);
		if(isset($data['roles'])){
			$user->roles()->attach($data['roles']);
		}

		return $user;
	}

	/**
	 * @return 
	 * find user
	 */
	public function findUser(int $id){

		return $this->user
						->where('id',$id)
						->with('roles')
						->select('id','name','username','email','phone_no','created_at')
						->firstOrFail($id);
	}

	/**
	 * @return 
	 * update user
	 */
	public function updateUser(array $data,int $id){
		$user=$this->findUser($id);
		$user->update([
			'name' => $data['name'],
			'username' => $data['username'],
			'email' => $data['email'],
			'phone_no' =>$data['phone_no'],
		]);
		if(isset($data['roles'])){
			$user->roles()->detach();
			$user->roles()->attach($data['roles']);
		}

		return $user;
	}

	/**
	 * @return delete user
	 * 
	 */
	public function deleteUser(int $id){
		$user=$this->findUser($id);
		$user->roles()->detach();
		$user->delete();

		return $user;
	}


	/**
	 * @return
	 * chat user list
	 */
	public function getChatUserPagination(array $data = null){
		$users =$this->user
					->where('id','!=',currentUser()->id)
					->select('id','name','username','email')
					->orderBy('name','asc');
		if($data['search'])
			$users=$users->where('name','LIKE','%'.$data['search'].'%');
		$users=$users->paginate($data['perPage'],['*'],'page',$data['page']);
		
		return $users;
	}
}