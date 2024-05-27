"use client";
 import Image from "next/image";
import { IDishesCard } from "./interface";
import "./style/style.css";
import React from "react";
import { useRouter } from "next/navigation";
const DishesCard = (props: IDishesCard) => {
 
const router=useRouter();
    
    return (
        <div className="dishes-card" onClick={()=>{
            router.push(props.OnClick)
        }}>
           <div className="dishes-card-inner-img">
           <Image
                    
                    objectPosition="center"
                    src={props.image}
                    alt=""
                />
           </div>
           <div className="p-2">
           <h3>{props.title}</h3>
           <div className="d-flex justify-content-between">
            <h4>{props.heading}</h4>
            <h4>{props.subheading}</h4>
           </div>
           </div>
        </div>
    );
};

export default DishesCard;
