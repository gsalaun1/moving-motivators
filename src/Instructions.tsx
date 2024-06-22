import './Instructions.css'

type InstructionsProps = {
    step: number
    updateStep: (step: number) => void
}

const Instructions = ({step, updateStep}: InstructionsProps) => {

    const instructions = () => {
        if (step === 1) {
            return <span>Etape 1 : triez les cartes par ordre d'importance, de la moins importante à gauche vers la plus importante à droite</span>
        } else {
            return <span>Etape 2 : faites monter/descendre les cartes suivant l'influence du changement considéré</span>
        }
    }

    const actionButton =() => {
        if (step === 1) {
            return <button onClick={() => updateStep(2)}>Passer à l'étape suivante</button>
        } else {
            return <button onClick={() => updateStep(1)}>Revenir à l'étape précédente</button>
        }
    }

    return (
        <>
            <div className={"instructions"}>
                {instructions()}
            </div>
            <br/>
            {actionButton()}
        </>
    )
}

export default Instructions;