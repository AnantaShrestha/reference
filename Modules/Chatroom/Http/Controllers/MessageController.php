<?php

namespace Modules\Chatroom\Http\Controllers;
use App\Api\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\Chatroom\Repository\MessageRepository;
use Modules\Chatroom\Http\Requests\MessageRequest;
class MessageController extends Controller
{
   private $apiResponse,$messageRepository;

   public function __construct(ApiResponse $apiResponse,
                                 messageRepository $messageRepository){
   		$this->apiResponse = $apiResponse;
         $this->messageRepository = $messageRepository;
   }

   /**
    * @return 
    * list of messsage
    */
   public function index($id){
       try{
            $messages=$this->messageRepository
                            ->getUserMessage($id);

            return $this->apiResponse
                            ->responseSuccess($messages,'success',SUCCESS);
        }catch(Exception $e){

            return $this->apiResponse
                            ->responseError(null,$e->getMessage(),$e->statusCode());
        }
   }

   /**
    * @return 
    * store message
    */

   public function store(MessageRequest $request){
      try{
         $message =$this->messageRepository
                              ->storeMessage($request->validated());

         return $this->apiResponse
                           ->responseSuccess($message,'success',SUCCESS);

      }catch(Exception $e){

      }
   }
}
