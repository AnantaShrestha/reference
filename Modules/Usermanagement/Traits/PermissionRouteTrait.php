<?php 
namespace Modules\Usermanagement\Traits;
trait PermissionRouteTrait{
	/**
	 * @return get all list of routes
	 */
	public function routeCollection(){
		$routes=\Route::getRoutes()->getRoutesByMethod();
		return array_merge($routes['GET'],$routes['POST'],$routes['DELETE'],$routes['PUT']);
	}
	/**
	 * @return make a route list 
	 */
	public function routePermissionList(){
		$routesCollection=$this->routeCollection();
		$filterRoutes=$this->filterRoutes($routesCollection,'api');
		$permissionRouteList = [];
		$permissionActionRoute = [];
		$permissionRouteList['admin'] =[
			'full-control' =>'api/admin/*'
		];
		foreach($filterRoutes as $key => $route){
			$routePrefix=$route->getPrefix();
			$prefixArr=explode('/',$routePrefix);
			$module =end($prefixArr);
			$permissionRouteList[$module]=[
				'view'=>$routePrefix,
			];
			if(strpos($key,'store') !== false) $permissionActionRoute[$module]['create'] =$route->uri;
			if(strpos($key,'edit') !== false) $permissionActionRoute[$module]['edit'] =$route->uri;
			if(strpos($key,'delete') !== false) $permissionActionRoute[$module]['delete'] =$route->uri;
		}
		$finalRoute=array_merge_recursive($permissionRouteList,$permissionActionRoute);
		unset($finalRoute['chat']);

		return $finalRoute;
	}
	/**
	 * @return filter routes
	 */
	public function filterRoutes($routes,$search){
		$filterRoutes= array_filter(
			array_keys($routes),function($key) use ($search){
				if(!in_array($key,$this->without()))
					return stristr($key,$search);
			});
		return array_intersect_key($routes,array_flip($filterRoutes));
	}

	/**
	 * @return except 
	 */
	public function without()
    {
        $prefix = 'api/admin/';
        return [
        	$prefix.'login',
        	$prefix.'logout',
            $prefix.'dashboard',
            'api/user',
            $prefix.'usermanagement/permission/routeList',
        ];
    }
}