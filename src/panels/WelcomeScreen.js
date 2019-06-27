import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout} from '@vkontakte/vkui';
import './WelcomeScreen.css';

const WelcomeScreen = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			О КОНСТРУКТОРЕ
		</PanelHeader>
		<Group className="Group">

			<p className="p1">Мы предлагаем Вам самостоятельно создать макет бирки для печати. Если у вас возникли вопросы, то
                        напишите нам, и мы с радостью ответим.</p>
			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button className="Button"size="xl" stretched level="2" onClick={go} data-to="home">Назад</Button>
					<Button className="Button"size="xl" stretched level="2" onClick={go} data-to="typeSelection">Далее</Button>
				</Div>	
      	    </FixedLayout>
		</Group>
	</Panel>
);

WelcomeScreen.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default WelcomeScreen;
