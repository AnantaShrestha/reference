<?php
namespace Modules\Usermanagement\Observers;
use Modules\Usermanagement\Entities\Role;
class RoleObserver{
     /**
     * @return null
     * creating 
     */
    public function creating(Role $role){
        $role->slug = \Str::slug($role->name);
        $role->created_by=auth()->guard('api')->user()->id;
    }

    /**
     * @return null
     * updating
    */
    public function updating(Role $role){
        $role->slug = \Str::slug($role->name);
        $role->updated_by=auth()->guard('api')->user()->id;
    }


}