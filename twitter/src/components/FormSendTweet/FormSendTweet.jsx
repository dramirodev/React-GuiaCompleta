import React, { useState } from 'react';
import './FormSendTweet.scss';
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';

const FormSendTweet = React.forwardRef(({ sendTweet }, ref) => {
    const [formValue, setFormValue] = useState({
        name: '',
        tweet: '',
    });

    const onFormChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <div className='form-send-tweet' ref={ref}>
            <h2 className='form-send-tweet__title'>Enviar Tweet</h2>
            <form
                onSubmit={(event) => sendTweet(event, formValue)}
                className='form-send-tweet__form'
                onChange={onFormChange}
            >
                <FormControl>
                    <FormGroup>
                        <TextField
                            className='form-send-tweet__form-name'
                            type='texto'
                            name='name'
                            placeholder='Nombre de usuario'
                            margin='normal'
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            className='form-send-tweet__form-textarea'
                            name='tweet'
                            placeholder='Escribe tu tweet'
                            margin='normal'
                            multiline
                            rows='6'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                        >
                            Enviar Formulario
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
});

export default FormSendTweet;
