import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { DB_MOVIES_DATA } from '../../utils/constats.js';
import Loading from '../../components/Loading';
import RenderMovie from './RenderMovie';


import './movie.scss';

const Movie = () => {
    const { id } = useParams();
    const urlMovie = `${DB_MOVIES_DATA.url}/movie/${id}?api_key=${DB_MOVIES_DATA.api_key}&language=es-ES`;
    const { loading, data } = useFetch(urlMovie);

    if (loading || data === null) {
        return <Loading />;
    }

    return (
        <>
            <RenderMovie movie={data} />
        </>
    );
};

export default Movie;
