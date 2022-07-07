<?php 
namespace Modules\Usermanagement\Repository;
use Modules\Entities\User;

class UserRepository{
	private $user;

	public function __construct(){
		$this->user = (new User);
	}

	/**
	 * @return store user
	 */
	public function store(array $data){

		return $this->user->create($data);
	}
}