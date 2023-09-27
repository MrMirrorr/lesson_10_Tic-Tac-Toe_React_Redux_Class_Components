import styles from './Info.module.css';
import { useSelector } from 'react-redux';
import { boardSelector, currentPlayerSelector } from '../../selectors';
import { checkVictory } from '../../helpers';

export const Info = () => {
	const board = useSelector(boardSelector);
	const currentPlayer = useSelector(currentPlayerSelector);
	const winner = checkVictory(board);

	const renderInfo = () => {
		let msg;

		if (winner) {
			msg = `Победил: ${winner.winnerPlayer}`;
		} else if (board.includes(null)) {
			msg = `Сейчас ходит: ${currentPlayer}`;
		} else {
			msg = `Ничья!`;
		}

		return msg;
	};

	return <p className={styles.info}>{renderInfo()}</p>;
};
