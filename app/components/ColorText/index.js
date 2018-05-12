import React from 'react';
import PropTypes from 'prop-types';


class ColorText extends React.Component { 
	constructor(props) {
		super();
	}
	render() {
		return (
			<span>{this.props.children}</span>
			)
	}
}

ColorText.propTypes = {
  //color: PropTypes.string
};

export default ColorText;
