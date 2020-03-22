import React from 'react';
import { DB_MOVIES_DATA } from '../../utils/constats.js';
import { Row, Col, Button } from 'antd';
import PosterMovie from './PosterMovie';
import MovieInfo from './MovieInfo';

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

export default RenderMovie;
