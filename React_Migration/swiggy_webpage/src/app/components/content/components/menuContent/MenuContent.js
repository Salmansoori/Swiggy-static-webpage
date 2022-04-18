import React from 'react';
import MenuCart from './components/menuCart';
import MenuCategories from './components/menuCategories';
import MenuList from './components/menuList/MenuList';

export default function MenuContent() {
    
    return (
        <>
            <div className="menu-section">
                <MenuCategories />
                <MenuList />
                <MenuCart />
            </div>
        </>
    )
}
