/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Main from "@/components/main/main"
import Header from "@/components/header/header"

export const Backgorund = css`
    background-image: url('/images/background/BG_Screen_Shittim.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export default function index() {
  return (
    <div css={Backgorund}>
      <Header />
      <Main />
    </div>
  )
}