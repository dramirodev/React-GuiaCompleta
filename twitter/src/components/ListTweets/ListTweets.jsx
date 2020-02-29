import React from 'react';
import { Grid } from '@material-ui/core';
import Tweet from '../Tweet';
import './ListTweets.scss';

const ListTweets = ({ allTweets, deleteTweet }) => {
    return (
        <>
            {allTweets === null || allTweets.length === 0 ? (
                <div className='list-tweets-empty'>
                    <h2>No hay Tweets...</h2>
                </div>
            ) : (
                <Grid container spacing={3} className='list-tweets'>
                    {allTweets.map((tweet, index) => (
                        <Grid key={index} item xs={4}>
                            <Tweet
                                tweet={tweet}
                                index={index}
                                deleteTweet={deleteTweet}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default ListTweets;
