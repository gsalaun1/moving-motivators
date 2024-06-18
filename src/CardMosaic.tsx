import {allCards} from "./config.ts";
import xlg from "./assets/x-lg.svg";

type Props = {
    close: () => void
}

const CardMosaic = ({close}: Props) => {

    return (
        <>
            <img src={xlg} className={"mosaic-button"} title={"Fermer"}
                 onClick={() => close()}/>
            <div className="mosaic">
                {allCards.map((movingMotivatorsCard) => (
                    <img src={movingMotivatorsCard.image}/>
                ))}
            </div>
        </>
    )
}

export default CardMosaic