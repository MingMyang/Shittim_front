/** @jsxImportSource @emotion/react */
import * as S from "./style"
import Link from "next/link";
import eventInfo from '@/asset/json/currentEvent.json';
import useCalcDate from '@/asset/hooks/useCalcDate';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function currentPickup() {

  const pickupDate: any = useCalcDate(eventInfo.current_gacha.start, eventInfo.current_gacha.end);

  const pickupstd = [];

  for (let i = 0; i < eventInfo.current_gacha.banner.length; i++) {
    pickupstd[i] = {
      id: i,
      pickUp: eventInfo.current_gacha.pickup[i],
      pathCode: eventInfo.current_gacha.banner[i],
    }
  }

  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000, 
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div css={S.Positioner}>
      <div css={S.BannerTitle}>픽업 배너</div>
      <div css={S.remainTime}>픽업 {pickupDate.remainingTime}</div>
      <div css={S.PickupList}>
        <Slider {...settings}>
          {pickupstd.map((result: any) => (
            <div css={S.ListItem} key={result.id}>
              <Link href={'/stdList/' + result.pickUp}>
                <img css={S.ItemImg} alt='' src={'images/pickupbanner/Banner_' + result.pathCode + '.webp'} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div >
  )

}

export default currentPickup;