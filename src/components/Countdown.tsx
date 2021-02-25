import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown() {
    const { minutes,
            seconds, 
            isActive,
            hasFinished, 
            startCountdown,
            resetCountdown,
        } = useContext(CountdownContext);
    
    const [minuteLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={`${styles.countdownButtonFinishedCicle} ${styles.countdownButton}`}
                >
                    Ciclo encerrado
                    <img src="icons/level.svg" alt=""/>
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}
                        >
                            Abandonar um ciclo
                        </button>
                    ) : (
                        <button 
                        type="button" 
                        className={styles.countdownButton}
                        onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}

            
        </div>
    );
}