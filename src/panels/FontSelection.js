import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout} from '@vkontakte/vkui';
import '../style.css';

const FontSelection = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ВЫБЕРИТЕ <strong>ШРИФТ</strong>
		</PanelHeader>
		<Group className="Group">
			
			Тут используем Input.

			

			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="shapeSelection">Назад</Button>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="textColorSelection">Далее</Button>
				</Div>
			</FixedLayout>
		</Group>
	</Panel>
);


FontSelection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default FontSelection;
