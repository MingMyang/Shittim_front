import { css } from "@emotion/react";

export const Positioner = css`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    padding: 75px 10px 15px 10px;
    letter-spacing: 0.5px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`

export const MainArea = css`
    width: 1300px;
    display: flex;
    flex-direction: row;
    position: relative;
`

export const InfoArea = css`
    width: 630px;
    height: 100%;
    padding: 30px 7.5px 15px 7.5px;
    border-radius: 5px;
    background-color: var(--bg-color);
    backdrop-filter: blur(7.5px);

    position: relative;
    z-index: 2;
`
export const SummaryProfile = css`
    display: flex;
    flex-direction: column;
`
export const Belong = css`
    display: flex;
`
export const SchoolImg = css`
    height: 80px;
    filter: var(--icon-color);
`
export const BelongInfo = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 10px 0px 10px;
`
export const BelongName = css`
    font-family: 'BlueArchive_Bold';
    font-size: 37.5px;
`
export const BelongType = css`
    width: 80px;
    height: 20px;
    border-radius: 5px;
    font-family: 'BlueArchive_Bold';
    font-size: 15px;
    color: white;
    transform: skew(-10deg);
    p{
        text-align: center;
        line-height: 21px;
        transform: skew(10deg);
    }
`
export const ChangeTapContainer = css`
    margin: 10px;
    button{
        font-family: 'BlueArchive';
        font-size: 18px;
        font-weight: bold;
        padding: 10px 15px 10px 15px;
        color: var(--base-color);
        border: none;
        border-radius: 5px;
        background: none;
        :hover{
            background-color: var(--nav-select-color);
        }
    }
`

export const StdentArea = css`
    width: calc(100% - 670px);
    height: 850px;
    padding: 0px 60px 0px 60px;
    display: flex;
    position: relative;
    z-index: 1;
`
export const StandingImg = css`
    height: 85vh;
    position: fixed;
    top: 55%;
    left: 65%;
    transform: translate(-50%, -50%);
`

export const DetailInfo = css`
    padding: 0px 10px 0px 10px;
    margin: 25px 0px 0px 0px;
`

export const FirstLine = css`
    margin: 20px 0px 10px 0px;
    display: flex;
`
export const TypeInfo = css`
    width: 230px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`
export const TypeBox = css`
    width: 110px;
    height: 30px;
    border-radius: 5px;
    background-color: var(--grid-box-color);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skew(-10deg);
`
export const TacticRoleImg = css`
    height: 25px;
    margin: 2.5px 2.5px 2.5px 0px;
    transform: skew(10deg);
    filter: var(--icon-color);
`
export const TacticText = css`
    width: auto;
    height: 30px;
    font-size: 15px;
    text-align: center;
    line-height: 30px;
    transform: skew(10deg);
`
export const TypeImgContainer = css`
    width: 40px;
    height: 30px;
    background-color: white;
    border-radius: 5px 0px 0px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 18px;
        transform: skew(10deg);
        filter: invert(50%);
    }
`
export const TypeText = css`
    width: 90px;
    height: 30px;
    border-radius: 0px 5px 5px 0px;
    color: white;
    font-size: 15px;
    text-align: center;
    line-height: 30px;
    transform: skew(10deg);
`
export const TerrianInfoContainer = css`
    width: 115px;
    height: 70px;
    margin: 0px 10px 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: skew(-10deg);
`
export const TerrianInfo = css`
    width: 35px;
    height: 70px;
    border-radius: 5px;
    background-color: var(--bg-color);
`
export const TerrianImgContainer = css`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 35px;
        height: 35px;
        transform: skew(10deg);
    }
`
export const TerrianEmoContainer = css`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 30px;
        height: 30px;
        transform: skew(10deg);
    }
`
export const EquipmentApplyContainer = css`
    transform: skew(-10deg);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
`
export const CheckBoxContainer = css`
    display: flex;
    width: auto;
    height: 31px;
    line-height: 31px;
    padding: 0px 10px 0px 10px;
    background-color: var(--bg-color);
    border-radius: 5px;
    p{
        margin: 0px 0px 0px 7.5px;
        font-size: 15px;
        transform: skew(10deg);
    }
`
export const Block = css`
    border-bottom: 70px solid var(--bg-color);
    border-left: 15px solid transparent;
    height: 0;
    width: 35px;
    border-radius: 5px;
`

export const SecondLine = css`
`
export const EquipmentList = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
`
export const WeaponContainer = css`
    width: 200px;
    height: 80px;
    border-radius: 5px;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        height: 55px;
    }
`
export const BaseEquipmentContainer = css`
    border-radius: 5px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
`
export const TierBtnContainer = css`
    width: 50px;
    height: 55px;
    padding: 0px 5px 0px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    button{
        width: 100%;
        border: 0px;
        font-family: 'BlueArchive';
        font-size: 15px;
        color: var(--base-color);
        background: none;
    }
`
export const BaseEquipment = css`
    width: 255px;
    height: 60px;
    padding: 0px 8px 0px 8px;
    border-left: 2px solid;
    border-right: 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        width: 80px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 70px;
        }
    }
`
export const CherishedItem = css`
    width: 70px;
    height: 70px;
    margin: 0px 5px 0px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 75px;
        filter: var(--icon-color-reverse);
    }
`

