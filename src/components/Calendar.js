import React, { useState }  from 'react'  // useStateを追加
import format from 'date-fns/format'
import getDate from 'date-fns/getDate'
import getDay from 'date-fns/getDay'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import endOfWeek from 'date-fns/endOfWeek'
import eachWeekOfInterval from 'date-fns/eachWeekOfInterval'
import addMonths from 'date-fns/addMonths'  // 追加
import subMonths from 'date-fns/subMonths'  // 追加
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'

    const getCalendarArray = date => {
    const sundays = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date)
    })
    return sundays.map(sunday =>
    eachDayOfInterval({start: sunday, end: endOfWeek(sunday)})
    )
    }

function Calendar() {
    const [targetDate, setTargetDate] = useState(new Date())  // 変更
    const calendar = getCalendarArray(targetDate)

    return (
    <div className="calendar_content">
        {/* 追加ここから */}
        <div className="calendar_content">
        <button onClick={() => setTargetDate(current => subMonths(current, 1))}>前の月</button>
        <button onClick={() => setTargetDate(new Date())}>今月</button>
        <button onClick={() => setTargetDate(current => addMonths(current, 1))}>次の月</button>
        </div>
        {/* 追加ここまで */}

        {format(targetDate, 'y年M月')}
        <table className="calendar_days">
        <thead>
            <tr>
            <th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th>
            </tr>
        </thead>
        <tbody>
            {calendar.map((weekRow, rowNum) => (
            <tr key={rowNum}>
                {weekRow.map(date => (
                <td className="date" key={getDay(date)}>{getDate(date)}</td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    )
}

export default Calendar