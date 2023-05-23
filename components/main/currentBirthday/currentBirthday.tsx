/** @jsxImportSource @emotion/react */
import * as S from "./style"

import stdList from '@/asset/json/studentInfo.json';

function currentBirthday() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let BirthStdInfo: any  = {
        name: '오늘은 생일인 학생이 없습니다.' , 
        pathPortrait: '', 
        pathBG: 'BG_View_Kivotos'
    }; 

    for (const student of stdList) {
        const [month, day] = student.BirthDay.split('/');
        if (parseInt(month) === currentMonth && parseInt(day) === currentDay) {
            BirthStdInfo = {name: (student.FamilyName + " " + student.PersonalName) , pathPortrait: student.DevName, pathBG: student.CollectionBG};
            break;
        }
    }

    return (
        <div css={S.Positioner}>
            <div css={S.BannerTitle}>생일인 학생</div>
            <div>
                <img css={S.RaidLogo} alt='' src={'images/student/portrait/Portrait_' + BirthStdInfo.pathPortrait + '.webp'} />
                <img css={S.RaidBG} alt='' src={'images/background/' + BirthStdInfo.pathBG + '.jpg'} />
            </div>
            <div css={S.EventName}>{BirthStdInfo.name}</div>
        </div>
    )
}

export default currentBirthday;