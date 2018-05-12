/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import GameTile from 'components/GameTile';
import Carrom from 'images/carrom.jpg';
import TableTennis from 'images/tabletennis.jpg';
import Button from 'components/Button';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props); 
  }

  createGameTiles() {
    return this.props.games.map((game) => {
          return <GameTile 
                  ref='gameTile'
                  key={game.gameName} 
                  gameName={game.gameName} 
                  src={game.imgSrc} 
                  alt={game.altText}/>
    })
  }

  render() {
    return (
      <div>
         {this.createGameTiles()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps)(HomePage);
