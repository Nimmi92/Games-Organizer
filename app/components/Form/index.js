import React from 'react';
import PropTypes from 'prop-types';


class Form extends React.Component { 
	constructor(props) {
		super();
	}
	render() {
		return (
			<form id={this.props.id}>{this.props.children}</form>
			)
	}
}

Form.propTypes = {
};

export default Form;
