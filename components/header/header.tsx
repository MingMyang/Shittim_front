/** @jsxImportSource @emotion/react */
import * as S from "./style"
import router, { useRouter } from "next/router";
import { useState, useEffect } from "react";

function header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const darkModeHandler = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    }
    useEffect(() => {
        // 로컬 스토리지에서 저장된 테마 가져오기
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.body.setAttribute("data-theme", "dark");
        }
        else {
            document.body.setAttribute("data-theme", "light");
        }
    }, []);

    return (
        <div css={S.Positioner}>
            <nav css={S.Navigation}>
                <div css={S.FullLogo} onClick={() => router.push("/")}>
                    <div css={S.Icon}>
                        <img css={S.LogoImg} alt='' src='/images/schoolicon/School_Icon_MILLENNIUM_W.png' />
                        <div css={S.IconText}>- ARONA -</div>
                    </div>
                    <div css={S.LogoText}><span css={S.FirstText}>Schale</span><span css={S.SecondText}>DataBase</span></div>
                </div>
                <div css={S.뭐로하지}>
                    <div css={S.NavItems}>
                        <div onClick={() => router.push("/")}>홈</div>
                        <div onClick={() => router.push("/stdList")}>학생</div>
                        <div onClick={() => router.push("/furnitureList")}>가구</div>
                        <div>계산기</div>
                    </div>
                    <div></div>
                </div>
                <label css={S.ThemeArea}>
                    <input checked={isDarkMode} onClick={darkModeHandler} css={S.ThemeSwitch} type="checkbox" />
                </label>
            </nav>
        </div>
    )
}

export default header;