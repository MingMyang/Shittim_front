/** @jsxImportSource @emotion/react */
import * as S from "./style"
import { css } from '@emotion/react';
import { useState } from "react";
import localization from '@/asset/json/localization.json';

function stdDetail(props: any) {
    //props 데이터 불러오기
    const currentStudent = props.crrentData;

    //번역 기능
    function translate(types: any, word: any) {
        const translatedWord = localization[types][word];
        return translatedWord ? translatedWord : word;
    }

    //텍스트 컬러조정
    let TypeColor;
    if (currentStudent?.SquadType === "Main") {
        TypeColor = css`
            color: red;
        `
    }
    else {
        TypeColor = css`
            color: Blue;
        `
    }

    //텍스트 컬러조정
    let AtkColor;
    if (currentStudent?.BulletType === "Explosion") {
        AtkColor = css`
            color: red;
        `
    }
    else if (currentStudent?.BulletType === "Pierce") {
        AtkColor = css`
            color: Orange;
        `
    }
    else {
        AtkColor = css`
            color: Blue;
        `
    }

    let DefColor;
    if (currentStudent?.ArmorType === "LightArmor") {
        DefColor = css`
            color: red;
        `
    }
    else if (currentStudent?.ArmorType === "HeavyArmor") {
        DefColor = css`
            color: Orange;
        `
    }
    else if (currentStudent?.ArmorType === "Unarmed") {
        DefColor = css`
            color: Blue;
        `
    }
    else {
        DefColor = css`
            color: purple;
        `
    }

    //레벨 조정
    const [level, setLevel] = useState(1);
    const handleChange = (event: any) => {
        setLevel(event.target.value);
    };
    let levelscale: number = parseFloat(((level - 1) / 99).toFixed(4))

    //1~5성급별 성장치
    let transcendence: any = []
    if (transcendence.length == 0) {
        transcendence = [[0, 1000, 1200, 1400, 1700], [0, 500, 700, 900, 1400], [0, 750, 1000, 1200, 1500]]
    }

    let transcendenceAttack: number = 1
    let transcendenceHP: number = 1
    let transcendenceHeal: number = 1

    for (let i = 0; i < 5; i++) {
        transcendenceAttack += transcendence[0][i] / 10000
        transcendenceHP += transcendence[1][i] / 10000
        transcendenceHeal += transcendence[2][i] / 10000
    }

    //스테이터스 계산식(성급 + 레벨)
    let MaxHP: number = Math.ceil(parseFloat((Math.round((currentStudent?.MaxHP1 + (currentStudent?.MaxHP100 - currentStudent?.MaxHP1) * levelscale).toFixed(4)) * transcendenceHP).toFixed(4)))
    let AttackPower: number = Math.ceil(parseFloat((Math.round((currentStudent?.AttackPower1 + (currentStudent?.AttackPower100 - currentStudent?.AttackPower1) * levelscale).toFixed(4)) * transcendenceAttack).toFixed(4)))
    let DefensePower: number = Math.round((currentStudent?.DefensePower1 + (currentStudent?.DefensePower100 - currentStudent?.DefensePower1) * levelscale).toFixed(4))
    let HealPower: number = Math.ceil(parseFloat((Math.round((currentStudent?.HealPower1 + (currentStudent?.HealPower100 - currentStudent?.HealPower1) * levelscale).toFixed(4)) * transcendenceHeal).toFixed(4)))

    return (
        <div css={S.Positioner}>
            <div css={S.MainArea}>
                <div css={S.InfoArea}>
                    <div>
                        <div css={S.SummaryProfile}>
                            <img css={S.SchoolImg} alt='' src={'/images/schoolicon/School_Icon_' + currentStudent?.School + '_W.png'} />
                            <div css={S.Belong}>
                                <div css={S.BelongSchool}>{translate("SchoolLong", currentStudent?.School)} {currentStudent?.SchoolYear}</div>
                                <div css={S.BelongClub}>{translate("Club", currentStudent?.Club)}</div>
                            </div>
                        </div>
                        <div css={S.DetailInfo}>
                            <div css={TypeColor}>{translate("SquadType", currentStudent?.SquadType)}</div>
                            <h1>{currentStudent?.Name}</h1>
                            <br />
                            <h3>역할: {translate("TacticRole", currentStudent?.TacticRole)}</h3>
                            <h3>포지션: {currentStudent?.Position}</h3>
                            <h3>공격타입: <span css={AtkColor}>{translate("BulletType", currentStudent?.BulletType)}</span></h3>
                            <h3>방어타입: <span css={DefColor}>{translate("ArmorType", currentStudent?.ArmorType)}</span></h3>
                            <br />
                            <br />
                            <br />
                            <h2>스테이터스(5성 기준, 장비 제외)</h2>
                            <div css={S.AdjustStat}>
                                <input css={S.StatScale} type="range" min="1" max="85" value={level} onChange={handleChange} />
                                <span> Lv. {level}</span>
                            </div>
                            <br />
                            <h3>최대체력: {MaxHP} </h3>
                            <h3>공격력: {AttackPower}</h3>
                            <h3>방어력: {DefensePower}</h3>
                            <h3>치유력: {HealPower}</h3>
                            <h3>명중 수치: {currentStudent?.AccuracyPoint}</h3>
                            <h3>회피 수치: {currentStudent?.DodgePoint}</h3>
                            <h3>치명 수치: {currentStudent?.CriticalPoint}</h3>
                            <h3>치명 대미지: {currentStudent?.CriticalDamageRate / 100}%</h3>
                            <h3>안정 수치: {currentStudent?.StabilityPoint}</h3>
                            <h3>사거리: {currentStudent?.Range}</h3>
                            <h3>장탄 수: {currentStudent?.AmmoCount}</h3>
                            <h3>소모 탄약: 공격당 {currentStudent?.AmmoCost}발</h3>
                        </div>
                    </div>
                </div>
                <div css={S.StdentArea}>
                    <img css={S.StandingImg} alt='' src={'/images/student/portrait/Portrait_' + currentStudent?.DevName + '.webp'} />
                </div>
            </div>
        </div>
    );
}

export default stdDetail;