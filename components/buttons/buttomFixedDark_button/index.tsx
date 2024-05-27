'use client'
import Icons from "@/components/header/customIcons"
import './style/style.css'
import { useRouter } from "next/navigation"
const ButtomFixedButtonDark = (props:bottomFixedDark) => {
    
    const router=useRouter();
    return <button className="cart-bottom-button" onClick={()=>{
        router.push(props.OnClick)
    }}>
        <span>{props.name}</span>
        <span>{props.value}</span>
    </button>
}

export default ButtomFixedButtonDark;