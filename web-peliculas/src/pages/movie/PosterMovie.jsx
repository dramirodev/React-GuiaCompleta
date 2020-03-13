import React from 'react';
import { DB_MOVIES_DATA } from '../../utils/constats.js';

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

export default PosterMovie;
