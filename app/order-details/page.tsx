import CallWaiterButton2 from "@/components/buttons/callwaiter2Button";
import Header from "@/components/header";
import Heading from "@/components/headings/main-heading";
import OrderHeading from "@/components/headings/order-details-heading";
import SpaceButton from "@/components/buttons/primaryButton";
import DishesButton from "@/components/buttons/adddishesButton";
import { IDishesCard } from "@/components/cards/dishes/interface";
import DishesCard from "@/components/cards/dishes";
import LightButton from "@/components/buttons/LightButton";
import DarkButton from "@/components/buttons/DarkButton";
 const dishesCards = [{


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg'),
OnClick:'/select-table'
},
{


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg'),
  OnClick:'/select-table'
}, {


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg'),
  OnClick:'/select-table'
}, {


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg'),
  OnClick:'/select-table'
}, {


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg'),
  OnClick:'/select-table'
}, {


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg'),
  OnClick:'/select-table'
}, {


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg'),
  OnClick:'/select-table'
}]

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container my-3" >
        <Heading title="Order Details" />
        <div className="my-5">
          <OrderHeading qty="1" label="Grilled Salmon with Lemon Butter Sauce" />
          <OrderHeading qty="1" label="Beef Tenderloin Steak with Garlic Mashed Potatoes" />
          <OrderHeading qty="1" label="Vegetarian Penne Pasta Primavera" />
          <OrderHeading qty="1" label="Spicy Thai Red Curry with Chicken" />
          <OrderHeading qty="1" label="Margherita Pizza with Fresh Basil and Mozzarella" />
          <OrderHeading qty="1" label="Caesar Salad with Grilled Shrimp" />
          <OrderHeading qty="1" label="Sushi Roll Combo" />
          <OrderHeading qty="1" label="Mushroom Risotto with Truffle Oil" />
        </div>
        <DishesButton />
        <div className="my-3">
        <Heading title="Available Spaces" />
        <div className="dishes-card-p">
          {dishesCards.map((x:IDishesCard,i:number)=>{
            return <DishesCard OnClick={x.OnClick} title={x.title} image={x.image} subheading={x.subheading} heading={x.heading}/>
          })}
        </div>
        </div>

        <LightButton Icon="bell" title="Call Waiter"/>
        <DarkButton Link="/order-details" title="Proceed to Payment" icon="chev-right"/>
      </div>


    </div>

  );
}
