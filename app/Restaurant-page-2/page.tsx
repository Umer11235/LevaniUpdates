'use client';

import Header from "@/components/header";
import Image from "next/image";

import img from "../../images/Rectangle.jpg";
import img1 from "../../images/Rectangle 3News.png";
import img2 from "../../images/viewblog2.png";
import img4 from "../../images/Rectangle 4.png";
import img3 from "../../images/Rectangle 3News.png";


import Icons from "@/components/header/customIcons";


import Blogs_Card from "@/components/cards/Blogs_Card/Blog_Card";
import LightButton from "@/components/buttons/LightButton";
import DarkButton from "@/components/buttons/DarkButton";
import { useState } from "react";
import News_Card from "@/components/cards/News_Card/News_Card";
import EventCard from "@/components/cards/EventCard";

export default function Home() {



  const [activeSection, setActiveSection]=useState<string>();
const[ActiveItem,setActiveItem]=useState<string>("");



const ActiveClass=(item:string):string=>{
  
return item===ActiveItem?"Active":"" ;

}

 const onItemClick=(check:string)=>{
    
    if(check=="Blogs"){
      setActiveSection(check)
      setActiveItem(check)
    }
    if(check=="Events"){
      setActiveSection(check)
      setActiveItem(check)
    
    }

    if(check=="News"){
      setActiveSection(check)
      setActiveItem(check)
    
    }



  }



  return (
    <div className="s-table">
      <Header />
      <div className="container my-3">
        <div className="table-main-img">
          <Image
            //  layout="fill"
            objectFit="contain"
            objectPosition="center"
            src={img}
            alt=""
          />
        </div>
        <h1 id="s-t-heading">
          Adrien's Cuisine <Icons icon="ChevronRight" />
        </h1>

        {/* <div className="row"> */}
        <div className="VewE_Line"></div>
        {/* </div> */}

        {/* <div className="row"> */}

        <div className="RP_list">
          <div className="RPlist">
            <ul>
              <li className="RPlist_li">
                <Icons icon="watch" />
              </li>
              <li>Open from</li>
              <li className="RPlist_li">10:00 AM</li>
              <li>to</li>
              <li className="RPlist_li">11:00 AM</li>
            </ul>
          </div>

          <div className="Rplist1">
            <ul>
              <li>
                <Icons icon="location" />
              </li>
              <li>Street 14, West ridge </li>
            </ul>
          </div>

          <div className="Rplist2">
            <ul>
              <li className={ActiveClass("Blogs")} onClick={() => onItemClick("Blogs")}>Blogs</li>
              <li className={ActiveClass("Events")}  onClick={() => onItemClick("Events")}>Events</li>
              <li className={ActiveClass("News")}  onClick={() => onItemClick("News")}>News</li>

            </ul>
          </div>
        </div>
        {/* </div> */}
<div className="container ECard">

{
  
  
   activeSection==='Blogs'?
   (
    <>
   <Blogs_Card 
   img={img2}
   heading="Plant-Based Meat Sales Surge Amid Growing Health and Sustainability Concerns"
   
   desc="The demand for plant-based meat products is skyrocketing as consumers seek healthier and more eco-friendly alternatives to traditional meat"
   />

<Blogs_Card 
   img={img2}
   heading="Plant-Based Meat Sales Surge Amid Growing Health and Sustainability Concerns"
   
   desc="The demand for plant-based meat products is skyrocketing as consumers seek healthier and more eco-friendly alternatives to traditional meat"
   />
  <Blogs_Card 
   img={img2}
   heading="Plant-Based Meat Sales Surge Amid Growing Health and Sustainability Concerns"
   
   desc="The demand for plant-based meat products is skyrocketing as consumers seek healthier and more eco-friendly alternatives to traditional meat"
   />

</>
   ):
   activeSection==='News'?
   (
  <>
  <News_Card 
      img={img3}
      heading="Plant-Based Meat Sales Surge Amid Growing Health and Sustainability Concerns"
      time="2 Hours Ago"
      desc="The demand for plant-based meat products is skyrocketing as consumers seek healthier and more eco-friendly alternatives to traditional meat"
      />

<News_Card 
      img={img3}
      heading="Plant-Based Meat Sales Surge Amid Growing Health and Sustainability Concerns"
      time="2 Hours Ago"
      desc="The demand for plant-based meat products is skyrocketing as consumers seek healthier and more eco-friendly alternatives to traditional meat"
      /> 
      
      <News_Card 
      img={img3}
      heading="Plant-Based Meat Sales Surge Amid Growing Health and Sustainability Concerns"
      time="2 Hours Ago"
      desc="The demand for plant-based meat products is skyrocketing as consumers seek healthier and more eco-friendly alternatives to traditional meat"
      />
</>


   ):
   activeSection==='Events'?
   (
<>
    <EventCard
    heading="The Garden Terrace"
    title1="12th October, 2023"
    title2="01:30 PM"
    img={img4}
  />

<EventCard
    heading="The Garden Terrace"
    title1="12th October, 2023"
    title2="01:30 PM"
    img={img4}
  />
      <EventCard
    heading="The Garden Terrace"
    title1="12th October, 2023"
    title2="01:30 PM"
    img={img4}
  />

</>

   )
   
   
   :null


    
  

}
   
   

   <div className="RP1_fixBottom_Card">


<div className="Bottom_Card_Heading">
<div>
  <p>Adrien’s Cuisine</p>
  <p>Open from 10:00AM to 11:00PM</p>
</div>

<div>
  <Icons icon="ChevronRight"/>
</div>

</div>

<div className="Bottom_Card_Desc">
  <p><span><Icons icon="location"/></span> Street 14, West ridge</p>
  <p>40 minutes away</p>
</div>


<div className="Bottom_Card_Hr"></div>


<div className="Bottom_Card_btn"> 
<LightButton Icon="bell" title="Take Away"/>
<DarkButton Link="/home" title="In Place" icon="chev-right"/>


</div>


</div>


</div>

      </div>
    </div>
  );
}
