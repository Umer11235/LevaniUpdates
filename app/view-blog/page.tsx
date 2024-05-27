import Header from "@/components/header";
import Image from "next/image";

import user from "../../images/Frame 1.png";
import img1 from "../../images/Rectangle 3News.png";
import img2 from "../../images/viewblog2.png";




export default function Home() {




  return (
    <div className="s-table">
      <Header />
      <div className="container my-3">

<div className="container ECard">


      
<div className="View_NewsCard">

<div className="View_NewsCard-img">
  <Image
    //  layout="fill"
    objectFit="contain"
    objectPosition="center"
    src={img2} alt="" />
</div>
<p>Savoring Summer Delights: Grilled Vegetable Salad</p>



<div className='View_NewsCard_Desc'>

<p> As the sun's warmth envelops us and the days stretch longer, there's no better way to celebrate summer than with a vibrant and refreshing grilled vegetable salad. This dish bursts with colors and flavors that encapsulate the essence of the season.
Start by selecting an array of fresh vegetables like bell peppers, zucchini, eggplant, and red onions. Slice them into uniform pieces to ensure even grilling. Drizzle with olive oil, sprinkle with salt and pepper, and then place them on a preheated grill. The sizzle of vegetables hitting the hot grates and the smoky aroma that fills the air is a true summer symphony. Once they've developed those beautiful grill marks and are tender with a hint of char, remove them and let them cool slightly. Then, arrange them on a platter and sprinkle with crumbled feta cheese, fresh basil leaves, and a drizzle of balsamic reduction. This grilled vegetable salad is not only a feast for the eyes but also a delightful medley of textures and tastes. It's the perfect accompaniment to any summer meal or a standalone dish for a light and healthy lunch. Embrace the season and relish every bite of this summer sensation!</p>
</div>






<div className="VewE_Line2"></div>
  
  <div className="View_News_writer">
<div>
<Image src={user} alt="abc"/>
</div>
<div>
<p>Writer Name</p>
<p>Writer title</p>
</div>

</div>

</div>
   










</div>



      </div>
    </div>
  );
}
