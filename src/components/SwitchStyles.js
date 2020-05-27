import styled, { css } from 'styled-components';

export const SwitchContainer = styled.div`
    width: 100px;
    height: 50px;
    border-radius: 50px;
    background: #fff;
    box-shadow: -1px 2px 2px 2px rgba(0, 0, 0, 0.1);
    padding: 10px;
    position: relative;
`;

export const SwitchBall = styled.span`
    width: 40px;
    height: 40px;
    background: #eaeaea;
    border-radius: 100px;
    position: absolute;
    left: 10px;
    top: 15px;
    transition: left 0.2s ease-in, background 0.2s ease-in;
    ${props =>
        props.on &&
        css`
            background: linear-gradient(45deg, #0cf61e, #61dafb);
            left: 70px;
        `}
`;
