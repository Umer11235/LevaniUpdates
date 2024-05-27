import Header from "@/components/header";
import Image from "next/image";

import img from "../../images/Rectangle.jpg";
import img1 from "../../images/Rectangle 3News.png";

import Icons from "@/components/header/customIcons";
import News_Card from "@/components/cards/News_Card/News_Card";
import CallWaiterButton2 from "@/components/buttons/callwaiter2Button";
import CallWaiterButton from "@/components/buttons/callwaiterButton";
import DishesButton from "@/components/buttons/adddishesButton";
import LightButton from "@/components/buttons/LightButton";
import DarkButton from "@/components/buttons/DarkButton";
import { Console } from "console";

export default function Home() {




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
              <li>Blogs</li>
              <li>Events</li>
              <li>News</li>
            </ul>
          </div>
        </div>
        {/* </div> */}
<div className="container ECard">

      <News_Card 
      img={img1}
      heading="Plant-Based Meat Sales Surge Amid Growing Health and Sustainability Concerns"
      time="2 Hours Ago"
      desc="The demand for plant-based meat products is skyrocketing as consumers seek healthier and more eco-friendly alternatives to traditional meat"
      />
   
   <News_Card 
      img={img1}
      heading="Plant-Based Meat Sales Surge Amid Growing Health and Sustainability Concerns"
      time="2 Hours Ago"
      desc="The demand for plant-based meat products is skyrocketing as consumers seek healthier and more eco-friendly alternatives to traditional meat"
      />

  
<News_Card 
      img={img1}
      heading="Plant-Based Meat Sales Surge Amid Growing Health and Sustainability Concerns"
      time="2 Hours Ago"
      desc="The demand for plant-based meat products is skyrocketing as consumers seek healthier and more eco-friendly alternatives to traditional meat"
      />


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
<LightButton Icon="bell" title="Call Waiter"/>
<DarkButton title="Select Space" icon="chev-right"/>


</div>


</div>

</div>

      </div>
    </div>
  );
}
