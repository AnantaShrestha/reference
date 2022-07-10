<?php

namespace Modules\Usermanagement\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Usermanagement\Repository\UserRepository;
use Modules\Usermanagement\Http\Requests\UserRequest;
use App\Api\ApiResponse;
class UserController extends Controller
{
    private $apiResponse,$userRepository;

    public function __construct(ApiResponse $apiResponse,
                                 UserRepository $userRepository){
        $this->apiResponse = $apiResponse;
        $this->userRepository = $userRepository;
    }

    /**
     * @return 
     * user list with pagination
     */
    public function index(){
         try{
            $data= [
                'perPage'=> $_GET['perPage'] ?? 10,
                'page'=> $_GET['page'] ?? 1,
                'search' => $_GET['search'] ?? ''
            ];
            $users=$this->userRepository
                            ->getUserPagination($data);

            return $this->apiResponse
                            ->responseSuccess($users,'success',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }


    /**
     * @return
     * store user
     */
    public function store(UserRequest $request){
        try{
             $user=$this->userRepository
                                ->storeUser($request->validated());

            return $this->apiResponse
                            ->responseSuccess($user,'User created successfully',SUCCESS);

        }catch(\Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }

    /**
     * @return 
     *  get user according to id
     */
    public function edit($id){
        try{
            $user=$this->userRepository
                                ->findUser($id);

            return $this->apiResponse
                            ->responseSuccess($user,'success',SUCCESS);

        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }

    /**
     * @return
     * update user
     */
    public function update(UserRequest $request,$id){
         try{
            $user=$this->userRepository
                                ->updateUser($request->validated(),$id);

            return $this->apiResponse
                            ->responseSuccess($user,'User updated successfully',SUCCESS);

        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }


    /**
     * @return 
     * delete user 
     */
    public function delete($id){
        try{
            $user=$this->userRepository
                                ->deleteUser($id);

            return $this->apiResponse
                            ->responseSuccess($user,'User deleted successfully',SUCCESS);

        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }

}
