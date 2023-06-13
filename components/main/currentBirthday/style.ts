import { css } from "@emotion/react";

export const Positioner = css`
    grid-column: 3 / span 1;
    grid-row: 4 / span 1;
    border-radius: 5px;
    background-color: var(--grid-box-color);
    overflow: hidden;

    position: relative;
`

export const BannerTitle = css`
    width: 120px;
    height: 35px;
    border-radius: 5px 0px 5px 0px;
    background-color: var(--grid-text-color);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 35px;

    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 2;
`

export const RaidLogo = css`
    height: 200%;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`

export const EventName = css`
    width: 100%;
    height: 35px;
    border-radius: 0px 0px 5px 5px;
    background-color: var(--grid-text-color);
    font-size: 15px;
    text-align: center;
    line-height: 35px;

    position: absolute;
    left: 0%;
    bottom: 0%;
    z-index: 2;
`