<?php

namespace Modules\Usermanagement\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class UsermanagementDatabaseSeeder extends Seeder
{
    public $adminPassword = '$2y$10$JcmAHe5eUZ2rS0jU1GWr/.xhwCnh2RU13qwjTPcqfmtZXjZxcryPO';
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        \DB::connection('mysql')->table('users')->insert(
            [
                ['id' => '1', 'username' =>'admin','phone_no'=>'9861898666','password' => $this->adminPassword, 'email' => 'ianantashrestha@gmail.com', 'name' => 'Administrator', 'created_at' => date('Y-m-d H:i:s')],
                ['id' => '2', 'username' =>'ananta','phone_no'=>'9861898666','password' => $this->adminPassword, 'email' => 'ananta@gmail.com', 'name' => 'Ananta Shrestha', 'created_at' => date('Y-m-d H:i:s')],
                ['id' => '3', 'username' =>'test','phone_no'=>'9861898666','password' => $this->adminPassword, 'email' => 'test@gmail.com', 'name' => 'Test Shrestha', 'created_at' => date('Y-m-d H:i:s')],
            ]
        );
    }
}
