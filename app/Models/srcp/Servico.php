<?php

namespace App\Models\srcp;

use Illuminate\Database\Eloquent\Model;

class Servico extends Model
{
    protected $fillable = [
        'nome',
        'preco',
        'descricao'
    ];
}
