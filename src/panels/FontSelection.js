import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout, Input} from '@vkontakte/vkui';
import '../style.css';
import DynamicFont from 'react-dynamic-font';
import DinamicFontPrint from 'DinamicFontPrint'



const FontSelection = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ВЫБЕРИТЕ <strong>ШРИФТ</strong>
		</PanelHeader>

			<Group className="Group">

				Тут используем Input.
				<DinamicFontPrint smooth content={'По идее сюда нужно ввести переменную в которую импут пишется'} />

				<Input 
					top="Имя" 
					placeholder="Начните вводить текст"
					alignment="center"
					/>

				<FixedLayout vertical="bottom">
					<Div style={{display: 'flex'}}>
						<Button 
							className="Button" 
							size="xl" 
							stretched 
							level="2" 
							onClick={go} 
							data-to="shapeSelection"
						>Назад</Button>
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
