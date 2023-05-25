/** @jsxImportSource @emotion/react */
import * as S from "../style"

import Student from "@/components/student/student"
import Header from "@/components/header/header"

export default function stdList() {
    return (
        <div css={S.Backgorund}>
            <Header />
            <Student />
        </div>
    )
}