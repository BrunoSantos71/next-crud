import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";

import useCliente from "@/hooks/useCliente";

export default function Home() {

  const { novoCliente, salvarCliente, clienteSelecionado, clienteExcluido, formularioVisivel, tabelaVisivel, cliente, clientes, exibirTabela } = useCliente()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4"
                onClick={() => novoCliente()}>
                Novo Cliente
              </Botao>
            </div>

            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}>
            </Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            salvar={salvarCliente}
            cancelar={() => exibirTabela()} />
        )}

      </Layout>
    </div>
  );
}
