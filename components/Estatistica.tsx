import styles from "../styles/components/Estatistica.module.scss"

interface EstatisticasProps {
    valor: any
    texto: string
    corFundo?: string
    corFonte?: string
}

export default function Estatistica(props: EstatisticasProps) {
    return (
        <div className={styles.estatisticas}>
            <div className={styles.texto}>
                {props.texto}
            </div>
            <div className={styles.valor} style={{
                backgroundColor: props.corFundo ?? "#000",
                color: props.corFonte ?? "#FFF"
            }}>
                {props.valor}
            </div>
        </div>
    )
}