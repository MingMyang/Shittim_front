import { css } from "@emotion/react";

export const Positioner = css`
    width: 100vw;
    height: 93vh;
    padding: 5vh 10vw 5vh 10vw;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const EventArea = css`
    width: 1500px;
    height: 800px;
    padding: 1.5vh 1.5vw 7.5vh 1.5vw;
    border-radius: 5px;
    background-color: var(--bg-color);

    display: grid;
    grid-template-columns: 3fr 3fr 4fr 400px;
    grid-template-rows: 75px 225px 175px 1fr;
    grid-gap: 10px;
`

export const GridTitle = css`
    grid-column: 1 / span 3;
    grid-row: 1 / span 1;
    line-height: 75px;
    font-size: 35px;
`

export const TwittArea = css`
    grid-column: 4 / span 1;
    grid-row: 2 / span 3;
    margin: 0px 0vw 0px 1.5vw;
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

export const TwitterTitle = css`
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;
    font-size: 25px;
    line-height: 75px;
    text-align: center;
    margin: 0px 0vw 0px 1.5vw;
`