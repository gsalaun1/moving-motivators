import arrowLeft from './assets/arrow-left-solid.svg'
import arrowRight from './assets/arrow-right-solid.svg'
import './HorizontalInfoBar.css'

type HorizontalInfoBarProps = {
    step: number
}

const HorizontalInfoBar = ({step}: HorizontalInfoBarProps) => {
    if (step == 1) {
        return (
            <div className={"info-bar"}>
                <div>
                    <img src={arrowLeft} style={{color:"red", fill: "red"}}/>
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

export default HorizontalInfoBar;