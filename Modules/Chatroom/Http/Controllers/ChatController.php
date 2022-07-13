<?php

namespace Modules\Chatroom\Http\Controllers;
use Modules\Usermanagement\Repository\UserRepository;
use Illuminate\Routing\Controller;
use App\Api\ApiResponse;
class ChatController extends Controller
{
	private $apiResponse,$userRepository;

	public function __construct(ApiResponse $apiResponse,
									UserRepository $userRepository){
		$this->userRepository = $userRepository;
		$this->apiResponse = $apiResponse;
	}

    public function users(){
         try{
            $data= [
                'perPage'=> $_GET['perPage'] ?? 10,
                'page'=> $_GET['page'] ?? 1,
                'search' => $_GET['search'] ?? ''
            ];
            $users=$this->userRepository
                            ->getChatUserPagination($data);

            return $this->apiResponse
                            ->responseSuccess($users,'success',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }
}
