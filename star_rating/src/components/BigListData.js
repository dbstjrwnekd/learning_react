import React from 'react';
import { FixedSizeList } from "react-window";
import faker from "faker";

const bigList = [...Array(5000)].map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
}));

function BigListData(props) {
    const renderRow = ({ index, style }) => (
        <div style= {{ ...style, ...{ display: "flex" } }}>
            <img
                src={bigList[index].avatar}
                alt={bigList[index].name}
                width={50}
            />
            <p>
                {bigList[index].name} - {bigList[index].email}
            </p>
        </div>
    );

    return (
        <FixedSizeList
            height={window.innerHeight - 400}
            width={window.innerWidth - 20}
            itemCount={bigList.length}
            itemSize={50}
        >
            {renderRow}
        </FixedSizeList>
    );
}

export default BigListData;