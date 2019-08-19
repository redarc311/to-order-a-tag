import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout} from '@vkontakte/vkui';
import '../style.css';
import { Panel as ColorPickerPanel } from 'rc-color-picker';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

function onChange(obj) {
	console.log(obj);
  };
function changeHandler(colors) {
	console.log(colors);
  };

const BackgroundColorSelection = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ВЫБЕРИТЕ <strong>ЦВЕТ ФОНА</strong>
		</PanelHeader>
		<Group className="Group">
			<Div style={{margin: '20px 20px 20px', textAlign: 'center'}}>
					Выбор цвета
					<div style={{ backgroundColor: '#E27974', padding: 20 }}>
						<ColorPickerPanel alpha={80} color={'#477898'} onChange={onChange} mode="HSB" />
					</div>
			</Div>
			<ColorPicker color={'#36c'} onChange={changeHandler} >
				<Button className="Button"size="xl" level="2">
					Создай свою бирку!!!
				</Button>
			</ColorPicker>

			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button 
						className="Button" 
						size="xl" 
						stretched 
						level="2" 
						onClick={go} 
						data-to="addingPictures"
					>Назад</Button>
					<Button 
						className="Button" 
						size="xl" 
						stretched 
						level="2" 
						onClick={go} 
						data-to="sendLayout"
					>Далее</Button>
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
