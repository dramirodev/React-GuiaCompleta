import React, { useEffect, useState } from 'react';
import { Row, Col, Input } from 'antd';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import MovieCatalog from '../../components/MovieCatalog';
import { DB_MOVIES_DATA } from '../../utils/constats.js';
const Search = (props) => {
    const { location, history } = props;
    const [movieList, setMovieList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        (async () => {
            const searchValue = queryString.parseUrl(location.search);
            const {
                query: { s },
            } = searchValue;
            const response = await fetch(
                `${DB_MOVIES_DATA.url}/search/movie?api_key=${DB_MOVIES_DATA.api_key}&language=es-ES&query=${s}&page=1`,
            );
            const movies = response.json();

            setSearchValue(s);
            setMovieList(movies);
        })();
    }, [location.search]);

    console.log(movieList);

    return (
        <Row>
            <Col span={12} offset={6} className='search'>
                <h1>Busca tu pelicula</h1>
                <Input value={searchValue} />
            </Col>
            {movieList.results && (
                <Row>
                    <Col span={24}>
                        <MovieCatalog movies={movieList} />
                    </Col>
                </Row>
            )}
        </Row>
    );
};

export default withRouter(Search);
