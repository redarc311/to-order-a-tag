import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout} from '@vkontakte/vkui';
import '../style.css';

const ShapeSelection = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ВЫБЕРИТЕ <strong>ФОРМУ</strong>
		</PanelHeader>
		<Group className="Group">
			
			

			

			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="viewSelection">Назад</Button>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="sizeSelection">Далее</Button>
				</Div>
			</FixedLayout>
		</Group>
	</Panel>
);


ShapeSelection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default ShapeSelection;
