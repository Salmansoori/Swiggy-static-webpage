import React, { useState } from 'react';
import RestaurantHeader from './components/restaurantHeader/RestaurantHeader';
import MenuContent from './components/menuContent/MenuContent';

export default function Content() {
    return (
    <>
        <RestaurantHeader/>
        <MenuContent/>
    </>
    )
}