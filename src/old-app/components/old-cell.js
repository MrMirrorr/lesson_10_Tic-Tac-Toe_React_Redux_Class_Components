import { Component } from 'react';
import { connect } from 'react-redux';
import { checkVictory } from '../../helpers';
import { players } from '../../constants';
import { changeCurrentPlayer, setBoard } from '../../action-creators';

class OldCellContainer extends Component {
	getWinner() {
		return checkVictory(this.props.board);
	}

	isWinCell() {
		if (this.getWinner) {
			return this.getWinner.winIndexes &&
				this.getWinner.winIndexes.includes(this.props.idx)
				? true
				: false;
		}

		return false;
	}

	handleClick(idx) {
		if (this.getWinner || this.props.board[idx]) return;

		const nextPlayer =
			this.props.currentPlayer === players.PLAYER_X
				? players.PLAYER_O
				: players.PLAYER_X;

		this.props.dispatch(setBoard(idx, this.props.currentPlayer));
		this.props.dispatch(changeCurrentPlayer(nextPlayer));
	}

	render() {
		return (
			<button
				className={`cell ${this.isWinCell() ? 'winCell' : ''}`}
				onClick={() => this.handleClick(this.props.idx)}
			>
				{this.props.value}
			</button>
		);
	}
}

const mapStateToProps = (state) => ({
	board: state.board,
	currentPlayer: state.currentPlayer,
});

export const OldCell = connect(mapStateToProps)(OldCellContainer);
