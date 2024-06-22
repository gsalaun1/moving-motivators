import './Instructions.css'

type InstructionsProps = {
    step: number
    updateStep: (step: number) => void
}

const Instructions = ({step, updateStep}: InstructionsProps) => {

    const instructions = () => {
        if (step === 1) {
            return (
                <>
                    <span style={{fontWeight: "bold"}}>Etape 1 : Classer les drivers par importance</span>
                    <br/>
                    <br/>
                    Prenez le temps de lire les cartes.
                    <br/>
                    Déplacez le plus à droite celles qui vous semblent les plus importantes.
                </>
            )
        } else {
            return (
                <>
                    <span style={{fontWeight: "bold"}}>Etape 2 : Visualiser les impacts</span>
                    <br/>
                    <br/>
                    Pensez à un changement de situation, ou à une décision à prendre.
                    <br/>
                    Ensuite visualisez l'impact de cette nouvelle situation sur votre motivation en déplaçant les cartes vers le haut ou vers le bas.
                </>
            )
        }
    }

    const actionButton = () => {
        if (step === 1) {
            return <button onClick={() => updateStep(2)}>Passer à la deuxième étape</button>
        } else {
            return <button onClick={() => updateStep(1)}>Revenir à la première étape</button>
        }
    }

    return (
        <>
            <div className={"instructions"}>
                {instructions()}
            </div>
            {actionButton()}
        </>
    )
}

export default Instructions;