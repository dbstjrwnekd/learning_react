import { useState, useEffect } from "react";
import { useMountedRef } from './useMountedRef';

function useFetch(uri) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const mounted = useMountedRef();

    useEffect(() => {
        if(!uri) return;
        if(!mounted.current) return;
        async function fetchRequest() {
            try{
                let dataStream = await fetch(uri);
                if(!mounted.current) {
                    throw new Error("component is not mounted");
                }
                let data = await dataStream.json();
                setData(data);
                setLoading(false);
            }catch(e){
                if(!mounted.current) return;
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