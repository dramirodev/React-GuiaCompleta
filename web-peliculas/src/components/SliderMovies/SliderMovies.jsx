import React from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';

import './SliderMovies.scss';
import Movie from '../Movie';

const SliderMovies = ({ peliculas }) => {
    const { data, error, loading } = peliculas;

    if (loading || !data) {
        return 'Loading';
    }

    const { results } = data;

    return (
        
        <Carousel autoplay className='slider-movies' effect='fade'>
            {results.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </Carousel>
    );
};

export default SliderMovies;
