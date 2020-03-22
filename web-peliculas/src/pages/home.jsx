import React from 'react';
import useFetch from '../hooks/useFetch';
import { DB_MOVIES_DATA } from '../utils/constats';
import SliderMovies from '../components/SliderMovies';
import MovieList from '../components/MovieList/MovieList';
import { Row, Col } from 'antd';
import Footer from '../components/Footer';

const Home = () => {
    const url = `${DB_MOVIES_DATA.url}/movie/now_playing?api_key=${DB_MOVIES_DATA.api_key}&language=es-ES&page=1`;
    const urlPopular = `${DB_MOVIES_DATA.url}/movie/popular?api_key=${DB_MOVIES_DATA.api_key}&language=es-ES&page=1`;
    const urlTopRated = `${DB_MOVIES_DATA.url}/movie/top_rated?api_key=${DB_MOVIES_DATA.api_key}&language=es-ES&page=1`;

    const movies = useFetch(url);
    const moviesPopular = useFetch(urlPopular);
    const moviesTopRated = useFetch(urlTopRated);
    return (
        <>
            <SliderMovies peliculas={movies} />
            <Row>
                <Col span={12}>
                    <MovieList
                        peliculas={moviesPopular}
                        title={'Peliculas Populares'}
                    />
                </Col>
                <Col span={12}>
                    <MovieList
                        peliculas={moviesTopRated}
                        title={'Peliculas más votadas'}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Home;
