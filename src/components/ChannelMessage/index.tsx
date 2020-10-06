import React from 'react';

import { Container, Avatar, Message, Header, Strong, Span, Content, Time } from './styles';


export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({ author, date, content, hasMention, isBot }) => {
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''} />

            <Message>
                <Header>

                    <Strong>{author}</Strong>
                    {isBot && <Span>Bot</Span>}
                    <Time>{date}</Time>

                </Header>
                <Content>{content}</Content>
            </Message>
        </Container>
    );
}

export default ChannelMessage;