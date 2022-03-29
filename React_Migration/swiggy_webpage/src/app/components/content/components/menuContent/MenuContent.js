import React from 'react';
import MenuCart from './components/menuCart';
import MenuHeadings from './components/menuHeadings/MenuHeadings';
import MenuList from './components/menuList/MenuList';

export default function MenuContent() {
    return (
        <>
            <div className="menu-section">
                <MenuHeadings />
                <MenuList />
                <MenuCart />
            </div>
        </>
    )
}
