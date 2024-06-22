import grid from "./assets/grid.svg";
import gitlab from "./assets/gitlab.svg";
import link from "./assets/link-solid.svg";
import './ActionButtons.css';
import {Card} from "./App.tsx";
import toast from "react-hot-toast";


type ActionButtonsProps = {
    cards: Card[]
    displayMosaic: () => void
}

const ActionButtons = ({displayMosaic, cards}: ActionButtonsProps) => {

    const extractRootUrl = (): string => {
        const questionMarkIndex = window.location.toString().lastIndexOf("?")
        if (questionMarkIndex === -1) {
            return window.location.toString()
        } else {
            return window.location.toString().substring(0, questionMarkIndex)
        }
    }

    const copyShareLink = () => {
        const rootUrl = extractRootUrl()
        const link = rootUrl + "?seed=" + cards.map(card => card.id).join("")
        navigator.clipboard.writeText(link);
        toast.success('Lien de partage copié !')
    }

    return (
        <>
            <img src={grid} className={"mosaic-button"} title={"Mosaïque"}
                 onClick={() => displayMosaic()}/>
            <a href="https://gitlab.com/gsalaun1/moving-motivators" target="_blank" className={"repository-button"}>
                <img src={gitlab} title={"Repository"}/>
            </a>
            <img src={link} className={"link-button"} title={"Copier un lien de partage"}
                 onClick={() => copyShareLink()}/>
        </>
    )
}

export default ActionButtons