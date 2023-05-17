/** @jsxImportSource @emotion/react */
import * as S from "./style"

function header() {
    return (
        <div css={S.Positioner}>
            <nav css={S.Navigation}>
                <div css={S.FullLogo}>
                    <div css={S.Icon}>
                        <img css={S.LogoImg} alt='' src='images/schoolicon/School_Icon_MILLENNIUM_W.png' />
                        <div css={S.IconText}>- VERITAS -</div>
                    </div>
                    <div css={S.LogoText}><span css={S.FirstText}>MILLENNIUM</span><span css={S.SecondText}>DataBase</span></div>
                </div>
            </nav>
        </div>
    )
}

export default header;