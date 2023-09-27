import { CHANGE_CURRENT_PLAYER, RESET_CURRENT_PLAYER } from '../action-types';
import { players } from '../constants';

const initialState = players.PLAYER_X;

export const currentPlayerReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHANGE_CURRENT_PLAYER:
			return payload;

		case RESET_CURRENT_PLAYER:
			return initialState;

		default:
			return state;
	}
};
