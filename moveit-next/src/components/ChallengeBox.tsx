import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengBox() {
    const hasActiveeChallenge = true

    return (
        <div className={styles.challengeBoxContainnere}>
            { hasActiveeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça umma caminhada de 3 minutos.</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Llevel Up" />
                        Avance de level  commpletaando desafios.
                    </p>
                </div>
            )}
            
        </div>
    )
}
