import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Cliente from "@/core/Cliente";
import { useState, useEffect } from "react";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import useTela from "./useTela";

export default function useCliente() {
    const repo: ClienteRepositorio = new ColecaoCliente();

    const {formularioVisivel, tabelaVisivel, exibirTabela, exibirForm} = useTela();


    const [cliente, setCliente] = useState<Cliente>(Cliente.novoCliente())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(() => {
        obterTodos()
    }, [])


    function clienteSelecionado(cliente: Cliente) {
        console.log('Editou: ' + cliente.Nome)
        setCliente(cliente)
        exibirForm()
    }

    async function clienteExcluido(cliente: Cliente) {
        console.log('Excluiu: ' + cliente.Nome);
        await repo.excluir(cliente);
        obterTodos();
    }

    async function salvarCliente(cliente: Cliente) {
        console.log(cliente)
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.novoCliente);
        exibirForm()
    }

    function obterTodos() {
        repo.obterTodos().then(c => {
            setClientes(c)
            exibirTabela()
        });
    }

    return {
        novoCliente,
        salvarCliente,
        clienteExcluido,
        clienteSelecionado,
        obterTodos,
        formularioVisivel,
        tabelaVisivel,
        cliente,
        clientes,
        exibirTabela
    }
}