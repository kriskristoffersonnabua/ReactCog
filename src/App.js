import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './components/Switch';
import styled, { css } from 'styled-components';

const ReactLogo = styled.img`
    height: 40vmax;
    pointer-events: none;

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    ${props =>
        props.rotate &&
        css`
            animation: App-logo-spin infinite 20s linear;
        `}
`;

function App() {
    const [rotate, toggleRotate] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <ReactLogo src={logo} alt="logo" rotate={rotate} />
                <Switch toggleRotate={toggleRotate} />
            </header>
        </div>
    );
}

export default App;
