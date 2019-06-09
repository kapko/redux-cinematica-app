export const start_types = {
    FETCHINNG_STARS_FULLFIELD: 'FETCHINNG_STARS_FULFILLED',
    UPDATE_ITEM: 'UPDATE_ITEM',
    REMOVE_STAR: 'REMOVE_STAR',
    FETCHINNG_STARS_REJECTED: 'FETCHINNG_STARS_REJECTED',
    FETCHINNG_STARS: 'FETCHINNG_STARS',
    FETCH_STAR: 'FETCH_STAR'
}

export const fetchStars = payload => dispatch => {
    dispatch({
        type: start_types.FETCHINNG_STARS,
        payload,
        loading: false,
    })
};

export const fetchStar = id => dispatch => {
    dispatch({
        type: start_types.FETCH_STAR,
        id,
    })
}

export const removeStarById = id => dispatch => (
    dispatch({
        type: start_types.REMOVE_STAR,
        id
    })
);

export const updateStar = item => dispatch => (
    dispatch({
        type: start_types.UPDATE_ITEM,
        item
    })
);
