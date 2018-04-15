<?php

use Faker\Generator as Faker;

$factory->define(App\Models\srcp\Cliente::class, function (Faker $faker) {
    return [
        'nome'=>$faker->name,
        'cpf_cnpj'=>$faker->phoneNumber,
        'telefone'=>$faker->phoneNumber,
        'celular'=>$faker->phoneNumber,
        'email'=>$faker->email,
        'cep'=>$faker->postcode,
        'endereco'=>$faker->streetAddress,
        'numero'=>'10',
        'bairro'=>$faker->streetName,
        'cidade'=>$faker->city,
        'estado'=>$faker->streetSuffix
    ];
});

//$table->string('nome');
//$table->string('cpf_cnpj');
//$table->string('telefone');
//$table->string('celular');
//$table->string('email');
//$table->string('cep');
//$table->string('endereco');
//$table->string('numero');
//$table->string('bairro');
//$table->string('cidade');
//$table->string('estado');