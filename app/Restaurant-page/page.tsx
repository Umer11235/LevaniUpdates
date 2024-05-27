import CallWaiterButton2 from "@/components/buttons/callwaiter2Button";
import Header from "@/components/header";
import SpaceButton from "@/components/buttons/primaryButton";
import Image from "next/image";
import Heading from "@/components/headings/main-heading";
import TableCard from "@/components/cards/table";
import img1 from "../../images/Rectangle.jpg";

import img4 from "../../images/Rectangle 4.png";
import Icons from "@/components/header/customIcons";
import EventCard from "@/components/cards/EventCard";

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
            src={img1}
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

</div>

      </div>
    </div>
  );
}
