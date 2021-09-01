import styles from '../styles/components/Questionario.module.scss'
import QuestaoModel from '../model/questao';
import Questao from './Questao';
import Botao from './Botao';

interface QuestionarioProps {
    questao: QuestaoModel
    ultimaPergunta: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {
        if (props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {props.questao ? (
                <Questao
                    valor={props.questao}
                    tempoParaResposta={10}
                    respostaFornecida={respostaFornecida}
                    timeIsOver={props.irProximoPasso} />
            ) : false
            }

            <Botao texto={props.ultimaPergunta ? "FINALIZAR" : "PRÓXIMA"} onClick={props.irProximoPasso} />
        </div>

    )
}