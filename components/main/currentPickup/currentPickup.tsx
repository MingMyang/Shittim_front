import eventInfo from '@/asset/json/currentEvent.json';
import stdList from '@/asset/json/studentInfo.json';
import useCalcDate from '@/asset/hooks/useCalcDate';
import usePickupStd from '@/asset/hooks/usePickupStd';

function currentPickup() {
    const event = JSON.parse(JSON.stringify(eventInfo));
    const pickupDate: any = useCalcDate(event.current_gacha.start, event.current_gacha.end);

    const std = JSON.parse(JSON.stringify(stdList));
    const resultPickup: any = usePickupStd(std, event.current_gacha.characters);

    return (
        <div>
            <h3>픽업 일정</h3>
            <div>
                <p>{pickupDate.duration}</p>
                <p>{pickupDate.remainingTime}</p>
            </div>
            <div>
                {resultPickup.map((result: any) => (
                    <div key={result.id}>
                        <div><img alt='' src={'images/student/collection/' + result.src + '.webp'} /></div>
                        <div>{result.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default currentPickup;