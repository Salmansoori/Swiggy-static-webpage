import React, { useEffect } from 'react';
import RestaurantHeader from './components/restaurantHeader/RestaurantHeader';
import MenuContent from './components/menuContent/MenuContent';
import { connect } from 'react-redux';
import { selectError, selectLoading, selectRestaurantData } from '../../reducers/selectors/Restaurant';
import { fetchRestaurantData } from '../../actions';
import Loader from '../Loader.js';

function Content(props) {

    const { isLoading, restaurantData, fetchRestaurantData } = props

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    return (isLoading || restaurantData.length === 0) ?
            <Loader /> :
        (
            <>
                <RestaurantHeader />
                <MenuContent />
            </>
        )
}

const mapStateToProps = state => {
    return {
        isError: selectError(state),
        isLoading: selectLoading(state),
        restaurantData: selectRestaurantData(state)
    }
}

const mapDispatchToProps = {
    fetchRestaurantData: fetchRestaurantData
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);