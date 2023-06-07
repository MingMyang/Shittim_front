import { css } from "@emotion/react";

export const Positioner = css`
    width: 100vw;
    height: 100vh;
    padding: 65px 10vw 0vh 10vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const MainArea = css`
    width: 1300px;
    height: calc(100% - 100px);
    padding: 60px 90px 60px 90px;
    margin: 50px;
    border-radius: 5px;
    background-color: var(--bg-color);

    display: flex;
    flex-direction: row;
    position: relative;
`

export const InfoArea = css`
    width: 45%;
    height: 100%;

    display: flex;
    position: relative;
    z-index: 1;
`

export const SummaryProfile = css`
    display: flex;
`

export const SchoolImg = css`
    height: 80px;
    filter: var(--icon-color);
`

export const Belong = css`
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
    width: 55%;
    height: 100%;

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