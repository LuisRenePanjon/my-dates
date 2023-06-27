import {Calendar} from 'react-big-calendar'
import {addHours} from "date-fns";
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {CalendarLayout} from "../components/CalendarLayout.jsx";
import {getMessagesES, localizer} from "../../utils/index.js";



const events = [{
    title: "All Day Event",
    start: new Date(),
    end: addHours(new Date(), 1),
    bgColor: "#f00",
}]

export const CalendarPage = () => {
    return (

        <CalendarLayout>
            <div className={"pt-20"}>
                <Calendar
                    culture={"es"}
                    localizer={localizer}
                    events={events}
                    messages={getMessagesES()}
                    startAccessor="start"
                    endAccessor="end"
                    style={{height: "calc(100vh - 5rem)"}}
                    eventPropGetter={(event) => {
                        return {
                            style: {
                                backgroundColor: event.bgColor,
                            },
                        }
                    }}
                />
            </div>
        </CalendarLayout>
    )
}

