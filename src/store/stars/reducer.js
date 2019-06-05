import { start_types } from './action';

const initialState = {
    count: 0,
    results: [],
    loading: true,
    error: null
}

export default function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case start_types.FETCHINNG_STARS_FULLFIELD:
            return {
                ...state,
                loading: false,
                results: action.payload.data
            };
        case start_types.FETCHINNG_STARS_REJECTED:
            return {
                ...state,
                loading: action.loading,
                results: action.payload
            };
        case start_types.REMOVE_ITEM:
            const id = state.findIndex(i => i.id === action.id);
            state.results.splice(id, 1);

            return {
                ...state,
                count: action.payload.count,
                results: [...state.results]
            };
        default:
            return state;
    }
}
