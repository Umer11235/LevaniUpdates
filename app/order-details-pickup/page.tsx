import CallWaiterButton2 from "@/components/buttons/callwaiter2Button";
import Header from "@/components/header";
import Heading from "@/components/headings/main-heading";
import OrderHeading from "@/components/headings/order-details-heading";
import SpaceButton from "@/components/buttons/primaryButton";
import DishesButton from "@/components/buttons/adddishesButton";
import { IDishesCard } from "@/components/cards/dishes/interface";
import DishesCard from "@/components/cards/dishes";
import Icons from "@/components/header/customIcons";
import DarkButton from "@/components/buttons/DarkButton";
 const dishesCards = [{


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg')
},
{


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg')
}, {


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg')
}, {


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg')
}, {


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg')
}, {


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg')
}, {


  title: 'The Garden Terrace',
  heading: 'Ground Floor',
  subheading: '16 Seats',
  image: require('@/images/food.jpg')
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
        <Heading title="Pick Up Details" />
        
<div className="pickup_DetailsCard">

<div className="pickup_Details">

<div>
<p> Adrien's Cuisine </p>
<p> Open from 10:00AM to 11:00PM </p>
</div>

<div>
  <span>  <Icons icon="ChevronRight" /></span>
</div>

</div>



<div className="pickup_Details1">


<div>

              <span className="pickup_Details1_li">
                <Icons icon="watch" />
              </span>
            
              <p className="pickup_Details1_li">Pick up in 15 mins</p>
              </div>

              <p className="pickup_Details1_l"><Icons icon="pen"/> Change</p>
            
</div>




<div className="pickup_Details2">


<div>

              <span className="pickup_Details2_li">
                <Icons icon="location" />
              </span>
            
              <p className="pickup_Details2_li">Street 14, West ridge</p>
              </div>

              <p className="pickup_Details2_l"><Icons icon="loacted"/> View</p>
            
</div>


</div>

        </div>

         {/* <SpaceButton title="Checkout"/> */}
        <DarkButton Link="/order-details-pickup-payment" title="Checkout" icon="chev-right"/>

      </div>


    </div>

  );
}
