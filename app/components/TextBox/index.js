import React from 'react';
import PropTypes from 'prop-types';


class TextBox extends React.Component { 
	constructor(props) {
		super();
	}
	render() {
		return (
			<input type="text" placeholder={this.props.placeholder} maxLength={this.props.maxLength} id={this.props.id}/>
			)
	}
}

TextBox.propTypes = {
};

export default TextBox;
