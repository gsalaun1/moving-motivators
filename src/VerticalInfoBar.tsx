import smile from './assets/face-smile-beam-regular.svg'
import arrowUp from './assets/arrow-up-solid.svg'
import frown from './assets/face-frown-regular.svg'
import arrowDown from './assets/arrow-down-solid.svg'
import './VerticalInfoBar.css'

type LeftInfoBarProps = {
    step: number
}

const VerticalInfoBar = ({step}: LeftInfoBarProps) => {
    if (step == 2) {
        return (
            <div className={"vertical-info-bar"}>
                <div>
                    <img src={smile}/>
                    <img src={arrowUp}/>
                </div>
                <div>
                    <img src={arrowDown}/>
                    <img src={frown}/>
                </div>
            </div>
        )
    }

    return (
        <></>
    )
}

export default VerticalInfoBar