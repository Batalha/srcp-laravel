<?php

namespace App\Models\srcp;

use Illuminate\Database\Eloquent\Model;

class Chamado extends Model
{

    const STATUS = [
        1 => 'Aberto',
        2 => 'Fechado',
        3 => 'Em Andamento'
    ];

    protected $fillable = [
        'cliente_id',
        'data_inicial',
        'data_final',
        'status'
    ];


    //Siginificado: belongsTo = pertence a

    public function cliente(){
        return $this->belongsTo(Cliente::class);
    }
}
