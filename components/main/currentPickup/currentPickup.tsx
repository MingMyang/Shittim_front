/** @jsxImportSource @emotion/react */
import * as S from "./style"

import eventInfo from '@/asset/json/currentEvent.json';
import useCalcDate from '@/asset/hooks/useCalcDate';

function currentPickup() {

  const pickupDate: any = useCalcDate(eventInfo.current_gacha.start, eventInfo.current_gacha.end);

  const pickupstd = [];

  for (let i = 0; i < eventInfo.current_gacha.banner.length; i++) {
    pickupstd[i] = {
      id: i,
      pathCode: eventInfo.current_gacha.banner[i],
    }
  }

  return (
    <div css={S.Positioner}>
      <div css={S.BannerTitle}>픽업 배너</div>
      <div css={S.remainTime}>픽업 {pickupDate.remainingTime}</div>
      <div css={S.PickupList}>
        {pickupstd.map((result: any) => (
          <div css={S.ListItem} key={result.id}>
            <img css={S.ItemImg} alt='' src={'images/pickupbanner/Banner_' + result.pathCode + '.webp'} />
          </div>
        ))}
      </div>
    </div>
  )

}

export default currentPickup;