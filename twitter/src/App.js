import React, { useState, useEffect } from 'react';
import { Container, Snackbar } from '@material-ui/core';
import Header from './components/Header';
import SendTweet from './components/SendTweet';
import { TWEET_STORAGE } from './utils/constants.js';

function App() {
    const [toastProps, setToastProps] = useState({
        open: false,
        text: null,
    });

    const [allTweets, setAllTweets] = useState([]);

    useEffect(() => {
        const allTweetsStorage = JSON.parse(
            localStorage.getItem(TWEET_STORAGE),
        );
        if (allTweetsStorage.length) {
            setAllTweets(allTweetsStorage);
        }
    }, []);

    return (
        <Container className='tweets-simulator' maxWidth={false}>
            <Header />
            <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={toastProps.open}
                autoHideDuration={1000}
                message={<span id='message-id'>{toastProps.text}</span>}
                onClose={(toastProps) =>
                    setToastProps({ ...toastProps, open: false })
                }
            />
        </Container>
    );
}

export default App;