export const ThirdLine = css`
`
export const StarScaleContainer = css`
    width: 200px;
    height: 25px;
    border-radius: 100px;
    background-color: var(--bg-color);
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 21px;
        opacity: 0.5;
    }
`
export const LevelScaleContainer = css`
    width: calc(100% - 200px);
    height: 25px;
    padding: 0px 0px 0px 10px;
    margin: 8.5px 0px 8.5px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
        width: calc(100% - 70px);
    }
    p{
        width: 60px;
        height: 25px;
        line-height: 25px;
        border-radius: 100px;
        text-align: center;
        background-color: var(--bg-color);
    }
`
export const StatContainer = css`
    width: 100%;
    height: 380px;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--bg-color);

    display: flex;
    flex-wrap: wrap;
`
export const StatIcon = css`
    width: 50%;
    height: 30px;
    margin: 7.5px 0px 7.5px 0px;
    display: flex;
    align-items: center;
    div{
        width: 30px;
        height: 30px;
        border-radius: 35px;
        background-color: var(--nav-select-color);
        margin: 0px 10px 0px 0px;
        img{
            height: 30px;
            padding: 0px 2px 0px 2px;
            margin: 0px 5px 0px 0px;
            border-radius: 35px;
            filter: var(--icon-color);
        }
    }
    p{
        line-height: 18px;
    }
`

/////////////////
//   스킬 탭   //
/////////////////

//스킬 컨테이너
export const SkillContainer = css`
    width: 100%;
    padding: 15px 15px 15px 0px;
    margin: 7.5px 0px 7.5px 0px;
    background-color: var(--bg-color);
    display: flex;
`
//컨테이너 좌측 (스킬 아이콘, 재료 리스트 토글)
export const SkillIconContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const SkillIcon = css`
    width: 65px;
    height: 65px;
    margin: 0px 12.5px 0px 12.5px;
    border-radius: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 65px;
    }
`
//컨테이너 우측 (스킬 텍스트)
export const SkillDescContaioner = css`
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
        height: 30px;
        line-height: 30px;
        font-size: 20px;
    }
`
export const ExTitleLine = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ExCost = css`
    width: 75px;
    height: 30px;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
    letter-spacing: 1.5px;
    padding: 5px;
    border-radius: 10px;
    background-color: var(--grid-box-color);
`
export const SkillDesc = css`
    width: 100%;
    height: calc(100% - 50px);
    font-size: 18px;
    line-height: 20px;
    margin: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const SkillLevelScaleContainer = css`
    width: 100%;
    height: 25px;
    padding: 7.5px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
        width: calc(100% - 70px);
        ::-webkit-slider-runnable-track{
            -webkit-appearance: none;
        }
    }
    p{
        width: 60px;
        height: 25px;
        line-height: 25px;
        border-radius: 100px;
        text-align: center;
        background-color: var(--bg-color);
    }
`

///////////////////
//   프로필 탭   //
///////////////////

//헤드 프로필 구역
export const HeadProfileContainer = css`
    display: flex;
    margin: 25px 0px 15px 0px;
`
export const ProfileImgContainer = css`
    width: 100px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    img{    
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
export const CommonInfo = css`
    display: flex;
    flex-direction: column;
    padding: 5px 10px 5px 10px;
    font-size: 18px;
`
export const InfoName = css`
    padding: 7.5px 0px 15px 0px;
    font-size: 27.5px;
`
export const GetNewCharacterText = css`
    font-size: 17px;
`
//프로필 정보 구역
export const SubContainer = css`
    margin: 15px 0px 15px 0px;
    display: flex;
    justify-content: space-between;
`
export const SubInfo = css`
    width: 100%;
    height: auto;
    padding: 15px;
    border-radius: 10px;
    background-color: var(--bg-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
//프로필 주요 정보 (소개문, 신상정보)
export const ProfileIntroduction = css`
    line-height: 20px;
`
export const WhiteLine = css`
    width: 100%;
    height: 1px;
    margin: 10px 0px 10px 0px;
    background-color: var(--base-color);
`
export const ProfileInfo = css`
    width: 100%;
    height: 110px;   
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const ProfileInfoText = css`
    width: 48%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
`
export const ProfileInfoText2 = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
`
//프로필 추가 정보 (인연랭크, 선물, 가구)
export const ProfileExInfoContainer = css`
    width: 100%;
    padding: 15px 0px 15px 0px;
    border-radius: 10px;
    background-color: var(--bg-color);
`
export const ProfileExInfoList = css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    div{
        position: relative;
    }
`
export const FavorItem = css`
    height: 60px;
`
export const ItemInteraction = css`
    height: 25px;
    position: absolute;
    top: 80%;
    left: 80%;
    transform: translate(-50%, -50%);
`