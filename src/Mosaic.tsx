import {allCards} from "./config.ts";
import xlg from "./assets/x-lg.svg";
import './Mosaic.css'

type Props = {
    close: () => void
}

const Mosaic = ({close}: Props) => {

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

export default Mosaic