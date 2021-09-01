import RespostaModel from '../model/resposta';
import styles from '../styles/components/Respostas.module.scss'

interface RespostasProps {
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

export default function Respostas(props: RespostasProps) {
    const resposta = props.valor

    return (
        <div className={styles.boxRespostas} onClick={() => props.respostaFornecida(props.indice)}>
            {!resposta.revelada ? (
                <div className={styles.frenteBox}>
                    <div className={styles.letra} style={{ backgroundColor: props.corFundoLetra }}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
            ) : (
                <div className={styles.versoBox}>
                    {resposta.certa ? (
                        <div className={styles.certa}>
                            <h5>A resposta certa é...</h5>
                            <div className={styles.valor}>
                                {resposta.valor}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.errada}>
                            <   h5>A resposta selecionada está errada.</h5>
                            <div className={styles.valor}>
                                {resposta.valor}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}