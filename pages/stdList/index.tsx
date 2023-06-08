/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Student from "@/components/student/student"
import Header from "@/components/header/header"

export const Backgorund = css`
    background-image: url('/images/background/BG_Screen_Shittim.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export default function stdList() {
    return (
        <div css={Backgorund}>
            <Header />
            <Student />
        </div>
    )
}