import React from 'react';
import './Movie.scss';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { DB_MOVIES_DATA } from '../../utils/constats';

export default function Movie({ movie }) {
    const { id, backdrop_path, title, overview } = movie;

    const backdropPath = `${DB_MOVIES_DATA.url_imagen}${backdrop_path}`;
    return (
        <div
            className='slider-movies__movie'
            style={{
                backgroundImage: `url('${backdropPath}')`,
            }}
        >
            <div className='slider-movies__movie-info'>
                <div>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <Button type='primary'>
                        <Link to={`/movie/${id}`}>Ver más</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
