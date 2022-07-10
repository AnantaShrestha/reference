<?php
namespace Modules\Usermanagement\Observers;
use Modules\Usermanagement\Entities\Role;
class RoleObserver{
     /**
     * @return null
     * creating 
     */
    public function creating(Role $role){
        $role->created_by=currentUser()->id;
    }

    /**
     * @return null
     * updating
    */
    public function updating(Role $role){
        $role->updated_by=currentUser()->id;
    }


}