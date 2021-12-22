import React from 'react';
import Fetch from "./Fetch";
import RepoMenu from './RepoMenu';

function UserRepositories({ login, repo, onSelect }) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({ data }) => (
                <RepoMenu
                    repositories={data}
                    selected={repo}
                    onSelect={onSelect}
                />
            )}
        />
    );
}

export default UserRepositories;