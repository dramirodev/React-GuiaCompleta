import React from 'react';
import useFetch from '../hooks/useFetch';
import { DB_MOVIES_DATA } from '../utils/constats';
import SliderMovies from '../components/SliderMovies';

const Home = () => {
    const url = `${DB_MOVIES_DATA.url}/movie/now_playing?api_key=${DB_MOVIES_DATA.api_key}&language=es-ES&page=1`;
    const movies = useFetch(url);
    console.log('movies :', movies);
    return (
        <>
            <SliderMovies peliculas={movies} />
        </>
    );
};

export default Home;
