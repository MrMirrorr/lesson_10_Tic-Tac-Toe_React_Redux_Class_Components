import styles from './Board.module.css';
import { useSelector } from 'react-redux';
import { boardSelector } from '../../selectors';
import { Cell } from '../../components';

export const Board = () => {
	const board = useSelector(boardSelector);

	return (
		<div className={styles.board}>
			{board.map((cell, idx) => (
				<Cell key={idx} idx={idx} value={cell} />
			))}
		</div>
	);
};
