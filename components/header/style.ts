import { css } from "@emotion/react";

export const Positioner = css`
    width: 100vw;
    height: 65px;
    padding: 0vh 10vw 0vh 10vw;
    background-color: var(--bg-color);
    backdrop-filter: blur(7.5px);

    display: flex;
    justify-content: center;
    position: fixed;
`

export const Navigation = css`
    width: 1400px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const FullLogo = css`
    width: 215px;
    height: 100%;
    cursor: pointer;
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
    filter: var(--icon-color)
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


export const 뭐로하지 = css`
    width: calc(100% - 415px);
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const NavItems = css`
    width: 320px;
    height: 100%;
    font-size: 18px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        width: 75px;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
        
        display: flex;
        justify-content: center;
        align-items: center;
        :hover{
            background-color: var(--nav-select-color);
        }
    }
`

export const NavItem = css`
    background-color: var(--nav-select-color);
`

export const ThemeArea = css`
    width: 100px;
    height: 100%;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`
export const ThemeSwitch = css`
    width: 60px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0);
    border: 5px solid var(--theme-color);
    border-radius: 50px;
    appearance: none;
    cursor: pointer;
    position: relative;
    ::before{
        content: "";
        position: absolute;
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: black;
        transform: scale(0.8);
        transition: left 250ms linear;
    }

    :checked {
        background-color: rgba(255, 255, 255, 0);
        border-color: var(--theme-color);
    }
    :checked::before {
        background-color: white;
        left: 29px;
    }
`