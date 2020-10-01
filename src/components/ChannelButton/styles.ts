import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    padding: 5px 3px;
    border-radius: 5px;
    background-color: transparent;
    transition: background-color .2s;

    &:hover, &:active {
        background-color: var(--quinary);

    }
`;

export const FirstBox = styled.div`
    display: flex;
    align-items: center;
`;

export const HashtagIcon = styled(Hashtag)`

`;

export const Span = styled.span`
    margin-left: 5px;
    color: var(--senary);

    &:hover {
        color: var(--white);        
    }
`;

export const SecondyBox = styled.div`
    display: flex;
    align-items: center;
`;

export const InviteIcon = styled(PersonAdd)`

`;

export const SettingsIcon = styled(Settings)`

`;
