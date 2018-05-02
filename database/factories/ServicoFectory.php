<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\srcp\Servico::class, function (Faker $faker) {
    return [
        'nome' => $faker->name,
        'preco' => '10.00',
        'descricao' => $faker->word
    ];
});
