<?php

use Faker\Generator as Faker;

$factory->define(App\Models\srcp\Chamado::class, function (Faker $faker) {
    return [
        'cliente_id' => rand(1, 10),
        'data_inicial' => $faker->date(),
        'data_final' => $faker->date(),
        'status' => rand(1, 3),
        'descricao' => $faker->word,
        'defeito' => $faker->name,
        'observacao' => $faker->word,
        'laudo' => $faker->word
    ];
});
