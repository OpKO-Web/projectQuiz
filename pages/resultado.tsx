import { useRouter } from 'next/dist/client/router'
import styles from '../styles/Resultado.module.scss'


export default function Resultado() {
    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.containerResultado}>
            <h1>Resultado Final</h1>
            <span></span>
            <h2>Total: {total}</h2>
            <h3>Certas: {certas}</h3>
            <h4>Percentual: {`${percentual}%`}</h4>
        </div>
    )
}