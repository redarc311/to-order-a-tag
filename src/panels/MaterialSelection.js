import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, List, Cell, FixedLayout} from '@vkontakte/vkui';
import './MaterialSelection.css';

const MaterialSelection = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ВЫБЕРИТЕ <strong>МАТЕРИАЛ</strong>
		</PanelHeader>
		<Group className="Group">
			<Div style={{display: 'flex'}}>
				<Button className="Button" size="l" stretched style={{ marginRight: 8 }} level="2" onClick={go} data-to="typeSelection">САТИН</Button>
				<Button className="Button" size="l" stretched style={{ marginRight: 8 }} level="2" onClick={go} data-to="viewSelection">РЕПС</Button>
				<Button className="Button" size="l" stretched level="2" onClick={go} data-to="viewSelection">ХЛОПОК</Button>
			</Div>
			<Div style={{display: 'flex'}}>
				<Button className="Button" size="l" stretched style={{ marginRight: 8 }} level="2" onClick={go} data-to="typeSelection">СИЛИКОН</Button>
				<Button className="Button" size="l" stretched level="2" onClick={go} data-to="viewSelection">КОЖКАРТОН</Button>
			</Div>

			<List>
                <Cell multiline>A Series of Unfortunate Events, Archer, Brooklyn Nine-Nine, Doctor Who, Game of Thrones</Cell>
            </List>

			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="typeSelection">Назад</Button>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="viewSelection">Далее</Button>
				</Div>
			</FixedLayout>
		</Group>
	</Panel>
);


MaterialSelection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default MaterialSelection;
