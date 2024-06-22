import arrowLeft from './assets/arrow-left-solid.svg'
import arrowRight from './assets/arrow-right-solid.svg'
import './InfoBar.css'

type InfoBarProps = {
    step: number
}

const InfoBar = ({step}: InfoBarProps) => {
    if (step == 1) {
        return (
            <div className={"info-bar"}>
                <div>
                    <img src={arrowLeft}/>
                    <span>Moins important</span>
                </div>
                <div>
                    <span>Plus important</span>
                    <img src={arrowRight}/>
                </div>
            </div>
        )
    }
    return (
        <></>
    )
}

export default InfoBar;