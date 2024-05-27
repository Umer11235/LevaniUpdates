'use client';
import Icons from "@/components/header/customIcons";
import Image from "next/image";
import { IEventCards } from "./interface";
import '../EventCard/Style/Style.css'
import { useRouter } from "next/navigation";

function EventCard(props:IEventCards) {
  const routr=useRouter();  
  return ( 

        
<div className="MiniCard" onClick={()=>{ routr.push('./view-events')}}>

<div className="MiniCard-img">
  <Image
    //  layout="fill"
    objectFit="contain"
    objectPosition="center"
    src={props.img} alt="" />
</div>
<p>{props.heading}</p>

<div className="MiniCardL">
<p><span><Icons icon="calender"/></span>{props.title1}</p>
<p><span><Icons icon="watch"/></span> {props.title2}</p>

</div>
</div>
     );
}

export default EventCard;