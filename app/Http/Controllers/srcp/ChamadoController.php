<?php

namespace App\Http\Controllers\srcp;

use App\Models\srcp\Chamado;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use function MongoDB\BSON\toJSON;
use PhpParser\Node\Expr\Array_;

class ChamadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $nomes = Chamado::all();
        $status = Chamado::STATUS;
        foreach ($nomes as $nome){
            $nome->cliente;
            switch ($nome['status']){
                case '1': $nome['status'] = $status['1']; break;
                case '2': $nome['status'] = $status['2']; break;
                case '3': $nome['status'] = $status['3']; break;
            }
            $nome->servicos;
        }
        return $nomes;
    }

    public function listaDados(Request $request){


        $dataInicio = (isset($request['data_inicial'])) ? $request['data_inicial']: false;
        $dataFim = (isset($request['data_final'])) ? $request['data_final']:false;

        if(($dataInicio && $dataFim)){
            $nomes = Chamado::all()->where('data_inicial','>=', $dataInicio)->where('data_inicial','<=', $dataFim);
            foreach ($nomes as $key=>$dados){
                $dadosClientes[] = $dados;
            }
        }else{
            $dadosClientes = Chamado::all();

        }
        $status = Chamado::STATUS;
        foreach ($dadosClientes as $nome){
            $nome->cliente;
            switch ($nome['status']){
                case '1': $nome['status'] = $status['1']; break;
                case '2': $nome['status'] = $status['2']; break;
                case '3': $nome['status'] = $status['3']; break;
            }
            $nome->servicos;
        }

        return $dadosClientes;

    }

    public function gerarPdf(Request $request){

        $dataInicio = (isset($request['data_inicial'])) ? $request['data_inicial']: false;
        $dataFim = (isset($request['data_final'])) ? $request['data_final']:false;

        if(($dataInicio && $dataFim)){
            $nomes = Chamado::all()->where('data_inicial','>=', $dataInicio)->where('data_inicial','<=', $dataFim);
            foreach ($nomes as $key=>$dados){
                $dadosClientes[] = $dados;
            }
        }else{
            $dadosClientes = Chamado::all();

        }
        $status = Chamado::STATUS;
        foreach ($dadosClientes as $nome){
            $nome->cliente;
            switch ($nome['status']){
                case '1': $nome['status'] = $status['1']; break;
                case '2': $nome['status'] = $status['2']; break;
                case '3': $nome['status'] = $status['3']; break;
            }
            $nome->servicos;
        }

        return $dadosClientes;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Chamado::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $chamados = Chamado::find($id);
        $chamados->cliente;
        $chamados->servicos;
        return $chamados;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Chamado::find($id);
        return $data;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Chamado $chamado)
    {

        if($request['servico_id'] && $request['acoes']){
            $chamado->servicos()->attach($request['servico_id']);
        }else{
            $chamado->servicos()->detach($request['servico_id']);

        }


        $chamado->update($request->all());
        $chamado->servicos;

        return $chamado;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Chamado $chamado)
    {
        $chamado->delete();
        return $chamado;
    }
}
