<?php

namespace App\Models\srcp;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{


    protected $fillable = [
        'id',
        'name',
        'email',
        'password',
        'remember_token'
    ];
}
