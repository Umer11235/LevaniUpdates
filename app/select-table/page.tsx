import CallWaiterButton2 from "@/components/buttons/callwaiter2Button";
import Header from "@/components/header";
import SpaceButton from "@/components/buttons/primaryButton";
import Image from "next/image";
import Heading from "@/components/headings/main-heading";
import TableCard from "@/components/cards/table";
import LightButton from "@/components/buttons/LightButton";
import DarkButton from "@/components/buttons/DarkButton";


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
            src={require('@/images/Rectangle.jpg')} alt="" />
        </div>
        <h1>The Garden Terrace</h1>
        <h4>Ground Floor</h4>

        <Heading title="Available Tables" />

        <div className="table-seats">
       {
          Array.from({length:5},(x,i)=>{
            return <>
            <TableCard seats={`${i+2} seats`} />
            </>
          } )
        }
       </div>

       <div className="my-5">
     

        <LightButton Icon="bell" title="Call Waiter"/>
<DarkButton Link="/order-details-pickup-payment" title="Checkout" icon="chev-right"/>
       </div>

       
      </div>


    </div>

  );
}
