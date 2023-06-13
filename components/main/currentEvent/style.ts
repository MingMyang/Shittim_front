import { css } from "@emotion/react";

export const Positioner = css`
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
    border-radius: 5px;
    background-color: var(--grid-box-color);

    position: relative;
`

export const BannerTitle = css`
    width: 120px;
    height: 40px;
    border-radius: 5px 0px 5px 0px;
    background-color: var(--grid-text-color);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 40px;

    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 1;
`

export const EventLogo = css`
    width: 50%;

    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`

export const EventName = css`
    width: 100%;
    height: 40px;
    border-radius: 0px 0px 5px 5px;
    background-color: var(--grid-text-color);
    font-size: 15px;
    text-align: center;
    line-height: 40px;

    position: absolute;
    left: 0%;
    bottom: 0%;
`