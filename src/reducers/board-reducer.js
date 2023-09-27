import { CLEAR_BOARD, SET_BOARD } from '../action-types';

export const initialState = Array(9).fill(null);

export const boardReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_BOARD:
			return [
				...state.slice(0, payload.idx),
				payload.value,
				...state.slice(payload.idx + 1),
			];

		case CLEAR_BOARD:
			return Array(9).fill(null);

		default:
			return state;
	}
};
