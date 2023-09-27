import styles from './Cell.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { checkVictory } from '../../helpers';
import { players } from '../../constants';
import { changeCurrentPlayer, setBoard } from '../../action-creators';
import { boardSelector, currentPlayerSelector } from '../../selectors';

export const Cell = ({ value, idx }) => {
	const board = useSelector(boardSelector);
	const currentPlayer = useSelector(currentPlayerSelector);
	const dispatch = useDispatch();
	const winner = checkVictory(board);

	const isWinCell = () => {
		if (winner) {
			return winner.winIndexes && winner.winIndexes.includes(idx) ? true : false;
		}

		return false;
	};

	const handleClick = (idx) => {
		if (winner || board[idx]) return;

		const nextPlayer =
			currentPlayer === players.PLAYER_X ? players.PLAYER_O : players.PLAYER_X;

		dispatch(setBoard(idx, currentPlayer));
		dispatch(changeCurrentPlayer(nextPlayer));
	};

	return (
		<button
			className={`${styles.cell} ${isWinCell() ? styles.winCell : ''}`}
			onClick={() => handleClick(idx)}
		>
			{value}
		</button>
	);
};

Cell.propTypes = {
	value: PropTypes.string,
	idx: PropTypes.number,
};
