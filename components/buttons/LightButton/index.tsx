'use client' 

import Icons from "@/components/header/customIcons"
import './style/style.css'
import { useRouter } from "next/navigation"
const LightButton=(props:LightButton)=>{

    const router=useRouter()
   
    return <button className="btn btn-outline-primary w-100 dishes-btn-2" onClick={()=>{
        router.push(props.OnClick);
    }}>
        <span><Icons icon={props.Icon}/></span> {props.title}
    </button>
}

export default LightButton;