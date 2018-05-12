import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SingleParticipationForm from '../SingleParticipationForm';
import TeamParticipationForm from '../TeamParticipationForm';


class RadioButton extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			selectedOption :  this.props.id[0]
		}
	}

  	handleOptionChange = (changeEvent) => {
  	  var participateAs = changeEvent.target.value;
  	  this.setState({
			selectedOption :  participateAs
		})
  	  this.props.onChangeGameType(participateAs)
	}

	createRadioButtons = () => {
		var radioButtons = [];
		var length = this.props.id && this.props.id.length;
		for(var i=0;i<length;i++) {
			radioButtons.push(<div key={this.props.id[i]}>
				<input type="radio" 
				name={this.props.name} 
				value={this.props.value[i]} 
				id={this.props.id[i]} 
				ref={(selectedVal)=>this.selectedVal=selectedVal}
				checked={this.state.selectedOption === this.props.value[i]}
				onChange={this.handleOptionChange} />
				<label htmlFor={this.props.id[i]}>{this.props.label[i]}</label></div>)
		}
	    return radioButtons;
  	}

	render() {
		return (
			<div>
				{this.createRadioButtons()}
			</div>
			)
	}
}

RadioButton.propTypes = {
	
};


export default RadioButton;
