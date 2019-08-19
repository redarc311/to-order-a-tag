import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, FixedLayout, Input} from '@vkontakte/vkui';
import '../style.css';

//import DinamicFontPrint from '../MyComponents/DinamicFontPrint'
// Нужно попробовать. Это идея динамического ввода. 
//const Input = (props) => (
//	<input type="text" onChange={props.handleChange} />
//	)
//	
//	const Output = (props) => (
//	  <div>{props.text}</div>
//	)
//	
//	class App extends React.Component {
//	  constructor (props) {
//		super(props)
//		this.state = {}
//		this.handleChange = this.handleChange.bind(this)
//	  }
//	
//	  handleChange (e) {
//		this.setState({
//		  value: e.target.value
//		})
//	  }
//	
//	  render () {
//		return (
//		  <div>
//			<Input handleChange={this.handleChange} />
//			<Output text={this.state.value} />
//		  </div>
//		)
//	  }
//	}
//<DinamicFontPrint smooth content={'По идее сюда нужно ввести переменную в которую импут пишется'} />

const FontSelection = ({id, go}) => (
	<Panel id={id} style={{overflow: 'hidden'}}>
		<PanelHeader>
			ВЫБЕРИТЕ <strong>ШРИФТ</strong>
		</PanelHeader>

			<Group className="Group">

				Тут используем Input.
				

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
						<Button 
							className="Button" 
							size="xl" 
							stretched 
							level="2" 
							onClick={go} 
							data-to="textColorSelection"
						>Далее</Button>
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
