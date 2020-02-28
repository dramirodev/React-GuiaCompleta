import React, { useState } from 'react';
import './SendTweet.scss';
import { Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import ModalContainer from '../ModalContainer';
import moment from 'moment';
import FormSendTweet from '../FormSendTweet';
import { TWEET_STORAGE } from '../../utils/constants.js';

const SendTweet = ({ setToastProps, allTweets }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    const sendTweet = (e, formValue) => {
        e.preventDefault();
        const { name, tweet } = formValue;
        let allTweet = [];
        if (allTweets.length) {
            allTweet = allTweets;
        }
        if (!name || !tweet) {
            setToastProps({
                open: true,
                text: 'WARNING: Todos los campos son obligatorios',
            });
        } else {
            formValue.time = moment();
            allTweet.push(formValue);
            localStorage.setItem(TWEET_STORAGE, JSON.stringify(allTweet));
            closeModal();
            setToastProps({
                open: true,
                text: 'SUCCESS: Tweet enviado correctamente',
            });
        }
        allTweet = [];
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
            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormSendTweet sendTweet={sendTweet} />
            </ModalContainer>
        </div>
    );
};

export default SendTweet;
