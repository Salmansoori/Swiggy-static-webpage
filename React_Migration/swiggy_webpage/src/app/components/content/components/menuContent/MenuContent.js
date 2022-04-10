import React from 'react';
import MenuCart from './components/menuCart';
import MenuCategories from './components/menuCategories';
import MenuList from './components/menuList/MenuList';

export default function MenuContent(props) {
    const {onlyVeg} = props
    return (
        <>
            <div className="menu-section">
                <MenuCategories />
                <MenuList onlyVeg={onlyVeg}/>
                <MenuCart />
            </div>
        </>
    )
}
