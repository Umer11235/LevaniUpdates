import { IHeading } from "./interface"
import './style/style.css'
const Heading=(props:IHeading)=>{
    return <div className="heading-main">
        <div className="divider-heading"></div>
        <h1>{props.title}</h1>
        <div className="divider-heading"></div>

    </div>
}

export default Heading;