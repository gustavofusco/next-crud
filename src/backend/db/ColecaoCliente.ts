import { QueryDocumentSnapshot, SnapshotOptions, collection } from "firebase/firestore";
import Cliente from "../../core/Cliente";
import ClienteRepostorio from "../../core/ClienteRepositorio";
import firestore from 'firebase/firestore'

export default class ColecaoCliente implements ClienteRepostorio{

    #conversor = {
        toFirestore(cliente: Cliente){
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente{
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }


    async salvar(cliente: Cliente): Promise<Cliente>{
        return null
    }

    async excluir(cliente: Cliente): Promise<void>{
         return null
    }

    async obterTodos(): Promise<Cliente[]>{
        return null
    }

    // private colecao(){
    //     return firestore.collection(firestore, 'clientes').withConverter(this.#conversor)
    // }


}