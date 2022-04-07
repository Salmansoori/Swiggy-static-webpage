import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react'
import restaurantContext from '../../../../../../context/RestaurantContext'
import Dish from './components/Dish';
import produce from "immer";

export default function MenuList(props) {
    const restaurant_data = useContext(restaurantContext);
    const restaurant_menu = restaurant_data.menuSection;
    const { onlyVeg } = props

    const scrollRef = useRef();
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            handleScrollEvent();
        });
    }, []);

//     const onlyVegItems = produce(restaurant_menu, draft => {
//         draft.map((menuItem) => {
//             menuItem.menuList = menuItem.menuList.filter((item) => item.veg === true)
//             return menuItem
//         })
//     })
    
    const filteredMenu = useMemo(() => restaurant_menu.map(menuSection => ({
            ...menuSection,
            menuList: menuSection.menuList.filter((item) => (!onlyVeg || item.veg)),
        })), [restaurant_menu, onlyVeg])

    return (
        <div className="menu" id="menu" ref={scrollRef}>
            {
                filteredMenu.map((menuItem) => (
                    <div id={menuItem.id} key={menuItem.id} className='item-head'>
                        <div>
                            <h1 className="menu-head">{menuItem.name} </h1>
                            <p>{menuItem.menuList.length} Items</p>
                        </div>
                        {
                            menuItem.menuList.map((item) => (
                                <Dish key={item.id} item={item} />
                            ))
                        }
                    </div>
                ))

            }
        </div>
    )
}

function handleScrollEvent() {
    let leftSection = document.getElementById("rec");
    let leftSectionList = leftSection.getElementsByTagName('li');
    let menuSection = document.getElementsByClassName('item-head');
    //console.log(menuSection, leftSectionList);
    let heightFromTop = menuSection[0].getBoundingClientRect().top;
    let menuDiv = document.getElementById("menu");
    var currMenuitem = "";
    for (let ind = 0; ind < menuSection.length; ind++) {
        let heightFromTop = menuSection[ind].getBoundingClientRect().top;
        if (heightFromTop <= 380 && heightFromTop >= -299) {
            currMenuitem = menuSection[ind].getAttribute("id");
        }
    };
    for (let i = 0; i < leftSectionList.length; i++) {
        let currLeftItem = leftSectionList[i].childNodes[0].getAttribute("href");
        leftSectionList[i].childNodes[0].style.color = "black";
        // console.log(currMenuitem, currLeftItem)
        if (currLeftItem.includes(currMenuitem)) {
            leftSectionList[i].childNodes[0].style.color = "orange";
        }
    }
}
