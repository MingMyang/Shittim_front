/** @jsxImportSource @emotion/react */
import * as S from "./style"
import stdInfo from '@/asset/json/studentInfo.json';
import { useState } from 'react';
import { useRouter } from 'next/router';

function main() {
    const [filter, setFilter] = useState('');
    const router = useRouter();

    const handleChange = (e: any) => {
        setFilter(e.target.value);
    };

    const filteredStudents = stdInfo.filter((student) =>
        student.Name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleStudentClick = (student: any) => {
        router.push({
            pathname: `/stdList/${student.PathName}`,
        },
        `/stdList/${student.PathName}`
        );
    };

    return (
        <div css={S.Positioner}>
            <div css={S.MainArea}>
                <div css={S.FilterArea}>
                    <div>학생 리스트</div>
                    <input css={S.Filter} type="text" spellCheck={false} onChange={handleChange} placeholder="이름을 입력해 검색" />
                </div>
                <div css={S.StdList}>
                    {filteredStudents.map((result: any) => (
                        <div css={S.ListItem} key={result.id} onClick={() => handleStudentClick(result)}>
                            <img alt='' src={'images/student/icon/' + result.CollectionTexture + '.png'} />
                            <div css={S.StdName}>{result.Name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default main;