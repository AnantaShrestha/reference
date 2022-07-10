<?php
namespace Modules\Chatroom\Repository;
use Modules\Usermanagement\Entities\User;

class ChatRepository{
	private $user;

	public function __construct(){
		$this->user = (new User);
	}

	public function getChatUserPagination(array $data = null){
		$users =$this->user
					->where('id','!=',currentUser()->id)
					->select('id','name',email)
					->orderBy('name','asc');
		if($data['search'])
			$users=$users->where('name','LIKE','%'.$data['search'].'%');
		$users=$users->paginate($data['perPage'],['*'],'page',$data['page']);
		
		return $users;
	}
}