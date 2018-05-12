import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question';
import TextBox from '../TextBox';


class SingleParticipationForm extends React.Component { 
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Question text="Full Name" isRequired={true}/>
				<TextBox placeholder="Enter your full name" maxLength="30"/>
			</div>
		)
	}
}

SingleParticipationForm.propTypes = {
}

export default SingleParticipationForm;
