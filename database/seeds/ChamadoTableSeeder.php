<?php

use Illuminate\Database\Seeder;

class ChamadoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\srcp\Chamado::class, 10)->create();
    }
}
