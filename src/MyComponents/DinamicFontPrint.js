import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '@vkontakte/vkui';

class DinamicFontPrint extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        inputText: '',
      }
      this.handleInput = this.handleInput.bind(this)
    }
   
   handleInput (event) {
     this.setState({
       inputText: event.target.value,
     })
   }
 
   render () {
     return (
       <div>
         <p>
           <Input value={this.state.inputText} onChange={this.handleInput} />
         </p>
         <div>
           <DinamicFontPrint smooth content={this.state.inputText} />
         </div>
         <div>
           <DinamicFontPrint content={this.state.inputText} />
         </div>
       </div>
     )
   }
 }

DinamicFontPrint.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default DinamicFontPrint;