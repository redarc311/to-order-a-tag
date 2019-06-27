import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, List, Cell, FixedLayout} from '@vkontakte/vkui';
import '../style.css';
import bumYarlik from '../img/bumYarlik.svg';
import nakleyka from '../img/nakleyka@4x.svg';
import prishivnaya from '../img/prishivnaya.svg';
import termo from '../img/termo@4x.svg';
//Тут мы поставим несколько кнопок и при нажатии на однук из них будем выводить условным рендерингом InfoRow с информацией.

const TypeSelection = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ВЫБЕРИТЕ <strong>ТИП</strong>
		</PanelHeader>
		<Group className="Group1">

			<button id='button'>проверка</button>

				<Div style={{display: 'flex'}}>
					<Button className="Button" after={<img src={prishivnaya} alt="prishivnaya"/>} size="xl" stretched level="2" onClick={go} data-to="welcomeScreen">ПРИШИВНАЯ</Button>
				</Div>
				<Div style={{display: 'flex'}}>
					<Button className="Button" after={<img src={bumYarlik} alt="bumYarlik"/>}  size="xl" stretched level="2" onClick={go} data-to="welcomeScreen">БУМАЖНЫЙ ЯРЛЫК</Button>
				</Div>					
				<Div style={{display: 'flex'}}>
					<Button className="Button" after={<img src={termo} alt="termo"/>}  size="xl" stretched level="2" onClick={go} data-to="welcomeScreen">ТЕРМО</Button>
				</Div>
				<Div style={{display: 'flex'}}>
					<Button className="Button" after={<img src={nakleyka} alt="nakleyka"/>}  size="xl" stretched level="2" onClick={go} data-to="welcomeScreen">НАКЛЕЙКА</Button>
				</Div>

				<List>
                	<Cell multiline>A Series of Unfortunate Events, Archer, Brooklyn Nine-Nine, Doctor Who, Game of Thrones</Cell>
                </List>


			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="welcomeScreen">Назад</Button>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="materialSelection">Далее</Button>
				</Div>
			</FixedLayout>
		</Group>
	</Panel>
);


TypeSelection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default TypeSelection;
