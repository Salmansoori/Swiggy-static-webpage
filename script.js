/* menuSection = [
    {
        id:"recommended",
        name:"recommended",
        menulist: [
            {
            id:"vp",
            name:"Veg Platter",
            cost:"799",
            desc:"An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            },
            {
                id:"vp",
                name:"Veg Platter",
                cost:"799",
                desc:"An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            },
            {
                    id:"vp",
                    name:"Veg Platter",
                    cost:"799",
                    desc:"An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                    img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            },
        ]
    },
    {
        id:"starters",
        name:"starters",
        menulist: [
            {
            id:"vp",
            name:"Veg Platter",
            cost:"799",
            desc:"An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            },
            {
                id:"vp",
                name:"Veg Platter",
                cost:"799",
                desc:"An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            },
            {
                    id:"vp",
                    name:"Veg Platter",
                    cost:"799",
                    desc:"An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                    img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            },
        ]
    },
    {
        id:"main course",
        name:"main course",
        menulist: [
            {
            id:"vp",
            name:"Veg Platter",
            cost:"799",
            desc:"An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            },
            {
                id:"vp",
                name:"Veg Platter",
                cost:"799",
                desc:"An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            },
            {
                    id:"vp",
                    name:"Veg Platter",
                    cost:"799",
                    desc:"An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                    img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zcena4m8ccnauxcn8av0",
            },
        ]
    },
    
];
*/


function createLeftMenuSection(section){
    const a = document.createElement('a');
    const text = document.createTextNode(section.name);
    a.appendChild(text);
    a.href = "#" + section.id;
    const newLeftMenuItem = document.createElement('li');
    newLeftMenuItem.appendChild(a);
    return newLeftMenuItem;    
}

function createMenuListItemHead(section){
    const menuItemChildHead = document.createElement('div');
    const itemHead = document.createElement('h1');
    const itemHeadText = document.createTextNode(section.name);
    itemHead.appendChild(itemHeadText);
    const itemCount = document.createElement('p');
    const itemCountText = document.createTextNode(section.menulist.length);
    itemCount.appendChild(itemCountText);
    menuItemChildHead.appendChild(itemHead);
    menuItemChildHead.appendChild(itemCount);
    return menuItemChildHead;
}

function createDishitemName(name){
    const dishItemName = document.createElement('div');
    dishItemName.classList.add("item-name")
    const dishItemNameText = document.createTextNode(name);
    dishItemName.appendChild(dishItemNameText);
    return dishItemName;
}

function createDishItemCost(cost){
    const dishItemCost = document.createElement('div');
    dishItemCost.classList.add("item-price")
    const dishItemCostText = document.createTextNode(cost);
    dishItemCost.appendChild(dishItemCostText);
    return dishItemCost;
}

function createDishItemDesc(desc){
    const dishItemDesc = document.createElement('div');
    dishItemDesc.classList.add("item-desc")
    const dishItemDescText = document.createTextNode(desc);
    dishItemDesc.appendChild(dishItemDescText);
    return dishItemDesc;
}

function createDishItemPic(img){
    const dishItemPicImg = document.createElement('div');
    const image = document.createElement('img');
    image.src = img
    image.width = 140;
    dishItemPicImg.appendChild(image);
    return dishItemPicImg;
}

function createDishItemPicButton(){
    const dishItemPicAddB = document.createElement('div');
    dishItemPicAddB.classList.add("item-add")
    const button = document.createElement('button');
    const buttonText = document.createTextNode("Add");
    button.appendChild(buttonText);
    dishItemPicAddB.appendChild(button)
    return dishItemPicAddB;
}

function createNewDish(dish){
    const newDish = document.createElement('div');

    const newDishItem = document.createElement('div');
    newDishItem.classList.add("item")

    // dish name div
    const newDishItemName = createDishitemName(dish.name); 
    newDishItem.appendChild(newDishItemName);
    
    //dish cost div
    const newDishItemCost = createDishItemCost(dish.cost);
    newDishItem.appendChild(newDishItemCost);

    //dish description div
    const newDishItemDesc = createDishItemDesc(dish.desc);
    newDishItem.appendChild(newDishItemDesc);

    newDish.appendChild(newDishItem)
    
    // dish pic div
    const newDishItemPic = document.createElement('div');
    newDishItemPic.classList.add("item-pic")

    const newDishItemPicImg = createDishItemPic(dish.img);
    newDishItemPic.appendChild(newDishItemPicImg)
    
    // dish button div
    const newDishItemPicAddB = createDishItemPicButton();
    newDishItemPic.appendChild(newDishItemPicAddB);

    newDish.appendChild(newDishItemPic)
    newDish.classList.add("dish");
    return newDish;
}

function createSectionElementForMenu(section) {

    //left Menu Item
    let recommendedList = document.getElementById("rec");
    const leftMenuItem = createLeftMenuSection(section);
    recommendedList.appendChild(leftMenuItem)

    //right menu item list
    const menuItemChild = document.createElement('div');
    const menuListItemChildHead = createMenuListItemHead(section); 
    menuItemChild.appendChild(menuListItemChildHead);
    //console.log(menuItemChild);
    menuItemChild.classList.add("item-head");
    menuItemChild.setAttribute('id', section.id)
    
    // add dishes
    for (let itemInd = 0; itemInd < section.menulist.length; itemInd++) {
        const newDish = createNewDish(section.menulist[itemInd]);
        menuItemChild.appendChild(newDish)
    };

    return menuItemChild;
}

fetch('./restaurant_data.json')
    .then(res => res.json())
    .then((data) => {
        //console.log(data);
        let menuSection = data.menuSection;
        let menulist = document.getElementById('menu')
        for (let ind = 0; ind < menuSection.length; ind++) {
            const section = menuSection[ind];
            //console.log(section);
            const sectionElement = createSectionElementForMenu(section);
            menulist.appendChild(sectionElement);
        }
    }).catch(err => {
        console.log(err);
    })