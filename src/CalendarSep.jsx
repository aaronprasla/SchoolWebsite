import { React } from 'react'
import './CalendarSep.css'

function Calendar() {
    return (
        <>

            <div className='dstyle'>
                <h1 style={{ marginLeft: '1rem', color: 'white' }}>School Events</h1>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FRegina&title=Upcoming%20Events&hl=en&showTz=1&showCalendars=1&showTabs=0&showPrint=0&src=bjc4N2Jya2o5bWZqaTNpYWNzaDAwdDdtYzBqMG5yaTdAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F09300" height={600} style={{ position: 'relative', marginTop: '0.2rem', width: '100%' }} frameBorder="0" scrolling="no"></iframe>
            </div>
        </>
    );
}

export default Calendar