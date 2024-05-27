import { ISliderButton } from "./interface";
import './style/style.css'
const SliderButton = (props: ISliderButton) => {
    return <div className="slide-button my-5">
        {props.buttons.map((x, i) => {
            return <button key={i} className={i == 0 ? "active" : ""}>{x}</button>
        })}
    </div>
}

export default SliderButton;