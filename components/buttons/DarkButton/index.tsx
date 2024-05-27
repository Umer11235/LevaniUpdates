'use client';
import Icons from "@/components/header/customIcons"
import './style/style.css'
import { useRouter } from "next/navigation";

const DarkButton = (props: DarkButton) => {

    const router=useRouter();

    return <button className="btn btn-primary w-100 my-3" onClick={()=>{
        router.push(props.Link)
    }}>
        {props.title} <span><Icons icon={props.icon} /></span>
    </button>
}

export default DarkButton;