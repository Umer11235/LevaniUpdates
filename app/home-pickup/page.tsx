import ButtomFixedButtonDark from "@/components/buttons/buttomFixedDark_button";
import CallWaiterButton from "@/components/buttons/callwaiterButton";
import CartButton from "@/components/buttons/cartButton";
import CartCard from "@/components/cards/cart";
import Header from "@/components/header";
import SliderButton from "@/components/sliders/buttons";
import SearchBar from "@/components/textInput/searchBar";

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
      <div className="cart-button-p">
         {/* <CartButton /> */}
             <ButtomFixedButtonDark  name="Cart" value="$525" OnClick={"/cart-pickup"} />
      </div>
    </div>

  );
}
