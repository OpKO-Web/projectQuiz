import RespostaModel from './resposta';
import { embaralhar } from '../functions/arrays';

export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: RespostaModel[] //acessar um array de respostas possíveis
    #acertou: boolean


    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id() {
        return this.#id
    }
    get enunciado() {
        return this.#enunciado
    }
    get respostas() {
        return this.#respostas
    }
    get acertou() {
        return this.#acertou
    }
    get naoRespondida() {
        return !this.respondida
    }
    get respondida() {
        for (let resposta of this.#respostas) {
            if (resposta.revelada) return true  //caso a pergunta tenha sido respondida, mostar a resposta.
        }
        return false   //caso contrário, não revelar.
    }

    //ESTA FUNÇÃO IRÁ EMBARALHAR AS QUESTÕES DE CADA PERGUNTA.
    embaralharRespostas(): QuestaoModel {
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    responderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa //Irá verificar se o usuário marcou a resposta correta.
        const respostas = this.#respostas.map((resposta, i) => {  //Irá revelar a resposta selecionada e a que estiver correta
            const respostaSelecionada = indice === i   //Vai verificar de a resposta selecionana (indice) é o mesmo valor de 'i'.
            const deveRevelar = respostaSelecionada || resposta.certa //Esta const mostrará a resposta selecionada e a resposta certa.
            // em 'resposta.certa', você pode escolher ou não revelar a certa tb.
            return deveRevelar ? resposta.revelarRes() : resposta
        })
        return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
    }

    static criarUsandoObjeto(obj: QuestaoModel): QuestaoModel {
        const respostas = obj.respostas.map(resp => RespostaModel.criarUsandoObjeto(resp))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
    }

    paraObjeto() {
        return {
            id: this.#id,
            enunciado: this.enunciado,
            resposta: this.respostas.map(resp => resp.paraObjeto()),
            responsdida: this.respondida,
            acertou: this.#acertou
        }
    }

}


