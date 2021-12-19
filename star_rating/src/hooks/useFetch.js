import { useState, useEffect } from "react";

function useFetch(uri) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!uri) return;
        async function fetchRequest() {
            try{
                let dataStream = await fetch(uri);
                let data = await dataStream.json();
                setData(data);
                setLoading(false);
            }catch(e){
                setError(e);
            }
        }
        fetchRequest();
    }, [uri])

    return {
        loading,
        data,
        error
    }
}

export default useFetch;