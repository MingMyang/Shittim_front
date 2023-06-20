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
            <div css={S.AreaContainer}>
                <div css={S.EventArea}>
                    <CurrentEvent />
                    <CurrentPickup />
                    <CurrentRaid />
                    <CurrentCampain />
                    <CurrentBirthday />
                    <div css={S.TwittArea}>
                        <TwitterTimelineEmbed sourceType="profile" screenName="KR_BlueArchive" />
                    </div>
                    <div css={S.Copyright}>Copyright 2023. NEXON GAMES & YOSTAR all rights reserved</div>
                </div>
            </div>
        </div>
    );
}

export default main;