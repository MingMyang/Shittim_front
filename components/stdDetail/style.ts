import { css } from "@emotion/react";

export const Positioner = css`
    width: 100vw;
    height: 100vh;
    padding: 65px 10vw 0vh 10vw;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const MainArea = css`
    width: 80%;
    height: 90%;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    position: relative;
`

export const InfoArea = css`
    width: 600px;
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
    padding: 10px 0px 10px 0px;
`
export const BelongSchool = css`
    font-size: 27.5px;
`
export const BelongClub = css`
    font-size: 20px;
`

export const TypeContainer = css`
    width: 500px;
    padding: 0px 20px 0px 20px;
`
export const NameInfo = css`
`
export const TypeInfo = css`
    width: 250px;
    margin: 10px 0px 10px 0px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`
export const TypeBox = css`
    width: 120px;
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
export const TypeImgContainer = css`
    width: 30px;
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
export const TypeTextContainer = css`
    width: 90px;
    height: 30px;
    border-radius: 0px 5px 5px 0px;
    color: white;
    font-size: 17.5px;
    text-align: center;
    line-height: 30px;
    transform: skew(10deg);
`

export const DetailInfo = css`
    padding: 0px 20px 0px 20px;
`
export const AdjustStat = css`
    width: 300px;
`

export const StatScale = css`
    width: 250px;
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