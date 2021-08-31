import styles from '../styles/components/Enunciado.module.scss'

interface EnunciadoProps {
    texto: string
}

export default function Enunciado(props: EnunciadoProps) {
    return (
        <div className={styles.enunciado}>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}