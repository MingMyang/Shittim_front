/** @jsxImportSource @emotion/react */
import * as S from "./style"

import eventInfo from '@/asset/json/currentEvent.json';
import useCalcDate from '@/asset/hooks/useCalcDate';

function currentEvent() {
    const event = JSON.parse(JSON.stringify(eventInfo));
    const eventNo = eventInfo.current_events.event;
    const currentEventName = event.events[eventNo];
    const eventDate: any = useCalcDate(event.current_events.start, event.current_events.end);

    return (
        <div css={S.Positioner}>
            <div css={S.BannerTitle}>메인 이벤트</div>
            <div>
                <img css ={S.EventLogo} alt='' src={'images/eventlogo/Event_' + eventNo + '_Kr.png'} />
                <img css={S.EventBG} alt='' src={'images/campaign/Campaign_Event_' + eventNo + '_Normal.png'} />
            </div>
            <div css={S.EventName}>{currentEventName} (이벤트 {eventDate.remainingTime})</div>
        </div>
    )
}

export default currentEvent;