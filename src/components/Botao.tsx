interface BotaoProps{
    cor?: string;   
    classeBotao?: string  
    children?: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    
    let cor = `bg-${props.cor}-500`

    switch (props.cor){
        case "blue":
            cor = 'bg-gradient-to-r from-blue-500 to-blue-700'
            break;
   
            case "green":
                cor = 'bg-gradient-to-r from-green-500 to-green-700'
            break;

         default:
            cor = 'bg-gradient-to-r from-gray-500 to-gray-700'
            break;
    }

    return(
        <button onClick={props.onClick} className={`
        ${cor} text-white px-4 py-2 rounded-md ${props.classeBotao}`}>
            {props.children}
        </button>
    )
}