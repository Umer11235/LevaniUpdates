"use client";

import React from 'react';
import Image from "next/image";
import Icons from '@/components/header/customIcons';
import './style/style.css'
import img from '../../../images/Rectangle.jpg'
import { useRouter} from 'next/navigation';
import { userAgent } from 'next/server';



function RestaurantCard() {

const routr=useRouter();

    return ( 
<div className="Rcard" onClick={()=>{
routr.push('/Restaurant-page-2')
        }}>
<div className="Rcard_Img">
<Image src={img} alt="abc" />
</div>

<div className="Rcard_Desc">
    <p>Adrien’s Cuisine</p>
    <p>Open from 10:00AM to 11:00PM</p>

</div>

<div className="Rcard_details">
<p><span><Icons icon='location'/></span> Street 14, West ridge</p>
<p>40 minutes away</p>
</div>

</div>

     );
}

export default RestaurantCard;
