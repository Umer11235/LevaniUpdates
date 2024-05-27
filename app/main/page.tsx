import CallWaiterButton from "@/components/buttons/callwaiterButton";
import CartButton from "@/components/buttons/cartButton";
import CartCard from "@/components/cards/cart";
import Header from "@/components/header";
import Heading from "@/components/headings/main-heading";
import SliderButton from "@/components/sliders/buttons";
import DropdownMenu from "@/components/textInput/dropdown";
import SearchBar from "@/components/textInput/searchBar";
import FilterButton from "@/components/buttons/primaryButton";
import RestaurantCard from "@/components/cards/Rest_Card";


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
export default function MenuPage() {
  return (
    <div>
      <Header />
      <div className="container my-3" >
      <Heading title="Restaurant" />

        <SearchBar placeholder="Search for dishes" />

<DropdownMenu selected="Select Restaurant type" option="one"/>
<FilterButton title="Filter" />


        <div className="my-4 cart-p" >
          {/* {cartCards.map((x, i) => {
            return <CartCard price={x.price} recipies={x.recipies} image={x.image} time={x.time} title={x.title} />
          })} */}

          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>

        </div>
      </div>
      {/* <div className="cart-button-p">
        <CallWaiterButton />
        <CartButton />
      </div> */}
    </div>

  );
}
