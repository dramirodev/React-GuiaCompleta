import React, { useState } from 'react';
import './SendTweet.scss';
import { Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import ModalContainer from '../ModalContainer';
import moment from 'moment';
const SendTweet = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    };
    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (
        <div className='send-tweet'>
            <Fab
                className='send-tweet__open-modal'
                color='primary'
                aria-label='add'
                onClick={openModal}
            >
                <Add />
            </Fab>
            <ModalContainer
                isOpenModal={isOpenModal}
                closeModal={closeModal}
            >
                <div>gfdsgsdgsdfg</div>
            </ModalContainer>
        </div>
    );
};

export default SendTweet;
