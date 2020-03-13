import { useState, useEffect } from 'react';

export default function useFetch(url, options) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const rest = await fetch(url, options);
            const json = await rest.json();
            setData(json);
            setLoading(false);
            try {
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        })();
    }, [options, url]);

    return {
        loading,
        data,
        error,
    };
}
