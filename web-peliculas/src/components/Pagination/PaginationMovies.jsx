import React from 'react';
import Pagination from 'rc-pagination';
import './PaginationMovies.scss';

const PaginationMovies = ({ currentPage, totalItems, onchangePage }) => {
    return (
        <Pagination
            className='pagination'
            current={currentPage}
            total={totalItems}
            pageSize={20}
            onChange={onchangePage}
        />
    );
};

export default PaginationMovies;
