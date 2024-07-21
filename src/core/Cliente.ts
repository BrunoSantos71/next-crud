
export default class Cliente {
    private id: string
    private nome: string
    private idade: number


    constructor(id: string, nome: string, idade: number) {
        this.id = id,
            this.nome = nome,
            this.idade = idade
    }

    static novoCliente() {
        return new Cliente('', '', 0)
    }

    set Id(id: string) {
        this.id = id;
    }

    get Id() {
        return this.id
    }

    get Nome() {
        return this.nome
    }

    get Idade() {
        return this.idade
    }
}
