/** @jsxImportSource @emotion/react */
import * as S from "./style"
import CurrentEvent from './currentEvent/currentEvent';
import CurrentPickup from './currentPickup/currentPickup';
import CurrentRaid from './currentRaid/currentRaid';
import CurrentTest from './currentTest/currentTest';
import CurrentCampain from "./currentCampain/currentCampain";
import CurrentBirthday from './currentBirthday/currentBirthday';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


function main() {
    return (
        <div css={S.Positioner}>
            <div css={S.EventArea}>
                <div css={S.GridTitle}>이벤트 차트 (Global)</div>
                <CurrentEvent />
                <CurrentPickup />
                <CurrentRaid />
                <CurrentTest />
                <CurrentCampain />
                <CurrentBirthday />
                <div css={S.TwitterTitle}>Twitter (KR)</div>
                <div css={S.TwittArea}>
                    <TwitterTimelineEmbed sourceType="profile" screenName="KR_BlueArchive" />
                </div>
            </div>
        </div>
    );
}

export default main;