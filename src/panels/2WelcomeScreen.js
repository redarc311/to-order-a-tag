import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout} from '@vkontakte/vkui';
import '../style.css';

// Человек залогинился. Нужно обратиться к нему по ФИО и уже потом говорить, что мы предлагаем.
//{this.props.fetchedUser &&
//	<Group title="Результат из VK Connect">
//		<ListItem
//			before={this.props.fetchedUser.photo_200 ? <Avatar src={this.props.fetchedUser.photo_200}/> : null}
//			description={this.props.fetchedUser.city && this.props.fetchedUser.city.title ? this.props.fetchedUser.city.title : ''}
//		>
//			{`${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}
//		</ListItem>
//	</Group>};


const WelcomeScreen = ({id, go, fetchedUser}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			О КОНСТРУКТОРЕ
		</PanelHeader>



		<Group className="Group">
			
			<p className="p">Мы предлагаем Вам самостоятельно создать макет бирки для печати. Если у вас возникли вопросы, то
                        напишите нам, и мы с радостью ответим.</p>
			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button className="Button2"size="xl" stretched level="2" onClick={go} data-to="home">Назад</Button>
					<Button className="Button2"size="xl" stretched level="2" onClick={go} data-to="typeSelection">Далее</Button>
				</Div>	
      	    </FixedLayout>
		</Group>
	</Panel>
);

WelcomeScreen.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.objectOf.isRequired,
};

export default WelcomeScreen;
