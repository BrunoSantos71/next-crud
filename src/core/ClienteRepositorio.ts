import Cliente from "./Cliente";

export default interface ClienteRepositorio{
    salvar (Cliente: Cliente): Promise<Cliente>
    excluir (Cliente: Cliente): Promise<void>
    obterTodos (): Promise<Cliente[]>
}