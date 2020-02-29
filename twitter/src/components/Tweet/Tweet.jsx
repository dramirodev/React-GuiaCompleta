import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import moment from 'moment';

import './Tweet.scss';

const Tweet = ({ tweet: { name, tweet, time }, index, deleteTweet }) => {
    return (
        <Card className='tweet'>
            <CardContent>
                <div className='tweet__header'>
                    <h5>{name}</h5>
                    <Delete onClick={() => deleteTweet(index)} />
                </div>
                <p>{tweet}</p>
                <div className='tweet__date-add-tweet'>
                    {moment(time).format('DD/MM/YYY HH:mm')}
                </div>
            </CardContent>
        </Card>
    );
};

export default Tweet;
