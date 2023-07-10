import { css } from "@emotion/react";

export const Positioner = css`
    width: 100vw;
    height: 100vh;
    padding: 75px 10px 10px 10px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const MainArea = css`
    width: 1300px;
    height: 850px;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    position: relative;
`

export const InfoArea = css`
    width: 650px;
    height: 100%;
    padding: 30px 15px 30px 15px;
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
    font-size: 37.5px;
`
export const BelongType = css`
    width: 80px;
    height: 20px;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    transform: skew(-10deg);
    p{
        text-align: center;
        line-height: 20px;
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
    width: calc(100% - 650px);
    height: 100%;
    padding: 60px 60px 60px 60px;
    display: flex;
    position: relative;
    z-index: 1;
`
export const StandingImg = css`
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const DetailInfo = css`
    padding: 0px 10px 0px 10px;
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
    height: 30px;
    transform: skew(10deg);
    filter: var(--icon-color);
`
export const TacticText = css`
    width: auto;
    height: 30px;
    font-size: 16px;
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
        height: 20px;
        transform: skew(10deg);
        filter: invert(50%);
    }
`
export const TypeText = css`
    width: 90px;
    height: 30px;
    border-radius: 0px 5px 5px 0px;
    color: white;
    font-size: 16px;
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
`
export const CheckBoxContainer = css`
    display: flex;
    p{
        margin: 0px 0px 0px 5px;
        transform: skew(10deg);
    }
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
    width: 250px;
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
    }
`

export const ThirdLine = css`
`
export const LevelScaleContainer = css`
    width: 100%;
    height: 25px;
    margin: 5px 0px 5px 0px;
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
    height: 450px;
    padding: 30px;
    border-radius: 5px;
    background-color: var(--bg-color);

    display: flex;
    flex-wrap: wrap;
    p{
        width: 50%;
    }
`