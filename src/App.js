import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

// Тут импорты описания страниц
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

//начало приложения

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			activePanel: 'home',
			fetchedUser: null,
		};
	}
// так. Тут определяется событие когда компонент прорисован на экране
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

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

//самое интересное. Рендерим экраны
	render() {
		return (			
			<View activePanel={this.state.activePanel}>
				<Home id="home" go={this.go} />
				<WelcomeScreen id="welcomeScreen" go={this.go} />
				<TypeSelection id="typeSelection" go={this.go} /> 	
				<MaterialSelection id="materialSelection" go={this.go} />
				<ViewSelection id="viewSelection" go={this.go} />
				<ShapeSelection id="shapeSelection" go={this.go} />
				<SizeSelection id="sizeSelection" go={this.go} /> 
				<FontSelection id="fontSelection" go={this.go} />
				<TextColorSelection id="textColorSelection" go={this.go} />
				<AddingPictures id="addingPictures" go={this.go} />  
				<BackgroundColorSelection id="backgroundColorSelection" go={this.go} />
				<SendLayout id="sendLayout" go={this.go} />
			</View>
		);
	}
}

export default App;