import grid from "./assets/grid.svg";
import gitlab from "./assets/gitlab.svg";

type ActionButtonsProps = {
    displayMosaic: () => void
}

const ActionButtons = ({displayMosaic}: ActionButtonsProps) => {
    return (
        <>
            <img src={grid} className={"mosaic-button"} title={"Mosaïque"}
                 onClick={() => displayMosaic()}/>
            <a href="https://gitlab.com/gsalaun1/moving-motivators" target="_blank" className={"repository-button"}>
                <img src={gitlab} title={"Repository"}/>
            </a>
        </>
    )
}

export default ActionButtons