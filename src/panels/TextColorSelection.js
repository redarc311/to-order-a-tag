import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout} from '@vkontakte/vkui';
import './TextColorSelection.css';

const TextColorSelection = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ВЫБЕРИТЕ <strong>ЦВЕТ ТЕКСТА</strong>
		</PanelHeader>
		<Group className="Group">
			
			

			

			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="fontSelection">Назад</Button>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="addingPictures">Далее</Button>
				</Div>
			</FixedLayout>
		</Group>
	</Panel>
);


TextColorSelection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default TextColorSelection;
