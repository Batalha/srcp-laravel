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
        'id',
        'cliente_id',
        'data_inicial',
        'data_final',
        'status',
        'descricao',
        'defeito',
        'observacao',
        'laudo'
    ];


    //Siginificado: belongsTo = pertence a

    public function cliente(){
        return $this->belongsTo(Cliente::class);
    }

    public function servicos(){
        return $this->belongsToMany(Servico::class);
    }
}
