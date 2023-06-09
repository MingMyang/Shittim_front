/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./style"
import stdList from '@/asset/json/studentInfo.json';

function currentBirthday() {
    let currentStudent: any = {
        name: '오늘은 생일인 학생이 없습니다.',
        pathPortrait: '',
        pathBG: 'BG_View_Kivotos'
    }
    
    for (const student of stdList) {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
        const [month, day] = student.BirthDay.split('/');
        if (parseInt(month) === currentMonth && parseInt(day) === currentDay) {
            currentStudent = { name: (student.FamilyName + " " + student.PersonalName), pathPortrait: student.DevName, pathBG: student.CollectionBG };
            break;
        }
    }

    const Positioner = css`
        ${S.Positioner};
        background-image:  url(${'/images/background/' + currentStudent?.pathBG + '.jpg'});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `
    return (
        <div css={Positioner}>
            <div css={S.BannerTitle}>생일인 학생</div>
            <img css={S.RaidLogo} alt='' src={'images/student/portrait/Portrait_' + currentStudent.pathPortrait + '.webp'} />
            <div css={S.EventName}>{currentStudent.name}</div>
        </div>
    )
}

export default currentBirthday;