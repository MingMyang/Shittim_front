/** @jsxImportSource @emotion/react */
import * as S from "./style"
import { css } from '@emotion/react';
import { useState } from "react";
import localization from '@/asset/json/localization.json';

function stdDetail(props: any) {
    //props 데이터 불러오기
    const currentStudent = props.crrentData;
    const localizationData: any = localization;

    //번역 기능
    function translate(types: any, word: any) {
        let translatedWord = localizationData[types][word];
        return translatedWord ? translatedWord : word;
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

    //팀업타입 컬러조정
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

    //공방타입 컬러조정
    let TypeAtk;
    if (currentStudent?.BulletType === "Explosion") {
        TypeAtk = css`
            ${S.TypeBox};
            background-color: #851914;
        `
    }
    else if (currentStudent?.BulletType === "Pierce") {
        TypeAtk = css`
            ${S.TypeBox};
            background-color: #B68A2E;
        `
    }
    else {
        TypeAtk = css`
            ${S.TypeBox};
            background-color: #396D99;
        `
    }

    let TypeDef;
    if (currentStudent?.ArmorType === "LightArmor") {
        TypeDef = css`
            ${S.TypeBox};
            background-color: #851914;
        `
    }
    else if (currentStudent?.ArmorType === "HeavyArmor") {
        TypeDef = css`
            ${S.TypeBox};
            background-color: #B68A2E;
        `
    }
    else if (currentStudent?.ArmorType === "Unarmed") {
        TypeDef = css`
            ${S.TypeBox};
            background-color: #396D99;
        `
    }
    else {
        TypeDef = css`
            ${S.TypeBox};
            background-color: #9A45A8;
        `
    }

    //PathName 정의
    const PathSchool = currentStudent?.School.toUpperCase();

    return (
        <div css={S.Positioner}>
            <div css={S.MainArea}>
                <div css={S.InfoArea}>
                    <div css={S.SummaryProfile}>
                        <div css={S.Belong}>
                            <img css={S.SchoolImg} alt='' src={'/images/schoolicon/School_Icon_' + PathSchool + '_W.png'} />
                            <div css={S.BelongInfo}>
                                <div css={S.BelongSchool}>{translate("SchoolLong", currentStudent?.School)} {currentStudent?.SchoolYear}</div>
                                <div css={S.BelongClub}>{translate("Club", currentStudent?.Club)}</div>
                            </div>
                        </div>
                        <div css={S.TypeContainer}>
                            <div css={S.NameInfo}>
                                <div css={TypeColor}>{translate("SquadType", currentStudent?.SquadType)}</div>
                                <h1>{currentStudent?.Name}</h1>
                            </div>
                            <div css={S.TypeInfo}>
                                <div css={S.TypeBox}><div><img css={S.TacticRoleImg}alt='' src={'/images/ui/Role_' + currentStudent?.TacticRole + '.png'} /></div> {translate("TacticRole", currentStudent?.TacticRole)}</div>
                                <div css={TypeAtk}><div css={S.TypeImgContainer}><img alt='' src='/images/ui/Type_Attack_s.png' /></div> <div css={S.TypeTextContainer}>{translate("BulletType", currentStudent?.BulletType)}</div></div>
                                <div css={S.TypeBox}>{currentStudent?.Position}</div>
                                <div css={TypeDef}><div css={S.TypeImgContainer}><img alt='' src='/images/ui/Type_Defense_s.png' /></div> <div css={S.TypeTextContainer}>{translate("ArmorType", currentStudent?.ArmorType)}</div></div>
                            </div>
                        </div>
                    </div>

                    <div css={S.DetailInfo}>
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
                <div css={S.StdentArea}>
                    <img css={S.StandingImg} alt='' src={'/images/student/portrait/Portrait_' + currentStudent?.DevName + '.webp'} />
                </div>
            </div>
        </div>
    );
}

export default stdDetail;