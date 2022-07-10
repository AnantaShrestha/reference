<?php

namespace Modules\Usermanagement\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
                'name'=>'required',
                'username'=>'required|unique:users,username,'.$this->id,
                'email'=> 'required|unique:users,email,'.$this->id,
                'password'=>$this->id == null ? 'required' : 'nullable',
                'phone_no' =>'nullable' ,
                'roles' => 'nullable',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
