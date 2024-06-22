import {useEffect, useState} from 'react'
import './App.css'
import Step1 from "./Step1.tsx";
import Mosaic from "./Mosaic.tsx"
import Instructions from "./Instructions.tsx";
import {allCards} from "./config.ts";
import Step2 from "./Step2.tsx";
import ActionButtons from "./ActionButtons.tsx";
import ZoomedCard from "./ZoomedCard.tsx";
import HorizontalInfoBar from "./HorizontalInfoBar.tsx";
import VerticalInfoBar from "./VerticalInfoBar.tsx";
import {useSearchParams} from "react-router-dom";
import {seedExtracter} from "./SeedExtracter.ts";

export type Card = {
    id: number
    image: string
    y: number
}

function App() {

    const [zoomedCard, setZoomedCard] = useState<string | null>(null)

    const [displayMosaic, setDisplayMosaic] = useState<boolean>(false)

    const [cards, setCards] = useState<Card[]>([])

    const [step, setStep] = useState<number>(1)

    const [searchParams] = useSearchParams();
    const seed = searchParams.get('seed');

    useEffect(() => {
        if (seed !== null) {
            const extractedCards = seedExtracter(seed)
            if (extractedCards.length === 0) {
                setCards(allCards)
            } else {
                setCards(extractedCards)
            }
        } else {
            setCards(allCards)
        }
    }, [])

    const updateZoomedCard = (_zoomedCard: string) => {
        setZoomedCard(_zoomedCard)
    }

    const updateCards = (cards: Card[]) => {
        setCards(cards)
    }

    if (displayMosaic) {
        return <Mosaic close={() => setDisplayMosaic(false)}/>
    }

    const applyDelta = (cardId: number, delta: number) => {
        const updatedCards = cards.map(card => {
            if (card.id === cardId) {
                return {...card, y: card.y + delta};
            }
            return card;
        });
        setCards(updatedCards)
    }

    const displayStep = () => {
        if (step == 1) {
            return <Step1 cards={cards} onHover={updateZoomedCard} updateCards={updateCards}/>
        } else {
            return <Step2 cards={cards} onHover={updateZoomedCard} applyDelta={applyDelta}/>
        }
    }

    const updateStep = (newStep: number) => {
        setStep(newStep)
        setZoomedCard(null)
    }

    return (
        <>
            <div className="top-section">
                <ZoomedCard card={zoomedCard}/>
                <div style={{position: "absolute", width: "100%"}}>
                    <h1>Moving Motivators</h1>
                    <Instructions step={step} updateStep={updateStep}/>
                </div>
                <div>
                    <ActionButtons cards={cards} displayMosaic={() => setDisplayMosaic(true)}/>
                </div>
            </div>
            <div className={"cards-container"}>
                <VerticalInfoBar step={step}/>
                <div className={"cards"}>
                    {displayStep()}
                </div>
            </div>
            <HorizontalInfoBar step={step}/>
            <div className={"footer"}>Cet exercice est une des pratiques du Management 3.0 - <a
                href={"https://management30.com/practice/moving-motivators/"} target={"_blank"}>Site officiel</a></div>

        </>
    )
}

export default App
