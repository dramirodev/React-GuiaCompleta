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

const RenderMovie = ({ movie: { title, backdrop_path } }) => {
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
                <Col span={8} offset={3} className='movie__poster'></Col>
                <Col span={10} className='movie__info'></Col>
            </Row>
        </div>
    );
};

export default Movie;
