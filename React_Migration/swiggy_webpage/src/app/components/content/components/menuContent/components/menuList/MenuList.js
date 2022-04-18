import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux';
import { selectRestaurantData } from '../../../../../../reducers/selectors/Restaurant';
import Dish from './components/Dish';

function MenuList(props) {
    const { restaurantData, onlyVeg } = props
    const restaurant_menu = restaurantData.KITCHEN_OF_PUNJAB.menuSection;

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            handleScrollEvent();
        });
    }, []);

    
    const filteredMenu = useMemo(() => restaurant_menu.map(menuSection => ({
            ...menuSection,
            menuList: menuSection.menuList.filter((item) => (!onlyVeg || item.veg)),
        })), [restaurant_menu, onlyVeg])

    return (
        <div className="menu" id="menu" >
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
        if (currLeftItem.includes(currMenuitem)) {
            leftSectionList[i].childNodes[0].style.color = "orange";
        }
    }
}

const mapStateToProps = (state) =>{
    return {
        onlyVeg: state.veg,
        restaurantData: selectRestaurantData(state)
    }
}

export default connect(mapStateToProps)(MenuList);