import React, { useState } from 'react';
import RestaurantHeader from './components/restaurantHeader/RestaurantHeader';
import MenuContent from './components/menuContent/MenuContent';

export default function Content() {
    const [onlyVeg, setOnlyVeg] = useState(false)
    return (
    <>
        <RestaurantHeader setOnlyVeg={setOnlyVeg} onlyVeg={onlyVeg}/>
        <MenuContent onlyVeg={onlyVeg}/>
    </>
    )
}