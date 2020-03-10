import React from 'react';
import { List, Avatar, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import './MovieList.scss';
import { DB_MOVIES_DATA } from '../../utils/constats';

const MovieList = ({ peliculas, title }) => {

    if (peliculas.loading || !peliculas.data) {
        return <Loading />;
    }
    return (
        <List
            className='movie-list'
            size='default'
            header={<h2>{title}</h2>}
            bordered
            dataSource={peliculas.data.results}
            renderItem={(movie) => <RenderMovie movie={movie} />}
        ></List>
    );
};

function RenderMovie(props) {
    const {
        movie: { id, title, poster_path },
    } = props;
    const posterPath = `${DB_MOVIES_DATA.url_imagen}${poster_path}`;
    return (
        <List.Item className='movie-list__movie'>
            <List.Item.Meta
                avatar={<Avatar src={posterPath} />}
                title={<Link to={`/movie/${id}`}>{title}</Link>}
            />
            <Link to={`/movie/${id}`}>
                <Button
                    type='primary'
                    shape='circle'
                    icon={<RightOutlined />}
                />
            </Link>
        </List.Item>
    );
}

export default MovieList;
