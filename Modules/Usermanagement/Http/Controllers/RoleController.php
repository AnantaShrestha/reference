<?php

namespace Modules\Usermanagement\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Usermanagement\Repository\RoleRepository;
use Modules\Usermanagement\Http\Requests\RoleRequest;
use App\Api\ApiResponse;
class RoleController extends Controller
{
    private $apiResponse,$roleRepository;
    public function __construct(ApiResponse $apiResponse,
                                RoleRepository $roleRepository){
        $this->apiResponse = $apiResponse;
        $this->roleRepository =$roleRepository;
    }

    /**
     * @return list of the role with Pagination
     *  
    */
    public function index(){
        try{
            $data= [
                'perPage'=> $_GET['perPage'] ?? 10,
                'page'=> $_GET['page'] ?? 1,
                'search' => $_GET['search'] ?? ''
            ];
            $roles=$this->roleRepository
                            ->getRolePagination($data);

            return $this->apiResponse
                            ->responseSuccess($roles,'success',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }

    /**
     * @return null
     * store role in the database
     */
    public function store(RoleRequest $request){
        try{
            $role=$this->roleRepository
                            ->storeRole($request->validated());

            return $this->apiResponse
                            ->responseSuccess($role,'Role created successfully',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }

    /**
     * @return role according to id
     */
    public function edit($id){
        try{
            $role=$this->roleRepository
                            ->findRole($id);

            return $this->apiResponse
                            ->responseSuccess($role,'success',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }

    /**
     * @return null
     * update role according to id
     */
    public function update(RoleRequest $request,$id){
        try{
            $role=$this->roleRepository
                            ->updateRole($request->validated(),$id);

            return $this->apiResponse
                            ->responseSuccess($role,'Role updated successfully',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }

    /**
     * @return null
     * delete role according to id
     */
    public function delete($id){
       try{
            $role=$this->roleRepository->deleteRole($id);

            return $this->apiResponse
                            ->responseSuccess($role,'Role delete successfully',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }


}
