import Header from "@/components/header";
import Image from "next/image";

import user from "../../images/Frame 1.png";
import img1 from "../../images/Rectangle 3News.png";

import Icons from "@/components/header/customIcons";
import News_Card from "@/components/cards/News_Card/News_Card";
import CallWaiterButton2 from "@/components/buttons/callwaiter2Button";
import CallWaiterButton from "@/components/buttons/callwaiterButton";
import DishesButton from "@/components/buttons/adddishesButton";
import LightButton from "@/components/buttons/LightButton";
import DarkButton from "@/components/buttons/DarkButton";
import { Console } from "console";
import Heading from "@/components/headings/main-heading";

export default function Home() {




  return (
    <div className="s-table">
      <Header />
      <div className="container my-3">
        {/* <div className="table-main-img">
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
        </h1> */}

        {/* <div className="row"> */}
        <div className="VewE_Line"></div>
        {/* </div> */}

        {/* <div className="row"> */}

        {/* <div className="RP_list">
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
        </div> */}
        {/* </div> */}
<div className="container ECard">

      <News_Card 
      img={img1}
      heading="Plant-Based Meat Sales Surge Amid Growing Health and Sustainability Concerns"
      time="2 Hours Ago"
      desc="The demand for plant-based meat products is skyrocketing as consumers seek healthier and more eco-friendly alternatives to traditional meat"
      />
   

      <div className="VewE_Line2"></div>
  


      <div className="News_writer">
<div>
  <Image src={user} alt="abc"/>
</div>
<div>
  <p>Writer Name</p>
  <p>Writer title</p>
</div>

</div>

<div className="View_heading2" style={{width:"100%"}}>
<Heading title="View Cart" />

</div>



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




</div>



      </div>
    </div>
  );
}
