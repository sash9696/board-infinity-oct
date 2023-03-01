import { CHANGE_MONTH } from "../actions";
import { getDays } from "../utils/calendarUtil";
import { daysInMonth, monthDays, monthSelected, yearSelected } from "../utils/dateUtil";

//startDay,
//endDay,
//monthSelected,
//yearSelected
//

const startDay = monthDays(`${monthSelected + 1}-01-${yearSelected}`)
const endDay = daysInMonth(monthSelected, yearSelected)


const initialState = {
    startDay,
    endDay,
    monthSelected,
    yearSelected,
    days: getDays(startDay, endDay)
}

export const reducer = (state = initialState, action) => {


    switch (action.type) {
        case CHANGE_MONTH:

            console.log('action', action)

            const { monthSelected, yearSelected } = action.payload

            const startDay = monthDays(`${monthSelected + 1}-01-${yearSelected}`)
            const endDay = daysInMonth(monthSelected, yearSelected)
            const days = getDays(startDay, endDay)


            //logic to change the month , day and , year

            return { ...state, monthSelected, yearSelected, days }

        default:
            return state
    }
}