import {Card} from "./App.tsx";
import {allCards} from "./config.ts";

const seedExtracter = (seed: string): Card[] => {
    const result: Card[] = []
    seed.split('!').forEach(cardInfos => {
            console.log(cardInfos)
            const splittedCardInfos = cardInfos.split("|")
            const id = splittedCardInfos[0]
            const y = splittedCardInfos[1]
            const currentCard = allCards.find((card) => card.id.toString() === id)
            if (currentCard) {
                result.push({...currentCard, y: Number(y)})
            }
        }
    )
    if (result.length === allCards.length) {
        return result
    } else {
        return []
    }
}

const seedForger = (card: Card[]): string => {
    return ""
}

export {seedExtracter}