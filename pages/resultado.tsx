import { useRouter } from 'next/dist/client/router'
import Estatistica from '../components/Estatistica'
import styles from '../styles/Resultado.module.scss'
import Botao from '../components/Botao';


export default function Resultado() {
    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.containerResultado}>
            <h1>Resultado Final</h1>
            <span></span>
            <div className={styles.valoresEstatic}>
                <Estatistica texto="Perguntas" valor={total} />
                <Estatistica texto="Resp.: 'CERTAS'" valor={certas}
                    corFundo={certas >= 3 ? "#34a0a4" : "#d62828"} />
                <Estatistica texto="Percentual" valor={`${percentual}%`}
                    corFundo={percentual >= 50 ? "#4D7133" : "#660b04"} />
            </div>

            <Botao href="/" texto="REINICIAR" />
        </div>
    )
}