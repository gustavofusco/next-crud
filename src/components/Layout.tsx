import Titulo from "./Titulo"

interface LayoutProps{
    titulo: string
    //! titulo?: string com interrogação transforma a propriedade em opcional
    children: any
}

export default function Layout(props: LayoutProps){
    return (
        <div className={`flex flex-col w-2/3 bg-white text-gray-800 rounded-md`}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}