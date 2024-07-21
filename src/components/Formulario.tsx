import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    cancelar?: () => void
    salvar?: (cliente: Cliente) => void
    clienteMudou?: () => void
}



export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.Id
    const [nome, setNome] = useState(props.cliente?.Nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.Idade ?? 0);



    return (
        <div>
            {id ?
                (
                    <Entrada
                        somenteLeitura
                        texto="Código"
                        valor={id}
                        className="mb-5"
                    />
                ) : false}

            <Entrada
                texto="Nome"
                valor={nome}
                onChange={setNome}
                className="mb-5" />

            <Entrada
                texto="Idade"
                tipo="number"
                valor={idade}
                onChange={setIdade} />

            <div className="flex mt-8 justify-end">
                <Botao
                    onClick={() => props.salvar?.(new Cliente(id, nome, idade))}
                    className="mr-2"
                    cor="blue">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao
                    onClick={props.cancelar}
                    cor="red">
                    Cancelar
                </Botao>
            </div>
        </div>

    )
}