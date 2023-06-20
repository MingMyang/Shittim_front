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

    const EventBG = css`
        ${S.EventBG};
        background-image: url(${'/images/eventbg/Event_' + currentEventNo + '.webp'});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `

    return (
        <div css={S.Positioner}>
            <div css={S.BannerTitle}>메인 이벤트</div>
            <div css={EventBG}></div>
            <div css={S.EventName}>{currentEventName} (이벤트 {eventDate.remainingTime})</div>
        </div>
    )
}

export default currentEvent;