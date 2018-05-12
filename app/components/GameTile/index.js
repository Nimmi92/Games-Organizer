/**
 *
 * GameTile.js
 *
 * Renders a game tile, enforcing the usage of the game image, button links(rules button, participate button)
 */

import React from 'react'; 
import { Route } from 'react-router-dom';
import {browserHistory} from 'react-router';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Img from '../Img';
import Button from '../Button';
import List from '../List';
import TileWrapper from './TileWrapper';
import { selectedGame } from '../../actions/index';

class GameTile extends React.Component { 
  constructor(props) {
     super(props);
  }

  handleRules = (event) => {
    event.preventDefault();
  }

  handleParticipate = (event) => {
    for(var i in this.props.games) {
      if(this.props.games[i].gameName === this.props.gameName) {
        this.props.selectedGame(this.props.games[i])
      }
    }
    //
    //console.log(this.props.gameName)
    //this.props.selectedGame(this.props);
    this.props.history.push("participate");
  }

  render(props) {
    return (
      <TileWrapper className={this.props.className}>
        <Img src={this.props.src} alt={this.props.alt}/>    
        <Button
        tileButton={true} 
        onClick={this.handleRules}>Rules</Button>
        <Button
        tileButton={true}
        onClick={this.handleParticipate}>Participate</Button>
      </TileWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: state.games 
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectedGame: selectedGame},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(withRouter(GameTile));
