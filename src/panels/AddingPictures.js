import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout} from '@vkontakte/vkui';
import './AddingPictures.css';

const AddingPictures = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ДОБАВЬТЕ <strong>КАРТИНКУ</strong>
		</PanelHeader>
		<Group className="Group">
		Сюда добавляем маленькую область View на самый верх.
		Ниже делаем HorizontalScroll для отрисовки длинныго списка из иконок.
		
		Делаем диалог выбора картинки из галереи или загрузку файла. File.
		и еще ниже делаем пояснение

		<p>Помните, что четкость печати напрямую зависит от качества изображения</p>
			

			

			<FixedLayout vertical="bottom">
				<Div style={{display: 'flex'}}>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="textColorSelection">Назад</Button>
					<Button className="Button" size="xl" stretched level="2" onClick={go} data-to="backgroundColorSelection">Далее</Button>
				</Div>
			</FixedLayout>
		</Group>
	</Panel>
);


AddingPictures.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default AddingPictures;
