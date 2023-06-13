/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./style";
import eventInfo from '@/asset/json/currentEvent.json';
import contentList from '@/asset/json/contentInfo.json';
import useCalcDate from '@/asset/hooks/useCalcDate';

function currentRaid() {
    const raidNo = eventInfo.current_raid.raid;
    const raidDate: any = useCalcDate(eventInfo.current_raid.start, eventInfo.current_raid.end);
    let raid: any = {
        name: '지금은 총력전 진행 중이 아닙니다.',
        pathName: '',
    }
    for (let i = 0; i < contentList.Raid.length; i++) {
        if (contentList.Raid[i].Id === raidNo) {
            raid = {
                name: contentList.Raid[i].Name,
                pathName: contentList.Raid[i].PathName,
            };
            break;
        }
    }

    const Positioner = css`
        ${S.Positioner};
        background-image:  url(${'images/raid/Boss_Portrait_' + raid?.pathName + '_LobbyBG.png'});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `

    return (
        <div css={Positioner}>
            <div css={S.BannerTitle}>총력전</div>
            <img css={S.RaidLogo} alt='' src={'images/raid/Boss_Portrait_' + raid?.pathName + '_Lobby.png'} />
            <div css={S.EventName}>{raid?.name} (시즌 {raidDate.remainingTime})</div>
        </div>
    )
}

export default currentRaid;