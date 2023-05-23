/** @jsxImportSource @emotion/react */
import * as S from "./style"

import eventInfo from '@/asset/json/currentEvent.json';
import contentList from '@/asset/json/contentInfo.json';
import useCalcDate from '@/asset/hooks/useCalcDate';

function currentRaid() {
    const raidNo = eventInfo.current_raid.raid
    const currentRaidTerrain = eventInfo.current_raid.terrain;
    const raidDate: any = useCalcDate(eventInfo.current_raid.start, eventInfo.current_raid.end);

    let raid;

    for (let i = 0; i < contentList.Raid.length; i++) {
        if (contentList.Raid[i].Id === raidNo) {
            raid = {
                name: contentList.Raid[i].Name,
                pathName: contentList.Raid[i].PathName,
            };
            break;
        }
    }

    return (
        <div css={S.Positioner}>
            <div css={S.BannerTitle}>총력전</div>
            <div>
                <img css={S.RaidLogo} alt='' src={'images/raid/Boss_Portrait_' + raid?.pathName + '_Lobby.png'} />
                <img css={S.RaidBG} alt='' src={'images/raid/Boss_Portrait_' + raid?.pathName + '_LobbyBG.png'} />
            </div>
            <div css={S.EventName}>{raid?.name} (시즌 {raidDate.remainingTime})</div>
        </div>
    )
}

export default currentRaid;