import React, { useState, useEffect } from 'react';

const GitHubUser = ({login}) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!login) return;
        setLoading(true);
        async function getUserData() {
            try{
                let userInfo = await fetch(`https://api.github.com/users/${login}`);
                let userData = await userInfo.json();
                setData(userData);
                setLoading(false);
            }catch(e){
                setError(e);
            }
        }
        getUserData();
    }, [login]);
    if(loading) return <h1>loading...</h1>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!data) return null;
    
    return (
        <div className="githubUser">
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    );
};

export default GitHubUser;