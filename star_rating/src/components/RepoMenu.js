import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useIterator } from "../hooks";

function RepoMenu({
    repositories,
    onSelect = f => f
}) {
    const [{name}, previous, next] = useIterator(
        repositories
    );

    useEffect(() => {
        if (!name) return;
        onSelect(name);
    }, [name]);

    return (
        <div style={{ display: "flex" }}>
            <button onClick={previous}>&lt;</button>
            <p>{name}</p>
            <button onClick={next}>&gt;</button>
        </div>
    );
}

export default RepoMenu;