import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';
import '../style.css';
import { Panel, Button, Group, Div, PanelHeader } from '@vkontakte/vkui';

const Home = ({ id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			"Tag Constructor"
		</PanelHeader>
		
		<Group className="Group">
			
			<Div>
				<img className="logo" src={logo} alt="Birki Firma Logo"/>
				
				<p className="p">Добро пожаловать!!!</p>

				<Button className="Button"size="xl" level="2" onClick={go} data-to="welcomeScreen">
					Создай свою бирку!!!
				</Button>
			</Div>

		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
