import React from 'react';
import ChannelMessage from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages>
                <ChannelMessage
                    author="Vinicius Benedito"
                    date="21/06/2020"
                    content="Hoje é meu aniversário"
                >

                </ChannelMessage>

            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;