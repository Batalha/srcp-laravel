<?php

namespace App\Http\Controllers\Api;

use App\User;

use Illuminate\Auth\Authenticatable;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Translation\Dumper\IcuResFileDumper;
use Tymon\JWTAuth\JWTAuth;

class AuthController extends Controller
{
    /**
     * @var JWTAuth
     */
    private $jwtAuth;

    public function __construct(JWTAuth $jwtAuth)
    {
        $this->jwtAuth = $jwtAuth;
    }

    public function login(Request $request)
    {
        $credentials = $request->only('name', 'password');

        if (! $token = $this->jwtAuth->attempt($credentials)) {
            return response()->json(['error' => 'invalid_credentials'], 401);
        }

        $user = $this->jwtAuth->authenticate($token);

        return response()->json(compact('token','user'));
    }

    public function refresh()
    {
        $token = $this->jwtAuth->getToken();
        $token = $this->jwtAuth->refresh($token);

        return response()->json(compact('token'));
    }

    public function logout()
    {
        $token = $this->jwtAuth->getToken();
        $this->jwtAuth->invalidate($token);

        return response()->json(['logout']);
    }

    public function me()
    {
        if (! $user = $this->jwtAuth->parseToken()->authenticate()) {
            return response()->json(['error' => 'user_not_found'], 404);
        }
        return response()->json(compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();

        if($data['password'] != null){
            $data['password'] = bcrypt($data['password']);
            $pass = $data['password'];
        }

        $update = DB::table('users')
            ->where('id', $id)
            ->update(['password' => $pass]);
        return $update;

    }

}
