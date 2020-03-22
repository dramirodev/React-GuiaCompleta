import React, { useState } from 'react';

export const Title = ({ clicks, children }) => {
    return typeof children === 'function' ? (
        children(clicks)
    ) : (
        <span>{clicks}</span>
    );
};
export const Button = ({ type, onIncrement, onDecrement }) => {
    const action = () => (type === 'increment' ? onIncrement() : onDecrement());
    return (
        <button onClick={action}>
            {type === 'increment' ? 'Agregar' : 'Quitar'}
        </button>
    );
};
export const Counter = ({ children }) => {
    const [clicks, setClicks] = useState(0);

    const increment = () => setClicks(clicks + 1);
    const decrement = () => setClicks(clicks - 1);

    if (!children) {
        return <div>Debes agregar componentes</div>;
    }

    const _children = React.Children.map(children, (child) => {
        let props = {};

        if (child.type === Title) {
            props.clicks = clicks;
        }

        if (child.type === Button) {
            props.onIncrement = increment;
            props.onDecrement = decrement;
        }
        return React.cloneElement(child, props);
    });

    return _children;
};
