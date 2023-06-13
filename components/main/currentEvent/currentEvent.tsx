/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./style";
import eventInfo from '@/asset/json/currentEvent.json';
import useCalcDate from '@/asset/hooks/useCalcDate';

function currentEvent() {
    const event = JSON.parse(JSON.stringify(eventInfo));
    const currentEventNo = eventInfo.current_events.event;
    const currentEventName = event.events[currentEventNo];
    const eventDate: any = useCalcDate(event.current_events.start, event.current_events.end);

    const Positioner = css`
        ${S.Positioner};
        background-image:  url(${'images/campaign/Campaign_Event_' + currentEventNo + '_Normal.png'});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `

    return (
        <div css={Positioner}>
            <div css={S.BannerTitle}>메인 이벤트</div>
            <img css={S.EventLogo} alt='' src={'images/eventlogo/Event_' + currentEventNo + '_Kr.png'} />
            <div css={S.EventName}>{currentEventName} (이벤트 {eventDate.remainingTime})</div>
        </div>
    )
}

export default currentEvent;