import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ContenedorResultado, TextoResultado } from '../utils/styles';

const Resultado = ({ price }) => {
    if (!price) {
        return null;
    }

    return (
        <ContenedorResultado>
            <TransitionGroup component='span' className='resultado'>
                <CSSTransition
                    classNames='resultado'
                    key={price}
                    timeout={{ enter: 500, exit: 500 }}
                >
                    <TextoResultado>
                        Precio:{' '}
                        <span>
                            {new Intl.NumberFormat('es-ES', {
                                style: 'currency',
                                currency: 'EUR',
                            }).format(price)}
                        </span>
                    </TextoResultado>
                </CSSTransition>
            </TransitionGroup>
        </ContenedorResultado>
    );
};

export default Resultado;
