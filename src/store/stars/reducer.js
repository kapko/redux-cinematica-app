import { start_types } from './action';

const initialState = {
    count: 0,
    results: [],
    loading: true,
    error: null,
    singleStar: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case start_types.FETCHINNG_STARS_FULLFIELD:
            return {
                ...state,
                loading: false,
                count: action.payload.data.length,
                results: action.payload.data
            };

        case start_types.FETCHINNG_STARS_REJECTED:
            return {
                loading: action.loading,
                error: action.payload
            };

        case start_types.REMOVE_STAR:
            state.results.splice(state.results.findIndex(i => i.id === action.id), 1);

            return {
                ...state,
                count: state.count--,
                results: [...state.results]
            };

        case start_types.UPDATE_STAR:
            const results = state.results.map(star => {
                return star.id === action.item.id ? star = action.item : star
            });

            return {...state, results};

        case start_types.FETCH_STAR:
            return {
                ...state,
                singleStar: state.results.find(i => i.id === action.id),
            }
        default:
            return state;
    }
}
