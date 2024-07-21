interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray' | 'red'
    className?: string
    children: any
    onClick?: () => void
}

function click() {
    console.log('clicou novo cadastro')
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ? props.cor : 'gray'
    return (
        <button className={`
            bg-gradient-to-b from-${cor}-800 to-${cor}-100
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}