import {Card} from "./App.tsx";
import {allCards} from "./config.ts";

const seedExtracter = (seed: string): Card[] => {
    const result: Card[] = []
    seed.split('').forEach(presumedId => {
            const currentCard = allCards.find((card) => card.id.toString() === presumedId)
            if (currentCard) {
                result.push(currentCard)
            }
        }
    )
    if (result.length === allCards.length) {
        return result
    } else {
        return []
    }
}

export {seedExtracter}