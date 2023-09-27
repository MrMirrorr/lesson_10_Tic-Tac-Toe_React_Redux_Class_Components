import { combineReducers } from 'redux';
import { boardReducer } from './board-reducer';
import { currentPlayerReducer } from './current-player-reducer';

export const rootReducer = combineReducers({
	board: boardReducer,
	currentPlayer: currentPlayerReducer,
});
