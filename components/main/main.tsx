import eventInfo from '../../asset/json/currentEvent.json';
import stdList from '../../asset/json/studentInfo.json';
import useCalcDate from '../../asset/hooks/useCalcDate';
import usePickupStd from '../../asset/hooks/usePickupStd';

import CurrentEvent from './currentEvent/currentEvent';
import CurrentPickup from './currentPickup/currentPickup';
import CurrentRaid from './currentRaid/currentRaid';


function main() {
    //현재 진행중인 event 항목 추출
    const event = JSON.parse(JSON.stringify(eventInfo));
    const std = JSON.parse(JSON.stringify(stdList));

    const currentEventName = event.events[event.current_events.event];
    const currentRaidName = event.raids[event.current_raid.raid];
    const currentRaidTerrain = event.current_raid.terrain;

    const eventDate: any = useCalcDate(event.current_events.start, event.current_events.end);
    const pickupDate: any = useCalcDate(event.current_gacha.start, event.current_gacha.end);
    const raidDate: any = useCalcDate(event.current_raid.start, event.current_raid.end);

    const resultPickup: any = usePickupStd(std, event.current_gacha.characters);

    return (
        <div>
            <CurrentEvent />
            <CurrentPickup />
            <CurrentRaid />
        </div>
    );
}

export default main;