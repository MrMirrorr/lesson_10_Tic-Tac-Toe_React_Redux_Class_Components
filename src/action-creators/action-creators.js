import {
	CHANGE_CURRENT_PLAYER,
	RESET_CURRENT_PLAYER,
	CLEAR_BOARD,
	SET_BOARD,
} from '../action-types';

export const setBoard = (idx, value) => ({
	type: SET_BOARD,
	payload: { idx, value },
});

export const clearBoard = () => ({
	type: CLEAR_BOARD,
});

export const changeCurrentPlayer = (player) => ({
	type: CHANGE_CURRENT_PLAYER,
	payload: player,
});

export const resetCurrentPlayer = () => ({
	type: RESET_CURRENT_PLAYER,
});
