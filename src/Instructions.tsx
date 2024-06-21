import arrowLeft from "./assets/arrow-left-solid.svg";
import arrowRight from "./assets/arrow-right-solid.svg";
import './Instructions.css'

type InstructionsProps = {
    step: number
    updateStep: (step: number) => void
}

const Instructions = ({step, updateStep}: InstructionsProps) => {

    const instructions = () => {
        if (step === 1) {
            return <span>Etape 1 : triez les cartes par ordre d'importance, de la moins importante à gauche vers la plus</span>
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
                <div>
                    <img src={arrowLeft}/>
                    &nbsp;
                    <span>Moins important</span>
                </div>
                {instructions()}
                <div>
                    <span>Plus important</span>
                    &nbsp;
                    <img src={arrowRight}/>
                </div>
            </div>
            <br/>
            {actionButton()}
        </>
    )
}

export default Instructions;