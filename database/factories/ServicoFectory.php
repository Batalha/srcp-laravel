<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\srcp\Servico::class, function (Faker $faker) {
    return [
        'nome' => $faker->name,
        'preco' => $faker->randomFloat(2, 100, 200),
        'descricao' => $faker->word
    ];
});
