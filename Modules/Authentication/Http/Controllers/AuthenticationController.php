<?php

namespace Modules\Authentication\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Usermanagement\Entities\User;
use App\Api\ApiResponse;
use JWTAuth;
use Validator;
class AuthenticationController extends Controller
{
    private $apiResponse;

    public function __construct(ApiResponse $apiResponse){
        $this->apiResponse = $apiResponse;
    }
    /**
    * post login 
    */
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->apiResponse->responseError($validator->errors(),'Invalid Data',VALIDATIONERROR);
        }
        if (!$token = JWTAuth::attempt($validator->validated())) {
            return $this->apiResponse->responseError(NULL,'Unauthorized', UNAUTHORIZED);
        }
        return $this->createNewToken($token);
    }

    /**
     * @return create token
     */
    protected function createNewToken($token){
        $user=auth('api')->user();
        $data=[
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60 * 7 * 24,
            'user' =>$user
        ];
        return $this->apiResponse->responseSuccess($data,'Login successfully',SUCCESS);
    }

    /**
     * @return logout user
     */
    public function logout(){
        $user=auth('api')->user();
        auth()->logout();
        return $this->apiResponse->responseSuccess(NULL,'Logout Successfully',SUCCESS);
    }

}
