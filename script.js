cart_data = [
    {
        "dish_name": "a",
        "dish_id": 2,
        "dish_price": 690,
    },
    {
        "dish_name": "b",
        "dish_id": 3,
        "dish_price": 790,
    },
    {
        "dish_name": "c",
        "dish_id": 1,
        "dish_price": 890,
    }
]

restaurant_details = {
    "id": "KOP",
    "name": "Kitchens of Punjab",
    "restaurant_type": "Punjabi, North Indian",
    "restaurant_address": "Bilekahalli, BTM - Bangalore",
    "restaurant_pic": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y2y8vkvvgpdu4nkxx5uj",
    "restaurant_ratings": "4.2",
    "res_count": "100+",
    "del_time": "50 mins",
    "cost_of_two_items": 500,
    offer: ["20% off | Use code PARTY", "15% off upto ₹100 | Use SBIC100 Above ₹400"]
}

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

let RestaurantModule = (function () {
    "use strict";
    const cartItems = [];
    const itemCount = new Map(); // {itemId: count}

    const Cart = (function () {
        function addToCart(item) {
            if (itemCount.has(item.id)) {
                itemCount.set(item.id, itemCount.get(item.id) + 1);
            } else {
                cartItems.push(item);
                itemCount.set(item.id, 1);
            }
        }

        function removeItem(item) {
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === item.id) {
                    cartItems.splice(i, 1);
                    itemCount.delete(item.id);
                    console.log(cartItems, itemCount)
                }
            }
        }

        function reduceItemCount(item) {
            itemCount.set(item.id, itemCount.get(item.id) - 1);
            if (itemCount.get(item.id) === 0) {
                removeItem(item);
            }
        }

        function getItemCount(item) {
            return itemCount.get(item.id);
        }

        return {
            addToCart,
            removeItem,
            reduceItemCount,
            getItemCount,
        }


    })();

    const ItemProperties = (function(){
        function getItemDict(dishId, dishName, dishCost) {
            return { "id": dishId, "name": dishName, "price": dishCost };
        }

        function getItemNameById(id) {
            for (let i = 0; i < menuSection.length; i++) {
                for (let j = 0; j < menuSection[i].menulist.length; j++) {
                    if (menuSection[i].menulist[j].id === id) {
                        return menuSection[i].menulist[j].name;
                    }
                }
            }
        }

        function getItemCostbyId(id) {
            for (let i = 0; i < menuSection.length; i++) {
                for (let j = 0; j < menuSection[i].menulist.length; j++) {
                    if (menuSection[i].menulist[j].id === id) {
                        return menuSection[i].menulist[j].cost;
                    }
                }
            }
        }

        function getSubTotal() {
            let subTotal = 0;
            for (let ind = 0; ind < cartItems.length; ind++) {
                subTotal += (parseInt(cartItems[ind].price) * itemCount.get(cartItems[ind].id));
            }
            return subTotal;
        }
        return{
            getItemNameById, getItemCostbyId, getItemDict, getSubTotal
        }
    })();

    const AddToCarts = (function addToCart() {
        let cartDivBeforeATC = document.getElementById("cart_div");

        let dishAddToCart = document.getElementById("menu");

        dishAddToCart.onclick = function (event) {
            let target = event.target;
            if (target.tagName == 'BUTTON') {
                changeAddButton(target);
                changeCartDivhtml(cartDivBeforeATC);
                return;
            }
            else if (target.tagName == 'SPAN') {
                dishCntCartDiv(target, "dish");
                changeCartDivhtml(cartDivBeforeATC);
                return;
            }
            else {
                target = target.parentNode;
            }
        }

        let cartDiv = document.getElementsByClassName("cart");
        cartDiv[0].onclick = function (event) {
            let target = event.target;
            console.log(target);
            if (target.tagName == "SPAN") {
                dishCntCartDiv(target, "cartItem");
                changeCartDivhtml(cartDivBeforeATC);
                return
            }
        }
        
        function dishCntCartDiv(target, className) {
            const dish = target.closest("."+className);
            const dishId = dish.getAttribute("id");
            let dishName = ItemProperties.getItemNameById(dishId);
            let dishCost = ItemProperties.getItemCostbyId(dishId);

            let item = ItemProperties.getItemDict(dishId, dishName, dishCost);
            //console.log(cartItems, itemCount)
            if (target.id === "minusDiv") {
                Cart.reduceItemCount(item);
                let dishCnt = Cart.getItemCount(item);
                changeDishCountHtml(dishId, target, dishCnt);
            }
            else if(target.id === "plusDiv") {
                Cart.addToCart(item);
                let dishCnt = Cart.getItemCount(item);
                changeDishCountHtml(dishId, target, dishCnt);
            }
        }

        function changeAddButton(target) {
            const dish = target.closest(".dish")
            const dishId = dish.getAttribute("id")
            let dishName = ItemProperties.getItemNameById(dishId);
            let dishCost =ItemProperties.getItemCostbyId(dishId);
            let item =ItemProperties.getItemDict(dishId, dishName, dishCost);
            Cart.addToCart(item);
            let dishCount = Cart.getItemCount(item);

            const plusMinusDiv = '<div class="addBClass"><span class="addBSpan" id="minusDiv">--</span><span class="addBcnt">' + dishCount + '</span><span class="addBSpan" id="plusDiv">+</span></div>';
            let itemAdd = document.querySelectorAll("#"+dishId+" .item-add");
            itemAdd[0].innerHTML = plusMinusDiv;
            //target.parentNode.replaceChild(plusMinusDiv, target);
        }

        function changeCartDivhtml(cartDivBeforeATC) {
            const addCardDiv = document.createElement("div");
            addCardDiv.id = "cart_div";
            addCardDiv.classList.add("cartAfterATC")
            
            const cartHeadDiv = document.createElement("div");
            const cartHead = document.createElement("h2");
            cartHeadDiv.classList.add("cart-heading");
            const cartHeadtext = document.createTextNode("Cart")
            cartHead.appendChild(cartHeadtext);

            const cartItemCnt = document.createElement("span");
            cartItemCnt.classList.add("cart-item-cnt");
            const cartItemCntText = document.createTextNode(cartItems.length + " ITEMS");
            cartItemCnt.appendChild(cartItemCntText);

            cartHeadDiv.appendChild(cartHead);
            cartHeadDiv.appendChild(cartItemCnt);
            addCardDiv.appendChild(cartHeadDiv);

            const cartItemListDiv = document.createElement("div")
            cartItemListDiv.classList.add("cart-item-list");

            for (let ind = 0; ind < cartItems.length; ind++) {
                const cartItemDiv = document.createElement("div");
                cartItemDiv.classList.add("cartItem");
                cartItemDiv.id = cartItems[ind].id;
                const itemName = document.createElement("div");
                itemName.classList.add("cart-item-name");
                const itemText = document.createTextNode(cartItems[ind].name);
                itemName.appendChild(itemText);
                cartItemDiv.appendChild(itemName);
                console.log(cartItems[ind])
                const itemId = document.getElementById(cartItems[ind].id)
                const cloneDiv = itemId.getElementsByClassName("addBClass")[0];

                cartItemDiv.appendChild(cloneDiv.cloneNode(true));
                const itemPrice = document.createElement("div");
                itemPrice.classList.add("cart-item-price");
                const itemPriceText = document.createTextNode(parseInt(cartItems[ind].price) * itemCount.get(cartItems[ind].id));
                itemPrice.appendChild(itemPriceText);
                cartItemDiv.appendChild(itemPrice);
                cartItemListDiv.appendChild(cartItemDiv); 
            };
            addCardDiv.appendChild(cartItemListDiv);
            const cartSubTotalDiv = document.createElement("div");
            cartSubTotalDiv.classList.add("sub-total")
            const cartSubTotalHead = document.createElement("h3");
            const cartSubTotalHeadText = document.createTextNode("SubTotal");
            cartSubTotalHead.appendChild(cartSubTotalHeadText);
            cartSubTotalDiv.appendChild(cartSubTotalHead);

            const subTotal = document.createElement("span");
            let sub_total = ItemProperties.getSubTotal();
            const subTotalText = document.createTextNode(sub_total);
            subTotal.appendChild(subTotalText);
            cartSubTotalDiv.appendChild(subTotal);

            addCardDiv.appendChild(cartSubTotalDiv);

            const cartCheckoutBtn = document.createElement("button");
            cartCheckoutBtn.classList.add("cart-checkout")
            const cartCheckoutBtnText = document.createTextNode("CHECKOUT");
            cartCheckoutBtn.appendChild(cartCheckoutBtnText);
            addCardDiv.appendChild(cartCheckoutBtn);

            const cart = document.querySelectorAll(" .cart");
            if(cartItems.length === 0){
                cart[0].innerHTML=cartDivBeforeATC.innerHTML;
            }
            else{
                cart[0].innerHTML = addCardDiv.innerHTML;
            }
            //cartDiv.parentNode.replaceChild(addCardDiv, cartDiv);    
        }

        function changeDishCountHtml(dishId, target, dishCnt) {
            if(dishCnt === undefined){
                let itemAddDiv = document.querySelectorAll("#"+dishId+" .item-add");
                itemAddDiv[0].innerHTML = "<button>Add</button>";
            }
            else{
            let allDishIdDiv = document.querySelectorAll('#'+dishId+" .addBClass"+" .addBcnt");
            allDishIdDiv.forEach(element => {
                element.textContent = dishCnt;
            });
            };
        }

    })();

    const MenuSection = (function(){    
        function createMenuListItemHead(section) {
            const menuItemChildHead = document.createElement('div');
            const itemHead = document.createElement('h1');
            const itemHeadText = document.createTextNode(section.name);
            itemHead.appendChild(itemHeadText);
            const itemCount = document.createElement('p');
            const itemCountText = document.createTextNode(section.menulist.length + " Items");
            itemCount.appendChild(itemCountText);
            menuItemChildHead.appendChild(itemHead);
            menuItemChildHead.appendChild(itemCount);
            return menuItemChildHead;
        }
    
        function createDishitemName(name) {
            const dishItemName = document.createElement('div');
            dishItemName.classList.add("item-name")
            const dishItemNameText = document.createTextNode(name);
            dishItemName.appendChild(dishItemNameText);
            return dishItemName;
        }
    
        function createDishItemCost(cost) {
            const dishItemCost = document.createElement('div');
            dishItemCost.classList.add("item-price")
            const dishItemCostText = document.createTextNode(cost);
            dishItemCost.appendChild(dishItemCostText);
            return dishItemCost;
        }
    
        function createDishItemDesc(desc) {
            const dishItemDesc = document.createElement('div');
            dishItemDesc.classList.add("item-desc")
            const dishItemDescText = document.createTextNode(desc);
            dishItemDesc.appendChild(dishItemDescText);
            return dishItemDesc;
        }
    
        function createDishItemPic(img) {
            const dishItemPicImg = document.createElement('div');
            const image = document.createElement('img');
            image.src = img
            image.width = 140;
            dishItemPicImg.appendChild(image);
            return dishItemPicImg;
        }
    
        function createDishItemPicButton(name) {
            const dishItemPicAddB = document.createElement('div');
            dishItemPicAddB.classList.add("item-add")
            const button = document.createElement('button');
            const buttonText = document.createTextNode("Add");
            button.appendChild(buttonText);
            //button.id = name;
            //button.onclick = function () { Clicked(name); };
            dishItemPicAddB.appendChild(button);
            return dishItemPicAddB;
        }
    
        function createNewDish(dish) {
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
            const newDishItemPicAddB = createDishItemPicButton(dish.name);
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
                newDish.id = section.menulist[itemInd].id;
                menuItemChild.appendChild(newDish)
            };
    
            return menuItemChild;
        }

        function createLeftMenuSection(section) {
            const a = document.createElement('a');
            const text = document.createTextNode(section.name);
            if(section.name === "Recommended"){
                a.style.color = "orange";
            }
            a.appendChild(text);
            a.href = "#" + section.id;
            const newLeftMenuItem = document.createElement('li');
            newLeftMenuItem.appendChild(a);
            return newLeftMenuItem;
        }
        return {
            createSectionElementForMenu,
            createNewDish,
            createDishItemPic,
            createDishItemDesc,
            createDishItemCost,
            createDishitemName,
            createMenuListItemHead,
            createLeftMenuSection,
        }
    })();

    const RestaurantHeader = (function(){
        function createResImageDiv(img) {
            const resImageDiv = document.createElement('div');
            resImageDiv.classList.add("res-img")
            const resImage = document.createElement('img');
            resImage.src = img;
            resImageDiv.appendChild(resImage);
            return resImageDiv;
        }
    
        function createResHeadDiv(name) {
            const resHeadDiv = document.createElement('div');
            const resHead = document.createElement('h1');
            const resName = document.createTextNode(name);
            resHead.appendChild(resName);
            resHeadDiv.appendChild(resHead);
            return resHeadDiv;
        }
    
        function createAboutResDiv(restaurant_data) {
            const aboutResDiv = document.createElement('div');
            aboutResDiv.classList.add("about-res");
            const resTypeDiv = document.createElement('div');
            const resTypeDivText = document.createTextNode(restaurant_data.restaurant_type);
            resTypeDiv.appendChild(resTypeDivText);
            const resAddDiv = document.createElement('div');
            const resAddDivText = document.createTextNode(restaurant_data.restaurant_address);
            resAddDiv.appendChild(resAddDivText);
            aboutResDiv.appendChild(resTypeDiv);
            aboutResDiv.appendChild(resAddDiv);
            return aboutResDiv;
        }
    
        function createResRatDiv(ratings) {
            const ratingsDiv = document.createElement('div');
            ratingsDiv.classList.add("res-rating");
            const starRating = document.createElement('div');
            const starRatingText = document.createTextNode(ratings);
            starRating.appendChild(starRatingText);
            const cntRating = document.createElement('div');
            const cntRatingText = document.createTextNode("100+ ratings");
            cntRating.appendChild(cntRatingText);
            ratingsDiv.appendChild(starRating);
            ratingsDiv.appendChild(cntRating);
            return ratingsDiv;
    
        }
    
        function createResDelTimeDiv(del_time) {
            const delTimeDiv = document.createElement('div');
            delTimeDiv.classList.add("res-del-time");
            const delTime = document.createElement('div');
            const deltimeText = document.createTextNode(del_time);
            delTime.appendChild(deltimeText);
            const delTimeHead = document.createElement('div');
            const delTimeHeadText = document.createTextNode("Delivery time");
            delTimeHead.appendChild(delTimeHeadText);
            delTimeDiv.appendChild(delTime);
            delTimeDiv.appendChild(delTimeHead);
            return delTimeDiv;
        }
    
        function createResorderCostDiv(order_cost) {
            const orderCostDiv = document.createElement('div');
            orderCostDiv.classList.add("res-order-cost");
            const orderCost = document.createElement('div');
            const orderCostText = document.createTextNode(order_cost);
            orderCost.appendChild(orderCostText);
            const orderCostHead = document.createElement('div');
            const orderCostHeadText = document.createTextNode("Cost for two");
            orderCostHead.appendChild(orderCostHeadText);
            orderCostDiv.appendChild(orderCost);
            orderCostDiv.appendChild(orderCostHead);
            return orderCostDiv;
        }
    
        function createResRatDelCostDiv(res_data) {
            const restaurantRTCdiv = document.createElement('div');
            restaurantRTCdiv.classList.add("rat-del-cost");
            const ResRatDiv = createResRatDiv(res_data.restaurant_ratings);
            restaurantRTCdiv.appendChild(ResRatDiv);
            const ResDelTimeDiv = createResDelTimeDiv(res_data.del_time);
            restaurantRTCdiv.appendChild(ResDelTimeDiv);
            const ResOrderCostDiv = createResorderCostDiv(res_data.cost_of_two_items);
            restaurantRTCdiv.appendChild(ResOrderCostDiv);
            return restaurantRTCdiv;
        }
    
        function createResSearchDiv() {
            const ResSearchDiv = document.createElement('div');
            ResSearchDiv.classList.add("search")
            const searchBarDiv = document.createElement('div');
            const inputSearchBar = document.createElement('input');
            inputSearchBar.type = "text";
            inputSearchBar.placeholder = "Search for dishes...";
            searchBarDiv.appendChild(inputSearchBar);
            searchBarDiv.classList.add("search-bar")
    
            const vegTickDiv = document.createElement('div');
            vegTickDiv.classList.add("veg-dish");
            const inputVegTick = document.createElement('input');
            inputVegTick.type = "checkbox";
            vegTickDiv.appendChild(inputVegTick);
            const spanDiv = document.createElement('span');
            const spanDivText = document.createTextNode("Veg only");
            spanDiv.appendChild(spanDivText);
            vegTickDiv.appendChild(spanDiv);
    
            const favTickDiv = document.createElement('div');
            favTickDiv.classList.add("fav-dish")
            const inputFavTick = document.createElement('input');
            inputFavTick.type = "checkbox";
            favTickDiv.appendChild(inputFavTick);
            const favSpanDiv = document.createElement('span');
            const favSpanDivText = document.createTextNode("Favourite");
            favSpanDiv.appendChild(favSpanDivText);
            favTickDiv.appendChild(favSpanDiv);
    
            ResSearchDiv.appendChild(searchBarDiv);
            ResSearchDiv.appendChild(vegTickDiv);
            ResSearchDiv.appendChild(favTickDiv);
            return ResSearchDiv;
    
        }
    
        function createResDiv(res_data) {
            const resDiv = document.createElement('div');
            resDiv.classList.add("restaurant");
            const resHeadDiv = createResHeadDiv(res_data.name);
            resDiv.appendChild(resHeadDiv);
    
            const resAboutDiv = createAboutResDiv(res_data);
            resDiv.appendChild(resAboutDiv);
    
            const resRatDelCostDiv = createResRatDelCostDiv(res_data);
            resDiv.appendChild(resRatDelCostDiv);
    
            const resSearchDiv = createResSearchDiv();
            resDiv.appendChild(resSearchDiv);
            return resDiv;
        }
    
        function createResOffer(offer) {
            const offerDiv = document.createElement('div');
            const offerText = document.createTextNode(offer);
            offerDiv.appendChild(offerText);
            offerDiv.classList.add("offer-type");
            return offerDiv
        }
    
        function createResOfferDiv(offer_array) {
            const ResOfferDiv = document.createElement('div');
            ResOfferDiv.classList.add("offer");
            const ResOfferHeadDiv = document.createElement('div');
            const ResOfferHeadText = document.createTextNode('OFFER');
            ResOfferHeadDiv.classList.add("offer-head");
            ResOfferHeadDiv.appendChild(ResOfferHeadText);
            ResOfferDiv.appendChild(ResOfferHeadDiv);
            for (let ind = 0; ind < offer_array.length; ind++) {
                const offer = createResOffer(offer_array[ind]);
                ResOfferDiv.appendChild(offer);
            }
            return ResOfferDiv;
        }
        return{
            createResImageDiv,
            createResDiv,
            createResOfferDiv
        }

    })();

    return {
        init: display
    };

    function display() {
        displayRestaurantDetailsSection(restaurant_details);
        displayMenu();
    }

    function displayMenu() {
        fetch('./restaurant_data.json')
            .then(res => res.json())
            .then((data) => {
                //console.log(data);
                let menuSection = data.menuSection;
                window.menuSection = menuSection;
                let menulist = document.getElementById('menu')
                for (let ind = 0; ind < menuSection.length; ind++) {
                    const section = menuSection[ind];
                    //console.log(section);
                    const sectionElement = MenuSection.createSectionElementForMenu(section);
                    menulist.appendChild(sectionElement);
                }
                (function handleScrollEvent() {
                    // scroll event 
                    let leftSection = document.getElementById("rec");
                    let leftSectionList = leftSection.getElementsByTagName('li');
                    let menuSection = document.getElementsByClassName('item-head');
                    //console.log(menuSection);
                    let heightFromTop = menuSection[0].getBoundingClientRect().top;
                    let menuDiv = document.getElementById("menu");
                    menuDiv.addEventListener("scroll", () => {
                        var currMenuitem = "";
                        for (let ind = 0; ind < menuSection.length; ind++) {
                            let heightFromTop = menuSection[ind].getBoundingClientRect().top;
                          console.log(heightFromTop, ind)
                            if (heightFromTop <= 395 && heightFromTop >= -824) {
                                currMenuitem = menuSection[ind].getAttribute("id");
                            }
                        };
                        for (let i = 0; i < leftSectionList.length; i++) {
                            let currLeftItem = leftSectionList[i].childNodes[0].getAttribute("href");
                            leftSectionList[i].childNodes[0].style.color = "black";
                            //leftSectionList[i].childNodes[0].classList.remove("scroll-hover");
                            //console.log(currMenuitem, currLeftItem)
                            if (currLeftItem.includes(currMenuitem)) {
            
                                leftSectionList[i].childNodes[0].style.color = "orange";
                            }
                        }
                    });
                })();
            }).catch(err => {
                console.log(err);
            })
    }

    function displayRestaurantDetailsSection(data) {
        const jumboDiv = document.getElementById('jumbotron');
        const resImgDiv = RestaurantHeader.createResImageDiv(data.restaurant_pic);
        jumboDiv.appendChild(resImgDiv);

        const resDiv = RestaurantHeader.createResDiv(data);
        jumboDiv.appendChild(resDiv);

        const resOfferDiv = RestaurantHeader.createResOfferDiv(data.offer);
        jumboDiv.appendChild(resOfferDiv);
    }

})();

RestaurantModule.init();