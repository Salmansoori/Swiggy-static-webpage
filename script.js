menuSection = [
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



let recommendedList = document.getElementById("rec");
let menulist = document.getElementById("menu")

function createSectionElementForRecList(section){
    const a = document.createElement('a');
    const text = document.createTextNode(section.name);
    a.appendChild(text);
    a.href = "#"+section.id;
    const newRecItem = document.createElement('li');
    newRecItem.appendChild(a);
    //console.log(newRecItem);
    recommendedList.appendChild(newRecItem)
    const menuItem = document.createElement('div');

    const menuItemChild = document.createElement('div');
    const menuItemChildHead = document.createElement('div');
    const itemHead = document.createElement('h1');
    const itemHeadText = document.createTextNode(section.name);
    itemHead.appendChild(itemHeadText);
    const itemCount = document.createElement('p');
    const itemCountText = document.createTextNode(section.menulist.length);
    itemCount.appendChild(itemCountText);
    menuItemChildHead.appendChild(itemHead);
    menuItemChildHead.appendChild(itemCount);
    menuItemChild.appendChild(menuItemChildHead);
    //console.log(menuItemChild);
    menuItemChild.classList.add("item-head");
    menuItemChild.setAttribute('id',section.id)
    for( let itemInd=0; itemInd< section.menulist.length; itemInd++){
    
    const newDish = document.createElement('div');

    const newDishItem = document.createElement('div');
    newDishItem.classList.add("item")

    const newDishItemName = document.createElement('div');
    newDishItemName.classList.add("item-name")
    const newDishItemNameText = document.createTextNode(section.menulist[itemInd].name);
    newDishItemName.appendChild(newDishItemNameText);
    newDishItem.appendChild(newDishItemName);

    const newDishItemCost = document.createElement('div');
    newDishItemCost.classList.add("item-price")
    const newDishItemCostText = document.createTextNode(section.menulist[itemInd].cost);
    newDishItemCost.appendChild(newDishItemCostText);
    newDishItem.appendChild(newDishItemCost);

    const newDishItemDesc = document.createElement('div');
    newDishItemDesc.classList.add("item-desc")
    const newDishItemDescText = document.createTextNode(section.menulist[itemInd].desc);
    newDishItemDesc.appendChild(newDishItemDescText);
    newDishItem.appendChild(newDishItemDesc);
    newDish.appendChild(newDishItem)

    const newDishItemPic = document.createElement('div');
    newDishItemPic.classList.add("item-pic")

    const newDishItemPicImg = document.createElement('div');
    const image = document.createElement('img');
    image.src = section.menulist[itemInd].img
    image.width=140;
    newDishItemPicImg.appendChild(image)
    newDishItemPic.appendChild(newDishItemPicImg)

    const newDishItemPicAddB = document.createElement('div');
    newDishItemPicAddB.classList.add("item-add")
    const button = document.createElement('button');
    const buttonText = document.createTextNode("Add");
    button.appendChild(buttonText);
    newDishItemPicAddB.appendChild(button);
    newDishItemPic.appendChild(newDishItemPicAddB);
    newDish.appendChild(newDishItemPic)
    newDish.classList.add("dish")

    menuItemChild.appendChild(newDish)
    };
    //console.log(menulist)
    menulist.appendChild(menuItemChild)

}

for(let ind=0; ind<menuSection.length; ind++){
    const section = menuSection[ind];
    //console.log(section);
    createSectionElementForRecList(section);
}