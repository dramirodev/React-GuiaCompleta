import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { DB_MOVIES_DATA } from '../utils/constats.js';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import MovieCatalog from '../components/MovieCatalog';
import PaginationMovies from '../components/Pagination';

const NewMovies = () => {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `${DB_MOVIES_DATA.url}/movie/now_playing?api_key=${DB_MOVIES_DATA.api_key}&language=es-ES&page=${page}`,
            );

            const movies = await response.json();

            setMovieList(movies);
        })();
    }, [page]);

    const onChagePage = (page) => {
        setPage(page);
    };

    return (
        <Row>
            <Col span={24} style={{ textAlign: 'center', marginTop: 25 }}>
                <h1 style={{ fontSize: 35, fontWeight: 'bold' }}>
                    Ultimos lanzamientos
                </h1>
            </Col>
            {movieList.results ? (
                <Row gutter={[16, 16]}>
                    {/* <Col span={24}> */}
                    <MovieCatalog movies={movieList} />
                    {/* </Col> */}
                    <Col span={24}>
                        <PaginationMovies
                            currentPage={movieList.page}
                            totalItems={movieList.total_results}
                            onchangePage={onChagePage}
                        />
                    </Col>
                </Row>
            ) : (
                <Col span='24'>
                    <Loading />
                </Col>
            )}
        </Row>
    );
};

export default NewMovies;
