import { css } from "@emotion/react";

export const Positioner = css`
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
    border-radius: 5px;
    background-color: var(--grid-box-color);
    position: relative;
`

export const BannerTitle = css`
    width: 120px;
    height: 40px;
    border-radius: 5px 0px 0px 0px;
    text-align: center;
    line-height: 45px;
    font-size: 15px;
    font-weight: bold;
    background-color: var(--grid-text-color);
`

export const remainTime = css`
    width: calc(100% - 120px);
    height: 40px;
    text-align: center;
    line-height: 34px;
    border: 3px solid var(--grid-text-color);;
    position: absolute;
    top: 0%;
    right: 0%;
`

export const TimerText = css`
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
`

export const PickupList = css`
    width: calc(100% - 20px);
    height: calc(100% - 60px);
    margin: 10px;
`
export const ListItem = css`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ItemImg = css`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 2;
`