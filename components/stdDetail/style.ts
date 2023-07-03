import { css } from "@emotion/react";

export const Positioner = css`
    width: 100vw;
    height: 100vh;
    padding: 65px 0px 0vh 0px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const MainArea = css`
    width: 1300px;
    height: 90%;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    position: relative;
`

export const InfoArea = css`
    width: 650px;
    height: 100%;
    padding: 50px;
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
    width: calc(100% - 600px);
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
    padding: 0px 20px 0px 20px;
`
export const FirstLine = css`
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


export const AdjustStat = css`
    width: 100%;
    display: flex;
`
export const EquipmentList = css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
`
export const StatScale = css`
    width: calc(100% - 100px);
`