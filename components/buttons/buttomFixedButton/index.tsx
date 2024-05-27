import Icons from "@/components/header/customIcons"
import './style/style.css'
const ButtonFixedButton=(props:FixedButton)=>{
    return <button className="waiter-button">
        <span><Icons icon={props.icon}/></span> {props.name}
    </button>
}

export default ButtonFixedButton;