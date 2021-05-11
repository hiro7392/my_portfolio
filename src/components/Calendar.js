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
        console.log(new Date().getDay()),
    <div className="calendar_content">

        <div>
        <h1 className="calendar_title">{format(targetDate, 'y年M月')}</h1>
        </div>
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
                <td  className="day" key={getDay(date)}>{getDate(date)}</td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
        <button className="calendar_date btn before_month" onClick={() => setTargetDate(current => subMonths(current, 1))}>前の月</button>
        <button className="calendar_date btn this_month" onClick={() => setTargetDate(new Date())}>今月</button>
        
    </div>
    )
}

export default Calendar



// class Calendar extends Component {

//     constructor(props){
//         super(props);
//         this.state={

//         };
//     }

//     const [targetDate, setTargetDate] = useState(new Date())  // 変更
//     const calendar = getCalendarArray(targetDate)

//     return (
//         console.log(new Date().getDay()),
//     <div className="calendar_content">

//         <div>
//         <h1 className="calendar_title">{format(targetDate, 'y年M月')}</h1>
//         </div>
//         <table className="calendar_days">
//         <thead>
//             <tr>
//             <th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th>
//             </tr>
//         </thead>
//         <tbody>
//             {calendar.map((weekRow, rowNum) => (
//             <tr key={rowNum}>
//                 {weekRow.map(date => (
//                 <td onClick={()=>{this.increFireData(i)}} className="day" key={getDay(date)}>{getDate(date)}</td>
//                 ))}
//             </tr>
//             ))}
//         </tbody>
//         </table>
//         <button className="calendar_date btn before_month" onClick={() => setTargetDate(current => subMonths(current, 1))}>前の月</button>
//         <button className="calendar_date btn this_month" onClick={() => setTargetDate(new Date())}>今月</button>
        
//     </div>
//     )
// }

// export default Calendar