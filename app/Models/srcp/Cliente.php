<?php

namespace App\Models\srcp;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{

    protected $fillable = [

        'id',
        'nome',
        'cpf_cnpj',
        'telefone',
        'celular',
        'email',
        'cep',
        'endereco',
        'numero',
        'bairro',
        'cidade',
        'estado'

    ];

}
