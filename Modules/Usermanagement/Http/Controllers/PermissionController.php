<?php
namespace Modules\Usermanagement\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Usermanagement\Repository\PermissionRepository;
use Modules\Usermanagement\Http\Requests\PermissionRequest;
use Modules\Usermanagement\Traits\PermissionRouteTrait;
use App\Api\ApiResponse;
class PermissionController extends Controller
{
    use PermissionRouteTrait;
    private $apiResponse,$permissionRepository;
    public function __construct(ApiResponse $apiResponse,
                                    PermissionRepository $permissionRepository){
        $this->apiResponse =$apiResponse;
        $this->permissionRepository=$permissionRepository;
    }
    /**
     * @return list of permission with pagination
     */
    public function index(){
         try{
            $data= [
                'perPage'=> $_GET['perPage'] ?? 10,
                'page'=> $_GET['page'] ?? 1,
                'search' => $_GET['search'] ?? ''
            ];
            $permissions=$this->permissionRepository
                                    ->getPermissionPagination($data);

            return $this->apiResponse
                            ->responseSuccess($permissions,'success',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }
    /**
     * @return null
     * store permission
     */
    public function store(PermissionRequest $request){
        try{
            $permission=$this->permissionRepository
                                ->storePermission($request->validated());

            return $this->apiResponse
                            ->responseSuccess($permission,'Permission created successfully',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }
    /**
     * @return permission according to id
     */
    public function edit($id){
        try{
            $permission=$this->permissionRepository
                                ->findPermission($id);

            return $this->apiResponse
                            ->responseSuccess($permission,'success',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }
    /**
     * @return permission update according to id
     */
    public function update(PermissionRequest $request,$id){
        try{
            $permission=$this->permissionRepository
                                ->updatePermission($request->validated(),$id);

            return $this->apiResponse
                            ->responseSuccess($permission,'Permission updated successfully',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }

    /**
     * @return null
     * delete permission
     */
    public function delete($id){
        try{
            $permission=$this->permissionRepository
                                    ->deletePermission($id);

            return $this->apiResponse
                            ->responseSuccess($permission,'Permission delete successfully',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }
    /**
     * @return permission route list
     * 
     */
    public function routeList(){
        try{
            $routeList=$this->routePermissionList();

            return $this->apiResponse
                            ->responseSuccess($routeList,'Success',SUCCESS);
        }catch(Exception $e){
            
            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
    }
}
