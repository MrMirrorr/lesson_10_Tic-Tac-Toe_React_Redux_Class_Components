import { Component } from 'react';
import { connect } from 'react-redux';
import { Cell } from '../../components';

class OldBoardContainer extends Component {
	render() {
		return (
			<div className="w-300 h-300 bg-red-600 flex flex-wrap select-none">
				{this.props.board.map((cell, idx) => (
					<Cell key={idx} idx={idx} value={cell} />
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	board: state.board,
});

export const OldBoard = connect(mapStateToProps)(OldBoardContainer);
