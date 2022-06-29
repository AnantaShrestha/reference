<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
            try {
                $user =currentUser();
                return $next($request);
                
            } catch (Exception $e) {
                if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
                    return (new ApiResponse)->responseError(NULL,'Token Invalid',UNAUTHORIZED);
                }else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                    return (new ApiResponse)->responseError(NULL,'Token Expired',UNAUTHORIZED);
    
                }else{
                    return (new ApiResponse)->responseError(NULL,'Authorize token not found',UNAUTHORIZED);
                }
            }
    }
}
