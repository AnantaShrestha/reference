<?php

namespace Modules\Usermanagement\Entities;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $guarded = [];
    protected $table='permissions';

    public function setAccessUriAttribute($value)
    {
        $this->attributes['access_uri'] =implode(',',$value ?? []);
    }

}
