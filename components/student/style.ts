import { css } from "@emotion/react";

export const Positioner = css`
    width: 100vw;
    height: 100vh;
    padding: 65px 0px 0vh 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const MainArea = css`
    width: 100%;
    height: 90%;
    padding: 2.5vh 1.5vw 2.5vh 1.5vw;
    background-color: var(--bg-color);

    display: flex;
    flex-direction: column;
`

export const FilterArea = css`
    width: 100%;
    height: calc(100px - 2.5vh);
    padding: 10px;
    font-size: 35px;

    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Filter = css`
    width: calc(100% - 221px);
    height: 40px;
    margin: 0px 30px 0px 30px;
    background: none;
    border: none;
    border-bottom: 1px solid;
    outline: none;

    font-family: 'BlueArchive';
    font-size: 25px;
    font-weight: bold;
    color: var(--base-color);
`

export const StdList = css`
    width: 100%;
    height: calc(100% - 2.5vh);

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-template-rows: repeat(auto-fill, 170px);
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

export const ListItem = css`
    width: 120px;
    height: 150px;
    margin: 10px 15px 10px 15px;
    cursor: pointer;

    position: relative;
`

export const StdName = css`
    width: 100%;
    height: 30px;
    border-radius: 0px 0px 5px 5px;
    position: absolute;
    left: 0%;
    bottom: 0%;
    background-color: var(--grid-text-color);

    text-align: center;
    line-height: 30px;
    font-size: 15px;
`