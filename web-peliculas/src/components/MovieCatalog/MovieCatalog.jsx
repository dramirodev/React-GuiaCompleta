import React from 'react';
import { Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import { DB_MOVIES_DATA } from '../../utils/constats';
import { EyeFilled } from '@ant-design/icons';

import './MovieCatalog.scss';

const MovieCatalog = ({ movies: { results } }) => {
    return results.map((movie) => {
        return (
            <Col key={movie.id} xs={4} className='movie-catalog'>
                <MovieCard movie={movie} />
            </Col>
        );
    });
};

const MovieCard = (props) => {
    const {
        movie: { id, title, poster_path },
    } = props;
    const { Meta } = Card;
    const urlPoster = `${DB_MOVIES_DATA.url_imagen}${poster_path}`;

    return (
        <Link to={`/movie/${id}`}>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt={title} src={urlPoster} />}
                actions={[<EyeFilled />]}
            >
                <Meta title={title} />
            </Card>
        </Link>
    );
};

export default MovieCatalog;
