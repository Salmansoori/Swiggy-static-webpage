import React, { useCallback } from 'react'
import { connect } from 'react-redux';
import { updateOnlyVegPreference } from '../../../../actions';
import { selectOnlyVeg } from '../../../../reducers/selectors/OnlyVeg';
import { selectRestaurantData } from '../../../../reducers/selectors/Restaurant';

function RestaurantHeader(props) {
    const {onlyVeg, setOnlyVeg, restaurantData} = props
    const restaurant_details = restaurantData.KITCHEN_OF_PUNJAB.restaurant_details
    const { restaurant_name, restaurant_type, restaurant_address, restaurant_pic, restaurant_ratings, ratings_count, average_cost_of_two_items, offerList } = restaurant_details

    return (
        <>
            <div className="home">
                <a href="/">Home / Bangalore / BTM - Bangalore / Kitchens of Punjab</a>
            </div>
            <div className="restaurant-header">
                <div className="jumbotron" id="jumbotron">
                    <div className="res-img">
                        <img src={restaurant_pic} alt="restaurant_photo" />
                    </div>
                    <div className="restaurant">
                        <div>
                            <h2>{restaurant_name}</h2>
                        </div>
                        <div className="about-res">
                            <div>{restaurant_type}</div>
                            <div>{restaurant_address}</div>
                        </div>
                        <div className="rat-del-cost">
                            <div className="res-rating">
                                <div>* {restaurant_ratings}</div>
                                <div>{ratings_count} ratings</div>
                            </div>
                            <div className="res-del-time">
                                <div>--min</div>
                                <div>Delivery time</div>
                            </div>
                            <div className="res-order-cost">
                                <div>$ {average_cost_of_two_items}</div>
                                <div>cost for two</div>
                            </div>
                        </div>
                        <div className="search">
                            <div className="search-bar">
                                <input type="text" placeholder="Search for dishes..." />
                            </div>
                            <div className="veg-dish">
                                <input type="checkbox" checked={onlyVeg} onChange={useCallback((e)=>{setOnlyVeg(e.target.checked)},[onlyVeg])} />
                                <span>Veg Only</span>
                            </div>
                            <div className="fav-dish">
                                <input type="checkbox" />
                                <span>Favourite</span>
                            </div>
                        </div>
                    </div>
                    <div className="offer">
                        <div className="offer-head">OFFER</div>
                        {offerList.map((offer) => (
                            <div className="offer-type" key={offer}>
                                {offer}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        onlyVeg: selectOnlyVeg(state),
        restaurantData: selectRestaurantData(state)
    }
}

const mapDispatchToProps = {
        setOnlyVeg: updateOnlyVegPreference
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantHeader);