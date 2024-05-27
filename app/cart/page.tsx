import CallWaiterButton from "@/components/buttons/callwaiterButton";
import CallWaiterButton2 from "@/components/buttons/callwaiter2Button";
import CartButton from "@/components/buttons/cartButton";
import CartCard from "@/components/cards/cart";
import Header from "@/components/header";
import Heading from "@/components/headings/main-heading";
import TableHeading from "@/components/headings/sub-table-heading";
import SliderButton from "@/components/sliders/buttons";
import SearchBar from "@/components/textInput/searchBar";
import SpaceButton from "@/components/buttons/primaryButton";
import DishesCard from "@/components/cards/dishes";
import LightButton from "@/components/buttons/LightButton";
import DarkButton from "@/components/buttons/DarkButton";

const cartCards = [{

  time: '20 Minutes',
  title: 'Great Chisirtmas',
  recipies: ['Onions', 'Capsicum', 'Coriander', 'Chicken'],
  price: 550,
  image: require('@/images/food.jpg')
},
{

  time: '20 Minutes',
  title: 'Great Chisirtmas',
  recipies: ['Onions', 'Capsicum', 'Coriander', 'Chicken'],
  price: 550,
  image: require('@/images/food.jpg')
},
{

  time: '20 Minutes',
  title: 'Great Chisirtmas',
  recipies: ['Onions', 'Capsicum', 'Coriander', 'Chicken'],
  price: 550,
  image: require('@/images/food.jpg')
},
{

  time: '20 Minutes',
  title: 'Great Chisirtmas',
  recipies: ['Onions', 'Capsicum', 'Coriander', 'Chicken'],
  price: 550,
  image: require('@/images/food.jpg')
},
{

  time: '20 Minutes',
  title: 'Great Chisirtmas',
  recipies: ['Onions', 'Capsicum', 'Coriander', 'Chicken'],
  price: 550,
  image: require('@/images/food.jpg')
},]
export default function Home() {
  return (
    <div>
      <Header />
      <div className="container my-3" >
        <Heading title="View Cart" />
        <div className="my-4 cart-p">
          {cartCards.map((x, i) => {
            return <CartCard price={x.price} recipies={x.recipies} image={x.image} time={x.time} title={x.title} />
          })}
        </div>
        <div className="my-5">
          <TableHeading title="Total" value="$240" />
          <TableHeading title="Delivery Charges" value="$0" />
          <TableHeading title="Discounts" value="$0" />
          <TableHeading title="Grand Total " value="$240" />
        </div>
       
        <LightButton Icon="bell" title="Call Waiter"/>
<DarkButton Link="/order-details" title="Select Space" icon="chev-right"/>
        
      </div>


    </div>

  );
}
