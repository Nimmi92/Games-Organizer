/*
 * ParticipatePage
 *
 * 
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

//import HomePage from '../HomePage/index';
import GameTile from 'components/GameTile';
import H2 from 'components/H2';
import Button from 'components/Button';
import Form from 'components/Form';
import Question from 'components/Question';
import RadioButton from 'components/RadioButton';
import SingleParticipationForm from 'components/SingleParticipationForm';
import TeamParticipationForm from 'components/TeamParticipationForm';


class ParticipatePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      participateAs : this.props.selectedGame.gameType[0]
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  handleRegistration = () => {

  }

  loadParticipationForm = (value) => {
    this.setState({participateAs : value})
  }

  render() {
    return (
     <div>
     <H2>{this.props.selectedGame.gameName} Registration</H2>
     <Form id="participateForm">
       <Question text="How you want to participate?" isRequired={true}/>
       <RadioButton label={this.props.selectedGame.gameType} value={this.props.selectedGame.gameType} name="participateAs" id={this.props.selectedGame.gameType}
        onChangeGameType={this.loadParticipationForm}
       />
       <div id="participateFormFields">
        {this.state.participateAs === 'Single' ? <SingleParticipationForm/> : <TeamParticipationForm/>}
       </div>
       <Button onClick={this.handleRegistration}>Register</Button>
     </Form>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedGame: state.selectedGame, 
  }
}

export default connect(mapStateToProps)(ParticipatePage);