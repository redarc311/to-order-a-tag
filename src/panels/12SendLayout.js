import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout} from '@vkontakte/vkui';
import '../style.css';

function sendLayout(Arr) {
	console.log(Arr)
} 

const MaterialSelection = ({id, go, fetchedUser}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ОТПРАВКА ЗАКАЗА
		</PanelHeader>
		<Group className="Group">
			Вот сюда надо финальный скрипт воткнуть.

			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button 
						className="Button" 
						size="xl" 
						stretched 
						level="2" 
						onClick={go} 
						data-to="backgroundColorSelection"
					>Назад</Button>
					<Button 
						className="Button" 
						size="xl" 
						stretched 
						level="2" 
						onClick={sendLayout}
					>Отправить</Button>
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
