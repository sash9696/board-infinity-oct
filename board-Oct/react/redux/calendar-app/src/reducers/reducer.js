import { CHANGE_MONTH } from "../actions";


const initialState = {
    name: 'John'
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_MONTH:

        //logic to change the month , day and , year

        default:
            return state
    }
}