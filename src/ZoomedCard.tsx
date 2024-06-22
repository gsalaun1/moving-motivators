import './ZoomedCard.css'
import {allCards} from "./config.ts";

type ZoomedCardProps = {
    card: string | null
}

const ZoomedCard = ({card}: ZoomedCardProps) => {
    if (card == null) {
        return (
            <div className={"empty-zoomed-card"}>
                <img src={allCards[1].image}/>
            </div>
        )
    }

    return (
        <div className={"zoomed-card"}>
            <img src={card}/>
        </div>
    )
}

export default ZoomedCard;