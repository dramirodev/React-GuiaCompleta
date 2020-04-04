import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(url, options);
                const response = await result.json();
                setData(response);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [options, url]);

    return [data, error, loading];
};

export default useFetch;
