import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import restaurantContext from './context/RestaurantContext';
import { useMemo} from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {

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
        menuList: [
          {
            id: "vp1",
            name: "Veg Platter",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            veg: true,
          },
          {
            id: "vp2",
            name: "Non Veg Platter",
            cost: "599",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            veg: false,
          },
          {
            id: "vpx",
            name: "main course a",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            veg: true,
          },
        ]
      },
      {
        id: "starters",
        name: "Starters",
        menuList: [
          {
            id: "vpa",
            name: "chicken wings",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            veg: false,
          },
          {
            id: "vpb",
            name: "french fries",
            cost: "499",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            veg: true,
          },
          {
            id: "vpc",
            name: "Starter",
            cost: "399",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            veg: true,
          },
        ]
      },
      {
        id: "main course",
        name: "Main Course",
        menuList: [
          {
            id: "vpx",
            name: "main course a",
            cost: "799",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            veg: true,
          },
          {
            id: "vpy",
            name: "main course b",
            cost: "299",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            veg: false,
          },
          {
            id: "vpz",
            name: "main course c",
            cost: "299",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            veg: false,
          },
          {
            id: "vpza",
            name: "main course d",
            cost: "199",
            desc: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            veg: true,
          },
        ]
      },
    ]
  }

  const restaurantContextValue = useMemo(() => { return KITCHEN_OF_PUNJAB }, [KITCHEN_OF_PUNJAB]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <restaurantContext.Provider value={restaurantContextValue}>
              <Content />
            </restaurantContext.Provider>
            <Footer />
          </>}>
        </Route>
        <Route path="/SignIn" element={
          <>
            <h1>please SignIn</h1>
            <button><Link to="/">Back</Link></button>
          </>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
