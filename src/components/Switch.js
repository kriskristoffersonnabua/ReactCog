import React, { useState } from 'react';
import { SwitchContainer, SwitchBall } from './SwitchStyles';

function Switch(props) {
    const [isOn, toggleOn] = useState(false);

    const toggleSwitch = () => {
        toggleOn(!isOn);
        props.toggleRotate(!isOn);
    };

    return (
        <SwitchContainer onClick={toggleSwitch}>
            <SwitchBall on={isOn} />
        </SwitchContainer>
    );
}

export default Switch;
