/** @jsxImportSource @emotion/react */
import * as S from "./style"

import Main from "@/components/main/main"
import Header from "@/components/header/header"

export default function mainPage() {
  return (
    <div css={S.Backgorund}>
      <Header />
      <Main />
    </div>
  )
}