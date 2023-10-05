/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import stdInfo from '@/asset/json/studentInfo.json';
import Header from "@/components/header/header"
import StdDetail from "@/components/stdDetail/stdDetail"

export default function StudentDetails() {
    const router = useRouter();
    const link = router.asPath;
    const name = link.split("/")[2];
    const currentStudent = stdInfo.find((student) => student.PathName === name);
    const Backgorund = css`
        background-image: url(${'/images/background/' + currentStudent?.CollectionBG + '.jpg'});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        overflow: hidden;
    `
    
    return (
        <div css={Backgorund}>
            <Header />
            <StdDetail currentData = {currentStudent} />
        </div>
    );
};