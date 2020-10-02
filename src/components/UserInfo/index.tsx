import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadPhoneIcon, SettingsIcon, Strong, Span } from './styles';


const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <Strong>Vinicius Benedito</Strong>
                    <Span>#2698</Span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadPhoneIcon />
                <SettingsIcon />
            </Icons>

        </Container>
    );
}

export default UserInfo;