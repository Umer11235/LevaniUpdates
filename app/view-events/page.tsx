import CallWaiterButton2 from "@/components/buttons/callwaiter2Button";
import Header from "@/components/header";
import SpaceButton from "@/components/buttons/primaryButton";
import Image from "next/image";
import Heading from "@/components/headings/main-heading";
import TableCard from "@/components/cards/table";

import img4 from '../../images/Rectangle 4.png'
import Icons from "@/components/header/customIcons";



export default function Home() {
  return (
    <div className="s-table">
      <Header />
      <div className="container my-3" >
        <div className="table-main-img">
          <Image
            //  layout="fill"
            objectFit="contain"
            objectPosition="center"
            src={img4} alt="" />
        </div>
        <h1 id="s-t-heading">The Garden Terrace</h1>








        {/* <div className="row"> */}
      <div className="VewE_Line"></div>
        {/* </div> */}


{/* <div className="row"> */}

 <div className="View_Event_list">


<div className="VElist">
    <p><Icons icon="calender"/></p>
    <p>12th October, 2023</p>

</div>

<div className="VElist1">
    <p><Icons icon="watch"/></p>
    <p>01:30 PM</p>

</div>
        </div>
        {/* </div> */}



        {/* <div className="row"> */}
      <div className="VewE_Line"></div>
        {/* </div> */}


{/* <div className="row"> */}
    <div className="VE_Desc">

<p>
Join us for a fantastic celebration as we come together to mark the special day of our beloved Josh! Get ready for a day filled with joy, laughter, and unforgettable moments. We'll have delicious food, exciting games, and plenty of surprises in store. Let's make this birthday a truly memorable one for Josh. Your presence is the best gift of all, and we can't wait to celebrate with you!
</p>

</div>

{/* </div> */}




  

     
       
      </div>


    </div>

  );
}
