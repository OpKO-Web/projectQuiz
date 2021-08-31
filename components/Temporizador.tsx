import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/components/Temporizador.module.scss'

interface TemporizadorProps {
    duration: number
    timeIsOver: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.containerTimer}>
            <CountdownCircleTimer
                duration={props.duration}
                onComplete={props.timeIsOver}
                size={80}
                isPlaying
                colors={[
                    ["#02d45a", 0.33],
                    ["#99d98c", 0.33],
                    ["#c1121f", 0.33]]}>

                {({ remainingTime }) => remainingTime}

            </CountdownCircleTimer>
        </div>
    )
}