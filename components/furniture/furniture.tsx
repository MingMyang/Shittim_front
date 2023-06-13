/** @jsxImportSource @emotion/react */
import * as S from "./style"
import furnitureInfo from '@/asset/json/furnitureInfo.json';
import { useState } from 'react';

function furniture() {
    const [filter, setFilter] = useState('');
    const handleChange = (e: any) => {
        setFilter(e.target.value);
    };
    const filteredFurniture = furnitureInfo.filter((data) =>
        data.Name.toLowerCase().includes(filter.toLowerCase())
    );

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div css={S.Positioner}>
            <div css={S.MainArea}>
                <div css={S.FilterArea}>
                    <div>가구 리스트</div>
                    <input css={S.Filter} type="text" spellCheck={false} onChange={handleChange} placeholder="이름을 입력해 검색" />
                </div>
                <div css={S.FurnitureList}>
                    {filteredFurniture.map((result: any) => (
                        <div css={S.ListItem} key={result.id}>
                            <img alt='' loading='lazy' src={'images/furniture/' + result.Icon + '.png'} />
                            <div css={S.FurnitureName}>{truncateText(result.Name, 15)}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div css={S.FurnitureDetail}>

            </div>
        </div>
    );
}

export default furniture;