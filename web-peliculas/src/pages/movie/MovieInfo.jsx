import React, { useState } from 'react';
import moment from 'moment';
import ModalVideo from '../../components/ModalVideo';
import useFetch from '../../hooks/useFetch';
import { DB_MOVIES_DATA } from '../../utils/constats.js';
import { Button } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';

const MovieInfo = ({ title, id, release_date, overview, genres }) => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const videoMovie = useFetch(
        `${DB_MOVIES_DATA.url}/movie/${id}/videos?api_key=${DB_MOVIES_DATA.api_key}&language=es-ES`,
    );

    const openModal = () => setIsVisibleModal(true);
    const closeModal = () => setIsVisibleModal(false);
    const renderVideo = () => {
        if (videoMovie.data) {
            if (videoMovie.data.results.length) {
                return (
                    <>
                        <Button icon={<PlayCircleFilled />} onClick={openModal}>
                            Ver Trailer
                        </Button>
                        <ModalVideo
                            videoKey={videoMovie.data.results[0].key}
                            videoPlatform={videoMovie.data.results[0].site}
                            isOpen={isVisibleModal}
                            close={closeModal}
                        />
                    </>
                );
            }
        }
    };
    return (
        <>
            <div className='movie__info-header'>
                <h1>
                    {title}{' '}
                    <span>
                        {moment(release_date, 'YYYY-MM-DD').format('YYYY')}
                    </span>
                </h1>
                {renderVideo()}
            </div>
            <div className='movie__info-content'>
                <h3>Información General</h3>
                <p>{overview}</p>
                <h3>Generos</h3>
                <ul>
                    {genres.map((g) => (
                        <li key={g.id}>{g.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MovieInfo;
