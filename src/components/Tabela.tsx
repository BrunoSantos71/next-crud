import Cliente from "@/core/Cliente"
import { IconDelete, IconEdit } from "./Icons"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function cabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="text-left p-4">Ações</th> : false}
            </tr>
        )

    }

    function dados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr className={`${i % 2 == 0 ? 'bg-purple-300' : 'bg-purple-200'}`} key={cliente.Id}>
                    <td className="text-left p-4">{cliente.Id}</td>
                    <td className="text-left p-4">{cliente.Nome}</td>
                    <td className="text-left p-4">{cliente.Idade}</td>
                    {exibirAcoes ? acoes(cliente) : false}
                </tr>
            )
        })
    }

    function acoes(cliente: Cliente) {
        return (
            <td className="flex">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50`}>
                        {IconEdit}
                    </button>
                ) : false}

                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)}  className={`
                    flex justify-center items-center
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-purple-50`}>
                        {IconDelete}
                    </button>
                ) : false}

            </td>

        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-800
            bg-gradient-to-r from bg-purple-500 to-purple-800
            `}>
                {cabecalho()}
            </thead>
            <tbody>
                {dados()}
            </tbody>
        </table>
    )
}