import React from 'react';
//import connect from '@vkontakte/vkui-connect';
import connect from '@vkontakte/vkui-connect-promise';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/1Home';
import WelcomeScreen from './panels/2WelcomeScreen';
import TypeSelection from './panels/3TypeSelection';
import MaterialSelection from './panels/4MaterialSelection';
import ViewSelection from './panels/5ViewSelection';
import ShapeSelection from './panels/6ShapeSelection';
import SizeSelection from './panels/7SizeSelection';
import FontSelection from './panels/8FontSelection';
import TextColorSelection from './panels/9TextColorSelection';
import AddingPictures from './panels/10AddingPictures';
import BackgroundColorSelection from './panels/11BackgroundColorSelection';
import SendLayout from './panels/12SendLayout';

connect.send('VKWebAppInit', {});
//начало приложения
//
//Бред, но выставить полный список полей в пропсы приложения?
//У нас получится довольно таки много пропсов, но мы будем передавать их в дочерние панели.
//Например выбор вида...
//о... или не так. сделать пропс типа сеттингс. Прописать ему тип массива и писать в поля данные 
//для передачи...
//
//const fetchedUser = {
//	"type": "VKWebAppGetUserInfoResult",
//	"data": {
//		"id": 4746829,
//		"first_name": "Павел",
//		"last_name": "Розентальс",
//		"sex": 2,
//		"city": {
//			"id": 73,
//			"title": "Красноярск"
//		},
//		"country": {
//			"id": 1,
//			"title": "Россия"
//		},
//		"photo_100": "https://sun9-43.userapi.com/c604721/v604721829/1ee5c/GVgctVo_LAo.jpg?ava=1",
//		"photo_max_orig": "https://sun9-26.userapi.com/c604721/v604721829/1ee59/F5Jz-GBOM_U.jpg?ava=1",
//		"bdate": "31.5",
//		"photo_200": "https://sun9-13.userapi.com/c604721/v604721829/1ee5b/a43KZTzWLeQ.jpg?ava=1",
//		"timezone": 7
//	}
//}
//У нас все настройки в пропсах. Нужно в конце получить эти данные в объект конечной отправки и отдать на выход приложения для отправки.

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			activePanel: 'home',
//			fetchedUser: {},
			UserAutorization: "",
			Type: "",
			Material: "",
			View: "",
			Shape: "",
			SizeWidth: null,
			SizeHight: null,
			Font: "",
			FontSize: null,
			TextColor: "",
			Pictures: "url",
			BackgroundColor: "",
			userFromVkApi: ""
		};
	}
// так. Тут определяется событие захвата пользователя вконтакта, когда компонент прорисован на экране
	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	sendLayout = (e) => {
		//функция отправки сообщения в ВК
		//получает аргументы из стейтов
		//и формирует текст конкатенацией
		//
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to });
		console.log('переход к следующей странице');
	};

	render() {
		return (			
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
				<WelcomeScreen fetchedUser={this.state.fetchedUser} id="welcomeScreen" go={this.go} />
				<TypeSelection id="typeSelection" go={this.go} /> 	
				<MaterialSelection id="materialSelection" go={this.go} />
				<ViewSelection id="viewSelection" go={this.go} />
				<ShapeSelection id="shapeSelection" go={this.go} />
				<SizeSelection id="sizeSelection" go={this.go} /> 
				<FontSelection id="fontSelection" go={this.go} />
				<TextColorSelection id="textColorSelection" go={this.go} />
				<AddingPictures id="addingPictures" go={this.go} />  
				<BackgroundColorSelection id="backgroundColorSelection" go={this.go} />
				<SendLayout id="sendLayout" fetchedUser={this.state.fetchedUser} go={this.go} />
			</View>
		);
	}
}
export default App;