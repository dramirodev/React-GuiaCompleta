import React from 'react';
import { Row, Col, Button } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import useFetch from '../../hooks/useFetch';
import { DB_MOVIES_DATA } from '../../utils/constats.js';
import Loading from '../../components/Loading';

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

const RenderMovie = ({
    movie: {
        title,
        backdrop_path,
        poster_path,
        id,
        release_date,
        overview,
        genres,
    },
}) => {
    const backdropPath = `${DB_MOVIES_DATA.url_imagen}${backdrop_path}`;
    return (
        <div
            className='movie'
            style={{
                backgroundImage: `url("${backdropPath}")`,
            }}
        >
            <div className='movie__dark' />
            <Row>
                <Col span={8} offset={3} className='movie__poster'>
                    <PosterMovie imagen={poster_path} />
                </Col>
                <Col span={10} className='movie__info'>
                    <MovieInfo
                        title={title}
                        id={id}
                        release_date={release_date}
                        overview={overview}
                        genres={genres}
                    />
                </Col>
            </Row>
        </div>
    );
};

const PosterMovie = ({ imagen }) => {
    const posterPath = `${DB_MOVIES_DATA.url_imagen}${imagen}`;

    return (
        <div
            style={{
                backgroundImage: `url(${posterPath})`,
            }}
        />
    );
};

const MovieInfo = ({ title, id, release_date, overview, genres }) => {
    return (
        <>
            <div className='movie__info-header'>
                <h1>
                    {title}{' '}
                    <span>
                        {moment(release_date, 'YYYY-MM-DD').format('YYYY')}
                    </span>
                </h1>
                <button>Ver Trailer</button>
            </div>
            <div className='movie__info-content'>
                <h3>Información General</h3>
                <p>{overview}</p>
                <h3>Generos</h3>
                <ul>
                    {genres.map((g) => (
                        <li key={g.id}>{g.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Movie;
