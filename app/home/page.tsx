'use client'
import ButtonFixedButton from "@/components/buttons/buttomFixedButton";
import ButtomFixedButtonDark from "@/components/buttons/buttomFixedDark_button";
import CartButton from "@/components/buttons/cartButton";
import CartCard from "@/components/cards/cart";
import Header from "@/components/header";
import SliderButton from "@/components/sliders/buttons";
import SearchBar from "@/components/textInput/searchBar";
import { useRouter } from "next/navigation";

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
const SliderButtons = ["Best Sellers", "Bakes", "Hot", "Chinese", "Thai"]
export default function Home() {
const router=useRouter();

  return (
    <div>
      <Header />
      <div className="container my-3" >
        <SearchBar placeholder="Search for dishes" />
        <SliderButton buttons={SliderButtons} />
        <div className="my-4 cart-p">
          {cartCards.map((x, i) => {
            return <CartCard price={x.price} recipies={x.recipies} image={x.image} time={x.time} title={x.title} />
          })}
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="cart-button-p">
        <ButtonFixedButton icon="bell" name="Call Waiter"  />
        <ButtomFixedButtonDark  name="Cart" value="$525" OnClick={"/cart"} />
        
      </div>
    </div>

  );
}
