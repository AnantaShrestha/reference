<?php

namespace Modules\Usermanagement\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Usermanagement\Repository\UserRepository;
use Modules\Usermanagement\Http\Requests\UserRequest;
use App\Api\ApiResponse;
class UserController extends Controller
{
    private $apiReposnse,$userRepository;

    public function __construct(ApiResponse $apiReposnse
                                 UserRepository $userRepository){
        $this->apiResponse = $apiResponse;
        $this->userRepository = $userRepository;
    }


    /**
     * @return
     * store user
     */
    public function store(UserRequest $reqeust){
        try{
             $user=$this->userRepository
                                ->storeUser($request->validated());

            return $this->apiResponse
                            ->responseSuccess($user,'user created successfully',SUCCESS);

        }catch(\Exceptions $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }
}
