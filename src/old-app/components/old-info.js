import { Component } from 'react';
import { connect } from 'react-redux';
import { checkVictory } from '../../helpers';

class OldInfoContainer extends Component {
	getWinner() {
		return checkVictory(this.props.board);
	}

	renderInfo() {
		let msg;

		if (this.getWinner()) {
			msg = `Победил: ${this.getWinner().winnerPlayer}`;
		} else if (this.props.board.includes(null)) {
			msg = `Сейчас ходит: ${this.props.currentPlayer}`;
		} else {
			msg = `Ничья!`;
		}
		return msg;
	}

	render() {
		return <p className="text-2xl text-white">{this.renderInfo()}</p>;
	}
}

const mapStateToProps = (state) => ({
	board: state.board,
	currentPlayer: state.currentPlayer,
});

export const OldInfo = connect(mapStateToProps)(OldInfoContainer);
