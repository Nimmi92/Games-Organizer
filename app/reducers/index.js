import {combineReducers} from 'redux';
import gamesReducer from './reducer-games';
import selectedGameReducer from './reducer-selected-game';

const allReducers = combineReducers({
	games: gamesReducer,
	selectedGame: selectedGameReducer
})

export default allReducers;