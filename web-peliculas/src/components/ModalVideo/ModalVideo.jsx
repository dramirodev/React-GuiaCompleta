import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player';

import './ModalVideo.scss';

const ModalVideo = (props) => {
    const { videoKey, videoPlatform, isOpen, close } = props;
    return (
        <Modal
            className='modal-video'
            visible={isOpen}
            centered
            onCancel={close}
            footer={false}
        >
            <ReactPlayer />
        </Modal>
    );
};

export default ModalVideo;
