import QuestaoModel from '../model/questao'
import styles from '../styles/components/Questao.module.scss'
import Enunciado from './Enenciado'
import Respostas from './Respostas'
import Temporizador from './Temporizador'

const letras = [
    { valor: "A", cor: "#000" },
    { valor: "B", cor: "#1a1b27" },
    { valor: "C", cor: "#0a0c1f" },
    { valor: "D", cor: "#15193a" }
]

interface QuestaoProps {
    valor: QuestaoModel
    tempoParaResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) => { //Retornará um array de respostas 
            return (
                <Respostas
                    key={`${questao.id}-${i}`}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    respostaFornecida={props.respostaFornecida} />
            )
        })
    }

    return (
        <div className={styles.boxQuestao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador
                key={questao.id}
                duration={props.tempoParaResposta ?? 15}
                tempoEsgotado={props.tempoEsgotado} />
            {renderizarRespostas()}
        </div>
    )
}