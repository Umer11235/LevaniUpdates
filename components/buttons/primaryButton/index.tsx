import Icons from "@/components/header/customIcons"
import './style/style.css'
import { IPrimaryButton } from "./interface";
const PrimaryIconButton = (props: IPrimaryButton) => {
    return <button className="btn btn-primary w-100 my-3">
        {props.title} <span><Icons icon="chev-right" /></span>
    </button>
}

export default PrimaryIconButton;