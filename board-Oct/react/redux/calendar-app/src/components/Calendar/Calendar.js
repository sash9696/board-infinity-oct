import React from 'react';
import './Calendar.css';

function Calendar() {
    return (
        <div className='calendar_container'>
            <div className='calendar_header_section'>
                <h2>Calendar</h2>
                <div className='display'>
                    <div className='month_header'>
                        <div className='left_arrow'>{'<'}</div>
                        <div id='month'>March, 2023</div>
                        <div className='right_arrow'>{'>'}</div>
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
                </div>
            </div>
        </div>
    )
}

export default Calendar