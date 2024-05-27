import CallWaiterButton2 from "@/components/buttons/callwaiter2Button";
import Header from "@/components/header";
import Heading from "@/components/headings/main-heading";
import OrderHeading from "@/components/headings/order-details-heading";
import SpaceButton from "@/components/buttons/primaryButton";
import DishesButton from "@/components/buttons/adddishesButton";
import { IDishesCard } from "@/components/cards/dishes/interface";
import DishesCard from "@/components/cards/dishes";
import TableHeading from "@/components/headings/sub-table-heading";
import PaymentButton from "@/components/buttons/paymentButtons";
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
        <div className="my-5">
          <TableHeading title="Total" value="$240" />
          <TableHeading title="Delivery Charges" value="$0" />
          <TableHeading title="Discounts" value="$0" />
          <TableHeading title="Grand Total " value="$240" />
        </div>
        <div className="my-3">
          <Heading title="Payment Method" />
          <PaymentButton icon="card" title="Credit/Debit Card" showRight={true} rightIcon="mastercard" rightIcon1="visa"/>
          <h5 className="or-lbl">Or</h5>
          <PaymentButton icon="paypal" title="Paypal" />
        </div>

        <div className="my-5">
        <CallWaiterButton2/>
        <SpaceButton title="Proceed to Payment"/>
        </div>
      </div>


    </div>

  );
}
