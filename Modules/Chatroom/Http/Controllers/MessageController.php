<?php

namespace Modules\Chatroom\Http\Controllers;
use App\Api\ApiResponse;
use Illuminate\Routing\Controller;

class MessageController extends Controller
{
   private $apiResponse;

   public function __construct(ApiResponse $apiResponse){
   		$this->apiResponse = $apiResponse;
   }
}
