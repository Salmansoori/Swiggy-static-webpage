import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import restaurantContext from './context/RestaurantContext';
import cartItemsContext from './context/CartItemsContext';
import { useMemo, useState } from 'react';

const initialItemCount = new Map()

function App() {

  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(initialItemCount);

  // const contextValue = useMemo(()=>{
  //     return {
  //       cart,
  //       itemCount
  //     }
  // }, [cart, itemCount])

  const addToCart = (item) => {
    const itemExist = cart.find((cartItem) => cartItem.id === item.id);
    if (itemExist) {
        setItemCount(itemCount.set(item.id, itemCount.get(item.id)+1))
        setCart(cart.map((cartItem) =>
            item.id === cartItem.id ?
                { ...itemExist, quantity: itemExist.quantity + 1 } :
                cartItem));
    }
    else {
        setItemCount(itemCount.set(item.id, 1))
        setCart([...cart, { ...item, quantity: 1 }]);
    }
}

const removeFromCart = (item) => {
    const itemExist = cart.find((cartItem) => cartItem.id === item.id);
    if(itemExist.quantity === 1){
        itemCount.delete(item.id)
        setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    }
    else{
        setItemCount(itemCount.set(item.id, itemCount.get(item.id)-1))
        setCart(cart.map((cartItem)=> item.id === cartItem.id ? {...itemExist, quantity:itemExist.quantity-1}: cartItem))
    }    
}



  const KITCHEN_OF_PUNJAB = {
    restaurant_details: {
      "id": "KOP",
      "restaurant_name": "Kitchens of Punjab",
      "restaurant_type": "Punjabi, North Indian",
      "restaurant_address": "Bilekahalli, BTM - Bangalore",
      "restaurant_pic": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y2y8vkvvgpdu4nkxx5uj",
      "restaurant_ratings": "4.2",
      "ratings_count": "100+",
      "del_time": "50 mins",
      "average_cost_of_two_items": 500,
      offerList: ["20% off | Use code PARTY", "15% off upto ₹100 | Use SBIC100 Above ₹400"]
    },
    menuSection: [
      {
        id: "recommended",
        name: "Recommended",
        menulist: [
          {
            id: "vp1",
            name: "Veg Platter",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
          },
          {
            id: "vp2",
            name: "Non Veg Platter",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
          },
          {
            id: "vp3",
            name: "Mix Veg Platter",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
          },
        ]
      },
      {
        id: "starters",
        name: "Starters",
        menulist: [
          {
            id: "vpa",
            name: "Veg starter",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
          },
          {
            id: "vpb",
            name: "xyz",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
          },
          {
            id: "vpc",
            name: "Starter",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
          },
        ]
      },
      {
        id: "main course",
        name: "Main Course",
        menulist: [
          {
            id: "vpx",
            name: "main course a",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
          },
          {
            id: "vpy",
            name: "main course b",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
          },
          {
            id: "vpz",
            name: "main course c",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
          },
          {
            id: "vpza",
            name: "main course d",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
          },
        ]
      },
    ]
  }

  return (
    <div className="App">
      <Header />
      <restaurantContext.Provider value={KITCHEN_OF_PUNJAB}>
        <cartItemsContext.Provider value={{cart, setCart, itemCount, setItemCount, addToCart, removeFromCart}}>
          <Content/>
        </cartItemsContext.Provider>
      </restaurantContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
