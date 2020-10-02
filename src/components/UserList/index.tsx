import React from 'react';

import { Container, Role, User, Avatar, Strong, Span } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot': ''} />
            <Strong>{nickname}</Strong>

            {isBot && <Span>Bot</Span>}
        </User>
    )
}


const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Guilherme Rodz" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Diego Fernandes" isBot />
        </Container>
    );
}

export default UserList;