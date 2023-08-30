/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import * as S from "./style"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function header() {
    const router = useRouter();
    const link = router.asPath;
    const name = link.split("/")[1];
    if (name === "") {

    }
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
        if (storedTheme === 'light') {
            setIsDarkMode(false);
            document.body.setAttribute("data-theme", "light");
        } else if (storedTheme === 'dark'){
            setIsDarkMode(true);
            document.body.setAttribute("data-theme", "dark");
        } else {
            setIsDarkMode(true);
            document.body.setAttribute("data-theme", "dark");
        }
    }, []);

    const menuData = [
        { id: '1', name: '홈', path: '/' },
        { id: '2', name: '학생', path: '/stdList' },
        { id: '3', name: '가구', path: '/furnitureList' },
        { id: '4', name: '계산기', path: '' },
    ]

    return (
        <div css={S.Positioner}>
            <nav css={S.Navigation}>
                <div css={S.FullLogo} onClick={() => router.push("/")}>
                    <div css={S.Icon}>
                        <img css={S.LogoImg} alt='' src='/images/schoolicon/School_Icon_MILLENNIUM_W.png' />
                        <div css={S.IconText}>- ARIS -</div>
                    </div>
                    <div css={S.LogoText}><span css={S.FirstText}>Schale</span><span css={S.SecondText}>DataBase</span></div>
                </div>
                <div css={S.뭐로하지}>
                    <div css={S.NavItems}>
                        {menuData.map((menu) => {
                            return(
                                <Link key={menu.id} href={menu.path} css={S.NavLink}><div style={{backgroundColor: menu.path === router.pathname ? 'var(--nav-select-color)' : ''}}>{menu.name}</div></Link>
                            );
                        })}
                    </div>
                </div>
                <label css={S.ThemeArea}>
                    <input checked={isDarkMode} onClick={darkModeHandler} css={S.ThemeSwitch} type="checkbox" />
                </label>
            </nav>
        </div>
    )
}

export default header;