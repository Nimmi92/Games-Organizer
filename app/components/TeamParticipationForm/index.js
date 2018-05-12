import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from '../Question';
import TextBox from '../TextBox';
import { Route } from 'react-router-dom';
import {withRouter} from "react-router-dom";

class TeamParticipationForm extends React.Component { 
	constructor(props) {
		super();
	}

	shouldComponentUpdate() {
	    return true;
	}

	createTeamMembers = () => {
		var teamMembers = [];
		var minLength = this.props.selectedGame.minTeamSize;
		var maxLength = this.props.selectedGame.maxTeamSize;
		for(var i=1; i<=maxLength; i++) {
			teamMembers.push(<div key={`teamMemberWrapper${i}`}>
				<Question text={i===1 ? `Member ${i} (POC)` : `Member ${i}`} id={`teamMember${i}`} 
				isRequired={i<=minLength ? true : false } />
				<TextBox placeholder={`Enter team member ${i} full name`} maxLength="30" id={`teamMember${i}Name`} /></div>)
		}
		return teamMembers;
	}

	render() {
		return (
			<div>
				<Question text="Team Name" isRequired={true}/>
				<TextBox placeholder="Enter your Team name" maxLength="30"/>
				{this.createTeamMembers()}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    selectedGame: state.selectedGame, 
  }
}

export default connect(mapStateToProps)(TeamParticipationForm);
