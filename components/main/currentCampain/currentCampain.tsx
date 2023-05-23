/** @jsxImportSource @emotion/react */
import * as S from "./style"

function currentCampain() {

    return (
        <div css={S.Positioner}>
            <div css={S.BannerTitle}>진행중인 캠페인</div>
            <div css={S.EventName}>개최 예정</div>
        </div>
    )
}

export default currentCampain;