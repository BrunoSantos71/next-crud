import { useState } from "react";

export default function useExibir() {
    const [exibe, setExibe] = useState<'tabela' | 'form'>("tabela")

    const exibirTabela = () => setExibe('tabela');
    const exibirForm = () => setExibe('form');

    return {
        formularioVisivel: exibe === 'form',
        tabelaVisivel: exibe === 'tabela',
        exibirTabela,
        exibirForm
    }
}