import React from 'react';
import { Counter, Title, Button } from './components/Counter';

function App() {
    return (
        <div>
            <Counter>
                <Title>
                    {(click) => {
                        return <h1>{click}</h1>;
                    }}
                </Title>
                <Button type='increment' />
                <Button type='decrement' />
            </Counter>
        </div>
    );
}

export default App;
