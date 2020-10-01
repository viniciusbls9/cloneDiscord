import React from 'react';

import { Container, FirstBox, HashtagIcon, Span, SecondyBox, InviteIcon, SettingsIcon } from './styles';

export interface Props {
    channelName: string;
    selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <FirstBox>
                <HashtagIcon />
                <Span>{channelName}</Span>
            </FirstBox>

            <SecondyBox>
                <InviteIcon />
                <SettingsIcon />
            </SecondyBox>
        </Container>
    );
}

export default ChannelButton;