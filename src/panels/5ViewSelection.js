import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout} from '@vkontakte/vkui';
import '../style.css';

const ViewSelection = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ВЫБЕРИТЕ <strong>ВИД</strong>
		</PanelHeader>
		<Group className="Group">

			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button 
						className="Button" 
						size="xl" 
						stretched 
						level="2" 
						onClick={go} 
						data-to="materialSelection"
					>Назад</Button>
					<Button 
						className="Button" 
						size="xl" 
						stretched 
						level="2" 
						onClick={go} 
						data-to="shapeSelection"
					>Далее</Button>
				</Div>
			</FixedLayout>
		</Group>
	</Panel>
);


ViewSelection.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default ViewSelection;
