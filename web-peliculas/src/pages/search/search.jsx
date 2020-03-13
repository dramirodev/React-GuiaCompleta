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
            const { s } = searchValue.query;
            const response = await fetch(
                `${DB_MOVIES_DATA.url}/search/movie?api_key=${DB_MOVIES_DATA.api_key}&language=es-ES&query=${s}&page=1`,
            );
            const movies = await response.json();

            setSearchValue(s);
            setMovieList(movies);
        })();
    }, [location.search]);

    const onChangeSearch = (e) => {
        const urlParams = queryString.parse(location.search);
        urlParams.s = e.target.value;
        history.push(`?${queryString.stringify(urlParams)}`);
        setSearchValue(e.target.value);
    };

    return (
        <Row gutter={[16, 16]}>
            <Col span={12} offset={6} className='search'>
                <h1>Busca tu pelicula</h1>
                <Input value={searchValue} onChange={onChangeSearch} />
            </Col>
            {movieList.results && (
                <Row>
                    <MovieCatalog movies={movieList} />
                </Row>
            )}
        </Row>
    );
};

export default withRouter(Search);
