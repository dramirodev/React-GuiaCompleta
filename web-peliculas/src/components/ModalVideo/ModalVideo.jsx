import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player';

import './ModalVideo.scss';

const ModalVideo = (props) => {
    const { videoKey, videoPlatform, isOpen, close } = props;
    const [urlVidedo, setUrlVidedo] = useState(null);

    useEffect(() => {
        switch (videoPlatform) {
            case 'YouTube':
                setUrlVidedo(`https://youtu.be/${videoKey}`);
                break;
            case 'Vimeo':
                setUrlVidedo(`https://vimeo.com/${videoKey}`);
            default:
                break;
        }
    }, [videoKey, videoPlatform]);
    console.log(urlVidedo);
    return (
        <Modal
            className='modal-video'
            visible={isOpen}
            centered
            onCancel={close}
            footer={false}
        >
            <ReactPlayer url={urlVidedo} controls />
        </Modal>
    );
};

export default ModalVideo;
