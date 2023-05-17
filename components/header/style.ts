import { css } from "@emotion/react";

export const Positioner = css`
    width: 100vw;
    height: 7vh;
    background-color: rgba(51, 51, 51, 0.7);
`

export const Navigation = css`
    width: 100%;
    height: 100%;
    padding: 0px 10vw 0px 10vw;
    display: flex;
    flex-direction: row;
`

export const FullLogo = css`
    width: auto;
    height: 100%;
`

export const Icon = css`
    width: 80px;
    height: 100%;
    float: left;

    position: relative;
`

export const LogoImg = css`
    width: 80px;
    position: absolute;
    left: 50%;
    top: -15%;
    transform: translate(-50%, -0%);
`

export const IconText = css`
    width: 80px;
    font-size: 13px;
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, -0%);
`

export const LogoText = css`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    float: right;
`

export const FirstText = css`
    font-size: 15px;
`

export const SecondText = css`
    font-size: 30px;
`