import React from 'react';
import PropTypes from 'prop-types';
import ColorText from '../colorText';

class Question extends React.Component { 
	constructor(props) {
	    super(); 
	}

	showAstrisk() {
		if(this.props.isRequired)
			return '*';
	}
	render() {
		var redColor = '#f00';
		return (
				<div>
					<p id={this.props.id}>{this.props.text} <ColorText color='redColor'>{this.showAstrisk()}</ColorText></p>	
				</div>
			)
	}
}

Question.propTypes = {
  test: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default Question;