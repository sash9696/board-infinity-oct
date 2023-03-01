
export const yearSelected = new Date().getFullYear(); //2023

export const monthSelected = new Date().getMonth(); //2


//31 days

export const daysInMonth = function (month, year) {
    return new Date(year, month + 1, 0).getDate()
}


//returns day for your date


export const monthDays = function (date) {
    return new Date(date).getDay()
}

