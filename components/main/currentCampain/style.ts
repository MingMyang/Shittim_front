import { css } from "@emotion/react";

export const Positioner = css`
    grid-column: 1 / span 2;
    grid-row: 4 / span 1;
    border-radius: 5px;
    background-color: var(--grid-box-color);
    overflow-x: hidden;

    position: relative;
`

export const BannerTitle = css`
    width: 120px;
    height: 35px;
    border-radius: 5px 0px 5px 0px;
    text-align: center;
    line-height: 35px;
    font-size: 15px;
    font-weight: bold;
    background-color: var(--grid-text-color);

    position: absolute;
    top: 0%;
    left: 0%;

    z-index: 2;
`

export const EventName = css`
    width: 100%;
    height: 35px;
    border-radius: 0px 0px 5px 5px;
    position: absolute;
    left: 0%;
    bottom: 0%;
    background-color: var(--grid-text-color);
    text-align: center;
    line-height: 35px;
    font-size: 15px;

    z-index: 2;
`