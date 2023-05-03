import eventInfo from '@/asset/json/currentEvent.json';
import useCalcDate from '@/asset/hooks/useCalcDate';

function currentEvent() {
    const event = JSON.parse(JSON.stringify(eventInfo));
    const currentEventName = event.events[event.current_events.event];
    const eventDate: any = useCalcDate(event.current_events.start, event.current_events.end);
    return(
        <div>
            <h3>진행 중인 이벤트: {currentEventName}</h3>
            <div>
                <p>{eventDate.duration}</p>
                <p>{eventDate.remainingTime}</p>
            </div>
        </div>
    )
}

export default currentEvent;