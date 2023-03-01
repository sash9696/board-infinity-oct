import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_MONTH } from '../../actions';
import { MONTHS } from '../../constants';
import './Calendar.css';

function Calendar() {

    const dateObject = useSelector((state) => state)

    const dispatch = useDispatch()

    // console.log(dateObject)

    const changeMonth = (arrow) => {

        let monthSelected;
        let yearSelected;

        if (arrow == 'LEFT') {

            if (dateObject.monthSelected === 0) {
                monthSelected = 11
                yearSelected = dateObject.yearSelected - 1
            } else {
                monthSelected = dateObject.monthSelected - 1
                yearSelected = dateObject.yearSelected

            }
        } else if (arrow == 'RIGHT') {
            if (dateObject.monthSelected == 11) {
                monthSelected = 0;
                yearSelected = dateObject.yearSelected + 1;
            } else {
                monthSelected = dateObject.monthSelected + 1
                yearSelected = dateObject.yearSelected
            }
        } else {
            monthSelected = dateObject.monthSelected + 1
            yearSelected = dateObject.yearSelected
        }

        dispatch({
            type: CHANGE_MONTH,
            payload: {
                monthSelected,
                yearSelected
            }
        })




    }


    return (
        <div className='calendar_container'>
            <div className='calendar_header_section'>
                <h2>Calendar</h2>
                <div className='display'>
                    <div className='month_header'>
                        <div
                            className='left_arrow'
                            onClick={() => changeMonth('LEFT')}

                        >{'<'}</div>
                        <div id='month'>{MONTHS[dateObject.monthSelected]}, {dateObject.yearSelected}</div>
                        <div className='right_arrow'
                            onClick={() => changeMonth('RIGHT')}
                        >{'>'}</div>
                    </div>
                    <div className='grid_days'>
                        <div>Sunday</div>
                        <div>Monday</div>
                        <div>Tuesday</div>
                        <div>Wednesday</div>
                        <div>Thursday</div>
                        <div>Friday</div>
                        <div>Saturday</div>
                    </div>

                    <div className='grid_days'>
                        {dateObject.days.map((day) => (
                            <div> {day} </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar