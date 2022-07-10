<?php

namespace Modules\Usermanagement\Entities;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
class User extends Authenticatable implements JwtSubject 
{
    protected $table = 'users';
    protected $fillable = [
        'name',
        'email',
        'username',
        'phone_no',
        'password',
        'image',
        'last_seen'
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function setPasswordAttribute($value){
        $this->attributes['password'] =bcrypt($value);
    }

     /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
     /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class,'user_roles', 'role_id', 'user_id');
    }
}
