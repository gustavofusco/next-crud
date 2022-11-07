import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";
import 'animate.css'
interface FormularioProps {
  cliente: Cliente;
  cancelado?: () => void
  clienteMudou?: (cliente: Cliente) => void
}
export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  let [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div className="animate__animated animate__fadeIn">
      {id ? (
        <Entrada somenteLeitura texto="Código" valor={id} tipo="text" classeEntrada="mb-4"></Entrada>
      ) : (
        false
      )}
      <Entrada texto="Nome" valor={nome} tipo="text" valorMudou={setNome} classeEntrada="mb-4"></Entrada>

      <Entrada texto="Idade" valor={idade} tipo="number" valorMudou={setIdade} ></Entrada>

      <div className="flex justify-end mt-7">
        <Botao cor="blue" classeBotao="mr-2"
        onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >{id? 'Alterar' : 'Salvar'}</Botao>
        <Botao cor="gray" onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
