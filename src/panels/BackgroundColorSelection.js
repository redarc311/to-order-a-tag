import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout} from '@vkontakte/vkui';
import './BackgroundColorSelection.css';

const BackgroundColorSelection = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ВЫБЕРИТЕ <strong>ЦВЕТ ФОНА</strong>
		</PanelHeader>
		<Group className="Group">
			
			

			

			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="addingPictures">Назад</Button>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="sendLayout">Далее</Button>
				</Div>
			</FixedLayout>
		</Group>
	</Panel>
);


BackgroundColorSelection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default BackgroundColorSelection;
