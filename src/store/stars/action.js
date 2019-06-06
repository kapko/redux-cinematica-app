export const start_types = {
    FETCHINNG_STARS_FULLFIELD: 'FETCHINNG_STARS_FULFILLED',
    UPDATE_ITEM: 'UPDATE_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    FETCHINNG_STARS_REJECTED: 'FETCHINNG_STARS_REJECTED',
    FETCHINNG_STARS: 'FETCHINNG_STARS'
}

export const setStars = res => dispatch => {
    dispatch({
        type: start_types.FETCHINNG_STARS,
        payload: res,
        loading: false,
    })
};

export const removeStar = id => dispatch => (
    dispatch({
        type: start_types.REMOVE_ITEM,
        id
    })
);

export const updateStar = item => dispatch => (
    dispatch({
        type: start_types.UPDATE_ITEM,
        item
    })
);
