import React, { useContext } from 'react'
import restaurantContext from '../../../../../../context/RestaurantContext';

export default function MenuCategories() {
    const restaurant_data = useContext(restaurantContext);
    const restaurant_menu_section = restaurant_data.menuSection;
    const MenuCategories = getItemCategories(restaurant_menu_section);
    return (
        <>
            <div className="menu-headings">
                <div className="menu-headings-list">
                    <ul id="rec">
                        {MenuCategories.map((item) => (
                            <li key={item.categoryId}>
                                <a href={"#"+item.categoryId} key={item.categoryId}>
                                {item.categoryName}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

function getItemCategories(menuSection) {
    const itemCategories = [];
    for (let i = 0; i < menuSection.length; i++) {
        itemCategories.push({categoryName:menuSection[i].name, categoryId: menuSection[i].id});
    }
    return itemCategories;
}