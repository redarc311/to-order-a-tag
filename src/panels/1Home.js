import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';
import '../style.css';
import { Panel, Button, Group, Div, PanelHeader } from '@vkontakte/vkui';

//Тут добавим авторизацию в ВК или указание контактных данных на модальном окне из гайда. 
//Это всё, что бы можно было использовать и вне ВК окна.
// Выглядит так: сперва кнопка авторизации и передачи данных в пропсы из ВК. ДЛя ВК это fetchedUser для всего остального имя/фамилия и почта.

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
