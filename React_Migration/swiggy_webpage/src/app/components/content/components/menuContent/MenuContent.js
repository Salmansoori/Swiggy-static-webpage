import React from 'react';
import MenuCart from './components/menuCart';
import MenuHeadings from './components/menuHeadings/MenuHeadings';
import MenuList from './components/menuList/MenuList';

export default function MenuContent(props) {
    const {onlyVeg} = props
    return (
        <>
            <div className="menu-section">
                <MenuHeadings />
                <MenuList onlyVeg={onlyVeg}/>
                <MenuCart />
            </div>
        </>
    )
}
