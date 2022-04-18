import React from 'react'
import { connect } from 'react-redux';
import { selectRestaurantData } from '../../../../../../reducers/selectors/Restaurant';

function MenuCategories(props) {

    const {restaurantData} = props;
    const restaurant_menu_section = restaurantData.KITCHEN_OF_PUNJAB.menuSection;
    const itemCategories = getItemCategories(restaurant_menu_section);

    return (
        <>
            <div className="menu-headings">
                <div className="menu-headings-list">
                    <ul id="rec">
                        {itemCategories.map((item) => (
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

const mapStateToProps = state =>{
    return {
        restaurantData: selectRestaurantData(state)
    }
}

export default connect(mapStateToProps)(MenuCategories);