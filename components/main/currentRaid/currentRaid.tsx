import eventInfo from '@/asset/json/currentEvent.json';
import useCalcDate from '@/asset/hooks/useCalcDate';

function currentRaid() {
    const event = JSON.parse(JSON.stringify(eventInfo));
    const currentRaidName = event.raids[event.current_raid.raid];
    const currentRaidTerrain = event.current_raid.terrain;
    const raidDate: any = useCalcDate(event.current_raid.start, event.current_raid.end);
    
    return(
        <div>
            <h3>진행중인 레이드: {currentRaidName}({currentRaidTerrain})</h3>
            <div>
                <p>{raidDate.duration}</p>
                <p>{raidDate.remainingTime}</p>
            </div>
        </div>
    )
}

export default currentRaid;