<?php
namespace Modules\Usermanagement\Observers;
use Modules\Usermanagement\Entities\Permission;
class PermissionObserver{
    /**
     * @return null
     * creating 
     */
    public function creating(Permission $permission){
    	$permission->created_by=currentUser()->id;
    }

    /**
     * @return null
     * updating
     */
    public function updating(Permission $permission){
        $permission->updated_by=currentUser()->id;
    }


}