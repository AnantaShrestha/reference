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
                ['id' => '1', 'username' =>'admin','phone_no'=>'123456789','password' => $this->adminPassword, 'email' => 'admin@gmail.com', 'name' => 'Administrator', 'created_at' => date('Y-m-d H:i:s')],
            ]
        );

        //permission seeder
        \DB::statement("INSERT INTO `permissions` (`id`, `name`, `access_uri`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
            (1, 'All System Control', '/*', NULL, NULL, '2022-07-05 08:52:16', '2022-07-05 08:52:16'),
            (2, 'Permission Control', 'admin/premission,admin/premission/create,admin/premission/edit/{id},admin/premission/delete/{id}', NULL, NULL, '2022-07-05 08:52:29', '2022-07-05 08:52:29'),
            (3, 'Role Control', 'admin/role,admin/role/create,admin/role/edit/{id},admin/role/delete/{id}', NULL, NULL, '2022-07-05 08:52:40', '2022-07-05 08:52:40'),
            (4, 'User Control', 'admin/user,admin/user/create,admin/user/edit/{id},admin/user/delete/{id}', NULL, NULL, '2022-07-05 08:52:50', '2022-07-05 08:52:50')");

        //role seeder
        \DB::statement("
            INSERT INTO `roles` (`id`, `name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
            (1, 'Administrator', NULL, NULL, '2022-07-05 08:53:23', '2022-07-05 08:53:23'),
            (2, 'Usermanagement', NULL, NULL, '2022-07-05 08:53:36', '2022-07-05 08:53:36')");

        //role permission
        \DB::statement("
            INSERT INTO `role_permissions` (`id`, `role_id`, `permission_id`) VALUES
            (1, 1, 1),
            (2, 2, 2),
            (3, 2, 3),
            (4, 2, 4)");

        //user role
        \DB::statement("INSERT INTO `user_roles` (`id`, `role_id`, `user_id`) VALUES
            (1, 1, 1)");

    }
}
