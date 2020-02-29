import React, { useState, useEffect } from 'react';
import { Container, Snackbar } from '@material-ui/core';
import Header from './components/Header';
import SendTweet from './components/SendTweet';
import ListTweets from './components/ListTweets';
import { TWEET_STORAGE } from './utils/constants.js';

function App() {
    const [toastProps, setToastProps] = useState({
        open: false,
        text: null,
    });

    const [allTweets, setAllTweets] = useState([]);
    const [reloadTweet, setReloadTweet] = useState(true);

    useEffect(() => {
        const allTweetsStorage = localStorage.getItem(TWEET_STORAGE);
        const allTweetsArray = allTweetsStorage
            ? JSON.parse(allTweetsStorage)
            : null;
        if (reloadTweet || allTweetsArray) {
            setAllTweets(allTweetsArray);
            setReloadTweet(false);
        }
    }, [reloadTweet, setReloadTweet]);

    const deleteTweet = (index) => {
        allTweets.splice(index, 1);
        setAllTweets(allTweets);
        if (allTweets.length === 0) {
            localStorage.clear();
        } else {
            localStorage.setItem(TWEET_STORAGE, JSON.stringify(allTweets));
        }
        setReloadTweet(true);
    };

    return (
        <Container className='tweets-simulator' maxWidth={false}>
            <Header />
            <SendTweet
                setToastProps={setToastProps}
                allTweets={allTweets}
                setReloadTweet={setReloadTweet}
            />
            <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
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
