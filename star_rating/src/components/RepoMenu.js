import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useIterator } from '../hooks/useIterator';
import RepositoryReadme from './RepositoryReadme';

function RepoMenu({ repositories, selected, onSelect = f => f }) {
    const [{name}, previous, next] = useIterator(
        repositories,
        selected ? repositories.findIndex(repo => repo.name === selected) : null
    );
    useEffect(() => {
        onSelect(name);
    }, [name])

    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
        </>
    );
}

export default RepoMenu;