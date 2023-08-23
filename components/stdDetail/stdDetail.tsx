/** @jsxImportSource @emotion/react */
import * as S from "./style"
import { css } from '@emotion/react';
import { useState, useEffect } from "react";
import localization from '@/asset/json/localization.json';
import equipment from '@/asset/json/equipment.json';
import ReactHtmlParser from 'react-html-parser';

function stdDetail(props: any) {
    //props 데이터 불러오기
    const currentStudent = props.currentData;
    const localizationData: any = localization;

    //PathName 정의
    const PathSchool = currentStudent?.School.toUpperCase();

    //번역 기능
    function translate(types: any, word: any) {
        let translatedWord = localizationData[types][word];
        return translatedWord ? translatedWord : word;
    }

    //장비
    const [equipmentChecked, setEquipmentChecked] = useState(false);
    const handleEquipmentCheckChange = () => {
        setEquipmentChecked(!equipmentChecked);
    };
    const [tier, setTier] = useState(1);
    const increaseTier = () => {
        if (tier < 8) { // 최대값을 10으로 지정
            setTier(tier + 1);
        }
    };
    const decreaseTier = () => {
        if (tier > 1) { // 최소값을 0으로 지정
            setTier(tier - 1);
        }
    };
    const currentEquipment = equipment.filter(equipment => {
        for (let i = 0; i < 3; i++) {
            if (equipment.Id >= 1000 && equipment.Id <= 9999 && equipment.Category == currentStudent?.Equipment[i] && equipment.Tier === tier) {
                return equipment.Category.includes(currentStudent?.Equipment[i]);
            }
        }
    });
    const [coefficientHP_Equip, setCoefficientHP_Equip] = useState(0);
    const [coefficientAtk_Equip, setCoefficientAtk_Equip] = useState(0);
    const [coefficientDef_Equip, setCoefficientDef_Equip] = useState(0);
    const [baseHP_Equip, setBaseHP_Equip] = useState(0);
    const [baseAtk_Equip, setBaseAtk_Equip] = useState(0);
    const [baseDef_Equip, setBaseDef_Equip] = useState(0);
    const [critical_Equip, setCritical_Equip] = useState(0);
    const [criticalDamage_Equip, setCriticalDamage_Equip] = useState(0);
    const [criticalResist_Equip, setCriticalResist_Equip] = useState(0);
    const [criticalDamegeResist_Equip, setCriticalDamageResist_Equip] = useState(0);
    const [accuracy_Equip, setAccuracy_Equip] = useState(0);
    const [dodge_Equip, setDodge_Equip] = useState(0);
    const [coefficientHeal_Equip, setCoefficientHeal_Equip] = useState(0);
    const [healEffectiveness_Equip, setHealEffectiveness_Equip] = useState(0);
    const [coefficientOppression_Equip, setCoefficientOppression_Equip] = useState(0);
    const [coefficientOppressionResist_Equip, setCoefficientOppressionResist_Equip] = useState(0);
    useEffect(() => {
        setCoefficientHP_Equip(0);
        setCoefficientAtk_Equip(0);
        setCoefficientDef_Equip(0);
        setBaseHP_Equip(0);
        setBaseAtk_Equip(0);
        setBaseDef_Equip(0);
        setCritical_Equip(0);
        setCriticalDamage_Equip(0);
        setCriticalResist_Equip(0);
        setCriticalDamageResist_Equip(0);
        setAccuracy_Equip(0);
        setDodge_Equip(0);
        setCoefficientHeal_Equip(0);
        setHealEffectiveness_Equip(0);
        setCoefficientOppression_Equip(0);
        setCoefficientOppressionResist_Equip(0);
        for (let i = 0; i < currentEquipment.length; i++) {
            for (let j = 0; j < currentEquipment[i].StatType.length; j++) {
                let type = currentEquipment[i].StatType[j];
                let value = currentEquipment[i].StatValue[j][1];
                if (equipmentChecked === true) {
                    if (type === "MaxHP_Coefficient") {
                        setCoefficientHP_Equip((prev) => prev + value);
                    } else if (type === "AttackPower_Coefficient") {
                        setCoefficientAtk_Equip((prev) => prev + value);
                    } else if (type === "DefensePower_Coefficient") {
                        setCoefficientDef_Equip((prev) => prev + value);
                    } else if (type === "MaxHP_Base") {
                        setBaseHP_Equip((prev) => prev + value);
                    } else if (type === "AttackPower_Base") {
                        setBaseAtk_Equip((prev) => prev + value);
                    } else if (type === "DefensePower_Base") {
                        setBaseDef_Equip((prev) => prev + value);
                    } else if (type === "CriticalPoint_Base") {
                        setCritical_Equip((prev) => prev + value);
                    } else if (type === "CriticalDamageRate_Base") {
                        setCriticalDamage_Equip((prev) => prev + value);
                    } else if (type === "CriticalChanceResistPoint_Base") {
                        setCriticalResist_Equip((prev) => prev + value);
                    } else if (type === "CriticalDamageResistRate_Base") {
                        setCriticalDamageResist_Equip((prev) => prev + value);
                    } else if (type === "AccuracyPoint_Base") {
                        setAccuracy_Equip((prev) => prev + value);
                    } else if (type === "DodgePoint_Base") {
                        setDodge_Equip((prev) => prev + value);
                    } else if (type === "HealPower_Coefficient") {
                        setCoefficientHeal_Equip((prev) => prev + value);
                    } else if (type === "HealEffectivenessRate_Base") {
                        setHealEffectiveness_Equip((prev) => prev + value);
                    } else if (type === "OppressionPower_Coefficient") {
                        setCoefficientOppression_Equip((prev) => prev + value);
                    } else if (type === "OppressionResist_Coefficient") {
                        setCoefficientOppressionResist_Equip((prev) => prev + value);
                    }
                }
            }
        }
    }, [tier, equipmentChecked]);

    //고유무기
    const [weaponChecked, setWeaponChecked] = useState(false);
    const handleWeaponCheckChange = () => {
        setWeaponChecked(!weaponChecked);
    };
    const [weaponLevel, setWeaponLevel] = useState(50);
    let weaponLevelscale: number = parseFloat(((weaponLevel - 1) / 99).toFixed(4));
    const [weaponHP, setWeaponHP] = useState(0);
    const [weaponAtk, setWeaponAtk] = useState(0);
    const [weaponHeal, setWeaponHeal] = useState(0);
    useEffect(() => {
        setWeaponHP(0);
        setWeaponAtk(0);
        setWeaponHeal(0);
        if (weaponChecked === true) {
            setWeaponHP(Math.round(currentStudent?.Weapon.MaxHP1 + (currentStudent?.Weapon.MaxHP100 - currentStudent?.Weapon.MaxHP1) * weaponLevelscale));
            setWeaponAtk(Math.round(currentStudent?.Weapon.AttackPower1 + (currentStudent?.Weapon.AttackPower100 - currentStudent?.Weapon.AttackPower1) * weaponLevelscale));
            setWeaponHeal(Math.round(currentStudent?.Weapon.HealPower1 + (currentStudent?.Weapon.HealPower100 - currentStudent?.Weapon.HealPower1) * weaponLevelscale));
        }
    }, [weaponChecked]);

    //애장품(적용 X)
    const GearInfo = (gear: any) => {
        const { Gear } = gear;
        if (Gear === undefined) {
            return <img alt='' src={'/images/gear/Gear_Icon_Empty.png'} />
        }
        else {
            if (Object.keys(Gear.gear)?.length > 0) {
                return <img alt='' src={'/images/gear/Gear_Icon_Empty.png'} />;
            }
            else {
                return <img alt='' src={'/images/gear/' + gear?.gear?.Icon + '.png'} />;
            }
        }
    }

    //레벨 조정
    const [level, setLevel] = useState(1);
    const levelChange = (event: any) => {
        setLevel(event.target.value);
    };
    let levelscale: number = parseFloat(((level - 1) / 99).toFixed(4));

    //성급 조정
    const [selectedStars, setSelectedStars] = useState([1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]);
    const [clickedStarIndex, setClickedStarIndex] = useState(1);
    let stdStar = 0;
    let weaponStar = 0;
    if (clickedStarIndex > 5) {
        stdStar = 5;
        weaponStar = clickedStarIndex - 5;
    } else {
        stdStar = clickedStarIndex;
        weaponStar = 0;
    }
    const handleUpStarClick = (index: any) => {
        const updatedOpacities = selectedStars.map((opacity, i) => (i <= index ? 1 : opacity));
        setSelectedStars(updatedOpacities);
        setClickedStarIndex(index + 1);
    };
    const handleDownStarClick = (index: any) => {
        const updatedOpacities = selectedStars.map((opacity, i) => (i > index ? 0.5 : opacity));
        setSelectedStars(updatedOpacities);
        setClickedStarIndex(index + 1);
    };

    //성급별 성장계수
    let transcendence: any = [];
    let transcendenceAttack: number = 1;
    let transcendenceHP: number = 1;
    let transcendenceHeal: number = 1;
    if (transcendence.length == 0) {
        transcendence = [[0, 1000, 1200, 1400, 1700], [0, 500, 700, 900, 1400], [0, 750, 1000, 1200, 1500]];
    }
    for (let i = 0; i < stdStar; i++) {
        transcendenceAttack += transcendence[0][i] / 10000;
        transcendenceHP += transcendence[1][i] / 10000;
        transcendenceHeal += transcendence[2][i] / 10000;
    }
    //학생 레벨 스테이터스 계산식(+ 성급)
    let MaxHP: number = Math.ceil(parseFloat((Math.round((currentStudent?.MaxHP1 + (currentStudent?.MaxHP100 - currentStudent?.MaxHP1) * levelscale).toFixed(4)) * transcendenceHP).toFixed(4)));
    let AttackPower: number = Math.ceil(parseFloat((Math.round((currentStudent?.AttackPower1 + (currentStudent?.AttackPower100 - currentStudent?.AttackPower1) * levelscale).toFixed(4)) * transcendenceAttack).toFixed(4)));
    let DefensePower: number = Math.round((currentStudent?.DefensePower1 + (currentStudent?.DefensePower100 - currentStudent?.DefensePower1) * levelscale).toFixed(4));
    let HealPower: number = Math.ceil(parseFloat((Math.round((currentStudent?.HealPower1 + (currentStudent?.HealPower100 - currentStudent?.HealPower1) * levelscale).toFixed(4)) * transcendenceHeal).toFixed(4)));

    //최종 스테이터스 계산식(1차 스텟 + etc)
    let totalHP: number = Math.round((MaxHP + baseHP_Equip + weaponHP) * (1 + (coefficientHP_Equip / 10000)));
    let totalAtk: number = Math.round((AttackPower + baseAtk_Equip + weaponAtk) * (1 + (coefficientAtk_Equip / 10000)));
    let totalDef: number = Math.round((DefensePower + baseDef_Equip) * (1 + (coefficientDef_Equip / 10000)));
    let totalHeal: number = Math.round((HealPower + weaponHeal) * (1 + (coefficientHeal_Equip / 10000)));
    let totalAccuracy: number = Math.round((currentStudent?.AccuracyPoint + accuracy_Equip) * (1 + 0));
    let totalDodge: number = Math.round((currentStudent?.DodgePoint + dodge_Equip) * (1 + 0));
    let totalCritical: number = Math.round((currentStudent?.CriticalPoint + critical_Equip) * (1 + 0));
    let totalCriticalDamage: number = Math.round((currentStudent?.CriticalDamageRate + criticalDamage_Equip) * (1 + 0));
    let totalStability: number = Math.round((currentStudent?.StabilityPoint) * (1 + 0));

    //팀업타입 컬러조정
    let TypeColor;
    if (currentStudent?.SquadType === "Main") {
        TypeColor = css`
            ${S.BelongType}
            background-color: red;
        `
    }
    else {
        TypeColor = css`
            ${S.BelongType}
            background-color: Blue;
        `
    }
    //공방타입 컬러조정(스킬 아이콘 포함)
    let TypeAtk: any;
    let SkillIcon: any;
    if (currentStudent?.BulletType === "Explosion") {
        TypeAtk = css`
            ${S.TypeBox};
            background-color: #851914;
        `
        SkillIcon = css`
            ${S.SkillIcon};
            background-color: #851914;
        `
    }
    else if (currentStudent?.BulletType === "Pierce") {
        TypeAtk = css`
            ${S.TypeBox};
            background-color: #B68A2E;
        `
        SkillIcon = css`
            ${S.SkillIcon};
            background-color: #B68A2E;
        `
    }
    else if (currentStudent?.BulletType === "Mystic") {
        TypeAtk = css`
            ${S.TypeBox};
            background-color: #396D99;
        `
        SkillIcon = css`
            ${S.SkillIcon};
            background-color: #396D99;
        `
    }
    else {
        TypeAtk = css`
            ${S.TypeBox};
            background-color: #9A45A8;
        `
        SkillIcon = css`
            ${S.SkillIcon};
            background-color: #9A45A8;
        `
    }
    let TypeDef: any;
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

    //지형상성 반영
    const terrianCalc = (adaptation: number) => {
        if (adaptation === 0) {
            return 'D';
        }
        else if (adaptation === 1) {
            return 'C';
        }
        else if (adaptation === 2) {
            return 'B';
        }
        else if (adaptation === 3) {
            return 'A';
        }
        else if (adaptation === 4) {
            return 'S';
        }
        else if (adaptation === 5) {
            return 'S';
        }
        else if (adaptation === 6) {
            return 'SS';
        }

    }
    const Street = terrianCalc(currentStudent?.StreetBattleAdaptation);
    const Outdoor = terrianCalc(currentStudent?.OutdoorBattleAdaptation);
    const Indoor = terrianCalc(currentStudent?.IndoorBattleAdaptation);


    //탭 변경사항 감지
    const [selectedTap, setSelectedTap] = useState('summary');
    const handleTapClick = (tap: any) => {
        setSelectedTap(tap);
    };

    //스킬레벨 조정
    const [exLevel, setExLevel] = useState(0);
    const exLevelChange = (event: any) => {
        setExLevel(event.target.value);
    };
    let currentSkills: any[] = [];
    if (currentStudent?.Skills[0].SkillType === 'autoattack' && currentStudent?.Skills[3].SkillType === 'gearnormal') {
        currentSkills[0] = currentStudent?.Skills[1]; /* EX */
        currentSkills[1] = currentStudent?.Skills[2]; /* 노말 */
        currentSkills[2] = currentStudent?.Skills[4]; /* 강화 */
        currentSkills[3] = currentStudent?.Skills[6]; /* 서브 */
        currentSkills[4] = currentStudent?.Skills[3]; /* 노말+ */
        currentSkills[5] = currentStudent?.Skills[5]; /* 강화+ */
    } else if (currentStudent?.Skills[0].SkillType === 'autoattack') {
        currentSkills[0] = currentStudent?.Skills[1]; /* EX */
        currentSkills[1] = currentStudent?.Skills[2]; /* 노말 */
        currentSkills[2] = currentStudent?.Skills[3]; /* 강화 */
        currentSkills[3] = currentStudent?.Skills[5]; /* 서브 */
        currentSkills[4] = currentStudent?.Skills[4]; /* 강화+ */
    } else if (currentStudent?.Skills[2].SkillType === 'gearnormal') {
        currentSkills[0] = currentStudent?.Skills[0]; /* EX */
        currentSkills[1] = currentStudent?.Skills[1]; /* 노말 */
        currentSkills[2] = currentStudent?.Skills[3]; /* 강화 */
        currentSkills[3] = currentStudent?.Skills[4]; /* 서브 */
        currentSkills[4] = currentStudent?.Skills[2]; /* 노말+ */
    } else {
        currentSkills[0] = currentStudent?.Skills[0]; /* EX */
        currentSkills[1] = currentStudent?.Skills[1]; /* 노말 */
        currentSkills[2] = currentStudent?.Skills[2]; /* 강화 */
        currentSkills[3] = currentStudent?.Skills[4]; /* 서브 */
        currentSkills[4] = currentStudent?.Skills[3]; /* 강화+ */
    }

    for (let i = 0; i < currentSkills.length; i++) {
        for (let j = 0; j < currentSkills[i]?.Parameters.length; j++) {
            let k = j + 1;
            currentSkills[i].Desc = currentSkills[i].Desc.replace('<?' + k + '>', currentSkills[i].Parameters[j][exLevel]);
        }

    }
    const renderContent = () => {
        switch (selectedTap) {
            case 'summary':
                return (
                    <div css={S.DetailInfo}>
                        {/*첫번째 줄(타입, 지형상성, 부가적 요소 적용 여부)*/}
                        <div css={S.FirstLine}>
                            <div css={S.TypeInfo}>
                                <div css={S.TypeBox}><img css={S.TacticRoleImg} alt='' src={'/images/ui/Role_' + currentStudent?.TacticRole + '.png'} /> <p css={S.TacticText}>{translate("TacticRole", currentStudent?.TacticRole)}</p></div>
                                <div css={TypeAtk}><div css={S.TypeImgContainer}><img alt='' src='/images/ui/Type_Attack_s.png' /></div> <p css={S.TypeText}>{translate("BulletType", currentStudent?.BulletType)}</p></div>
                                <div css={S.TypeBox}><p css={S.TacticText}>{currentStudent?.Position}</p></div>
                                <div css={TypeDef}><div css={S.TypeImgContainer}><img alt='' src='/images/ui/Type_Defense_s.png' /></div> <p css={S.TypeText}>{translate("ArmorType", currentStudent?.ArmorType)}</p></div>
                            </div>
                            <div css={S.TerrianInfoContainer}>
                                <div css={S.TerrianInfo}><div css={S.TerrianImgContainer}><img alt='' src={'/images/ui/Terrain_Street.png'} /></div><div css={S.TerrianEmoContainer}><img alt='' src={'/images/ui/Ingame_Emo_Adaptresult' + String(Street) + '.png'} /></div></div>
                                <div css={S.TerrianInfo}><div css={S.TerrianImgContainer}><img alt='' src={'/images/ui/Terrain_Outdoor.png'} /></div><div css={S.TerrianEmoContainer}><img alt='' src={'/images/ui/Ingame_Emo_Adaptresult' + String(Outdoor) + '.png'} /></div></div>
                                <div css={S.TerrianInfo}><div css={S.TerrianImgContainer}><img alt='' src={'/images/ui/Terrain_Indoor.png'} /></div><div css={S.TerrianEmoContainer}><img alt='' src={'/images/ui/Ingame_Emo_Adaptresult' + String(Indoor) + '.png'} /></div></div>
                            </div>
                            <div css={S.EquipmentApplyContainer}>
                                <div css={S.CheckBoxContainer}><input type="checkbox" checked={equipmentChecked} onChange={handleEquipmentCheckChange} /><p>장비 적용</p></div>
                                <div css={S.CheckBoxContainer}><input type="checkbox" checked={weaponChecked} onChange={handleWeaponCheckChange} /><p>고유무기 적용</p></div>
                                <div css={S.CheckBoxContainer}><input type="checkbox" checked={false} /><p>애장품 적용</p></div>
                                <div css={S.CheckBoxContainer}><input type="checkbox" checked={false} /><p>강화스킬 적용</p></div>
                            </div>
                        </div>

                        {/*두번째 줄(전용장비/착용장비/애장품, 티어조정)*/}
                        <div css={S.SecondLine}>
                            <div css={S.EquipmentList}>
                                <div css={S.WeaponContainer}>
                                    <div style={{ opacity: weaponChecked ? 1 : 0.5, pointerEvents: weaponChecked ? 'auto' : 'none' }}>AR [ Lv. {weaponLevel} ]</div>
                                    <img style={{ opacity: weaponChecked ? 1 : 0.5, pointerEvents: weaponChecked ? 'auto' : 'none' }} alt='' src={'/images/weapon/' + currentStudent?.WeaponImg + '.png'} />
                                </div>
                                <div css={S.BaseEquipmentContainer}>
                                    <div css={S.TierBtnContainer} style={{ opacity: equipmentChecked ? 1 : 0.5, pointerEvents: equipmentChecked ? 'auto' : 'none' }}>
                                        <button onClick={increaseTier}>▲</button>
                                        <div>{tier}</div>
                                        <button onClick={decreaseTier}>▼</button>
                                    </div>
                                    <div css={S.BaseEquipment} style={{ opacity: equipmentChecked ? 1 : 0.5, pointerEvents: equipmentChecked ? 'auto' : 'none' }}>
                                        {currentEquipment.map((result: any) => (
                                            <div key={result.id} >
                                                <img alt='' src={'/images/equipment/' + result.Icon + '.png'} />
                                            </div>
                                        ))}
                                    </div>
                                    <div css={S.CherishedItem}>
                                        <GearInfo gear={currentStudent?.Gear} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*세번째 줄(총 스테이터스, 레벨조정)*/}
                        <div css={S.ThirdLine}>
                            <div css={S.StarScaleContainer}>
                                {selectedStars.map((opacity, index) => (
                                    <img src={index >= 5 ? '/images/ui/Common_Icon_Formation_Star_2.png' : '/images/ui/Common_Icon_Formation_Star.png'}
                                        key={index}
                                        style={{ opacity: opacity, cursor: 'pointer' }}
                                        onClick={() => {
                                            if (opacity === 0.5) {
                                                handleUpStarClick(index)
                                            } else {
                                                handleDownStarClick(index)
                                            }
                                        }}
                                    />
                                ))}
                            </div>
                            <div css={S.LevelScaleContainer}>
                                <input type="range" min="1" max="85" value={level} onChange={levelChange} />
                                <p> Lv. {level}</p>
                            </div>
                            <div css={S.StatContainer}>
                                <p>최대체력: {totalHP} </p>
                                <p>공격력: {totalAtk} </p>
                                <p>방어력: {totalDef} ({(100 - ((1 / ((totalDef + 1666) / 1666)) * 100)).toFixed(2)}%의 피해 감소)</p>
                                <p>치유력: {totalHeal}</p>
                                <br />
                                <p>명중 수치: {totalAccuracy}</p>
                                <p>회피 수치: {totalDodge}</p>
                                <p>회심치: {totalCritical} | {((totalCritical / (totalCritical + 666.666)) * 100).toFixed(2)}%</p>
                                <p>회심피해: {totalCriticalDamage / 100}%</p>
                                <br />
                                <p>안정치: {totalStability} (최소 {(((totalStability / (totalStability + 1000)) + 0.2) * 100).toFixed(2)}%의 피해)</p>
                                <p>사거리: {currentStudent?.Range}</p>
                                <p>CC 강화력: 100</p>
                                <p>CC 저항력: 100</p>
                                <br />
                                <p>받는 회복효과 강화율: 100%</p>
                                <p>코스트 회복력: {currentStudent?.RegenCost}</p>
                                <p>장탄 수: {currentStudent?.AmmoCount}</p>
                                <p>소모 탄약: 공격당 {currentStudent?.AmmoCost}발</p>
                            </div>
                        </div>
                    </div>
                );
            case 'skills':
                return (
                    <div css={S.DetailInfo}>
                        <div css={S.SkillContainer}>
                            <div css={SkillIcon}><img alt='' src={'/images/skill/' + currentSkills[0].Icon + '.png'} /></div>
                            <div>
                                <h3>EX 스킬 | {ReactHtmlParser(currentSkills[0].Name)}</h3>
                                <p>{currentSkills[0]?.Desc}</p>
                            </div>
                        </div>
                        <div css={S.SkillContainer}>
                            <div css={SkillIcon}><img alt='' src={'/images/skill/' + currentSkills[1].Icon + '.png'} /></div>
                            <div>
                                <h3>노말 스킬 | {ReactHtmlParser(currentSkills[1].Name)}</h3>
                                <p>{currentSkills[1]?.Desc}</p>
                            </div>
                        </div>
                        <div css={S.SkillContainer}>
                            <div css={SkillIcon}><img alt='' src={'/images/skill/' + currentSkills[2].Icon + '.png'} /></div>
                            <div>
                                <h3>강화 스킬 | {ReactHtmlParser(currentSkills[2].Name)}</h3>
                                <p>{currentSkills[2]?.Desc}</p>
                            </div>
                        </div>
                        <div css={S.SkillContainer}>
                            <div css={SkillIcon}><img alt='' src={'/images/skill/' + currentSkills[3].Icon + '.png'} /></div>
                            <div>
                                <h3>서브 스킬 | {ReactHtmlParser(currentSkills[3].Name)}</h3>
                                <p>{currentSkills[3]?.Desc}</p>
                            </div>
                        </div>
                    </div>
                );
            case 'items':
                return <div css={S.DetailInfo}>Comming Soon!</div>;
            case 'profile':
                return (
                    <div css={S.DetailInfo}>
                        <div css={S.HeadProfileContainer}>
                            <img src={'/images/student/icon/' + currentStudent.CollectionTexture + '.png'} />
                            <div css={S.CommonInfo}>
                                <div css={S.InfoText}>
                                    <div>{translate("SchoolLong", currentStudent?.School)} {currentStudent.SchoolYear}</div>
                                    <div>{translate("Club", currentStudent?.Club)}</div>
                                </div>
                                <div css={S.InfoName}>{currentStudent.FamilyName} {currentStudent.PersonalName}</div>
                                <div css={S.GetNewCharacterText}>" {currentStudent.CharacterSSRNew} "</div>
                            </div>
                        </div>
                        <div>{ReactHtmlParser(currentStudent.ProfileIntroduction)}</div>
                        <div css={S.SubContainer}>
                            <div css={S.SubInfo}>
                                <div>나이 &nbsp; &nbsp;{currentStudent.CharacterAge}</div>
                                <div css={S.WhiteLine} />
                                <div>생일 &nbsp; &nbsp;{currentStudent.Birthday}</div>
                                <div css={S.WhiteLine} />
                                <div>신장 &nbsp; &nbsp;{currentStudent.CharHeightMetric}</div>
                                <div css={S.WhiteLine} />
                                <div>취미 &nbsp; &nbsp;{currentStudent.Hobby}</div>
                                <div css={S.WhiteLine} />
                                <div>원화 &nbsp; &nbsp;{currentStudent.Designer}</div>
                                <div css={S.WhiteLine} />
                                <div>그림 &nbsp; &nbsp;{currentStudent.Illustrator}</div>
                                <div css={S.WhiteLine} />
                                <div>CV. &nbsp; &nbsp;{currentStudent.CharacterVoice}</div>
                            </div>
                            <div css={S.FavorItemContainer}>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div css={S.Positioner}>
            <div css={S.MainArea}>
                <div css={S.InfoArea}>
                    <div css={S.SummaryProfile}>
                        <div css={S.Belong}>
                            <img css={S.SchoolImg} alt='' src={'/images/schoolicon/School_Icon_' + PathSchool + '_W.png'} />
                            <div css={S.BelongInfo}>
                                <div css={S.BelongName}>{currentStudent?.Name}</div>
                                <div css={TypeColor}><p>{translate("SquadType", currentStudent?.SquadType)}</p></div>
                            </div>
                        </div>
                    </div>
                    <div css={S.ChangeTapContainer}>
                        <button onClick={() => handleTapClick('summary')} style={{ backgroundColor: selectedTap === 'summary' ? 'var(--nav-select-color)' : '' }}>요약정보</button>
                        <button onClick={() => handleTapClick('skills')} style={{ backgroundColor: selectedTap === 'skills' ? 'var(--nav-select-color)' : '' }}>스킬</button>
                        <button onClick={() => handleTapClick('items')} style={{ backgroundColor: selectedTap === 'items' ? 'var(--nav-select-color)' : '' }}>고유무기</button>
                        <button onClick={() => handleTapClick('profile')} style={{ backgroundColor: selectedTap === 'profile' ? 'var(--nav-select-color)' : '' }}>프로필</button>
                    </div>
                    {renderContent()}
                </div>
                <div css={S.StdentArea}>
                    <img css={S.StandingImg} alt='' src={'/images/student/portrait/Portrait_' + currentStudent?.DevName + '.webp'} />
                </div>

            </div>
        </div>
    );
}

export default stdDetail;