import React from 'react';

import logo from '../../assets/logo.svg';

import { Button, Img } from './styles';

export interface Props {
	selected?: boolean;
	isHome?: boolean;
	hasNotifications?: boolean;
	mentions?: number;
}

const ServerButton: React.FC<Props> = ({ selected, isHome, hasNotifications, mentions }) => {
	return (
		<Button
			isHome={isHome}
			hasNotifications={hasNotifications}
			mentions={mentions}
			className={selected ? 'active' : ''}
		>
			{isHome && <Img src={logo} alt="Rocketseat" />}
		</Button>
	);
}

export default ServerButton;