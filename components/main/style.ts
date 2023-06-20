import { css } from "@emotion/react";

export const Positioner = css`
    width: 100vw;
    height: 100vh;
    padding: 60px 0px 0vh 0px;
    overflow-x: auto;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 7.5px;
        height: 7.5px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
    }
`

export const AreaContainer = css`
    width: 100%;
    height: 870px;
`

export const EventArea = css`
    width: 100%;
    height: 820px;
    padding: 40px;
    background-color: var(--bg-color);
    backdrop-filter: blur(5px);

    display: grid;
    justify-content: center;
    grid-template-columns: 410px 410px 500px 420px;
    grid-template-rows: 330px 160px 190px;
    grid-gap: 15px;
    position: relative;
    top: 25px;
`

export const TwittArea = css`
    grid-column: 4 / span 1;
    grid-row: 1 / span 3;
    border-radius: 10px 5px 5px 10px;
    background-color: var(--grid-box-color);
    overflow-y:auto;
    &::-webkit-scrollbar {
        width: 7.5px;
        height: 7.5px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
    }
`

export const Copyright = css`
    font-size: 15px;
    position: absolute;
    left: 50%;
    bottom: 25px;
    transform: translate(-50%, -0%);
`