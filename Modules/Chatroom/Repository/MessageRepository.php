<?php 
namespace Modules\Chatroom\Repository;
use Modules\Chatroom\Entities\Message;

class MessageRepository{
	private $message;

	public function __construct(){
		$this->message =  (new Message);
	}
}	