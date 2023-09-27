import { Component } from 'react';
import { connect } from 'react-redux';
import { clearBoard, resetCurrentPlayer } from '../../action-creators';

class OldStartBtnContainer extends Component {
	onStart() {
		this.props.dispatch(clearBoard());
		this.props.dispatch(resetCurrentPlayer());
	}

	render() {
		return (
			<button
				className="w-52 h-8 mt-3 cursor-pointer text-black bg-white border-solid border border-white
				transition-colors duration-200 ease-in-out select-none hover:text-white hover:bg-black"
				onClick={() => this.onStart()}
			>
				Начать заново
			</button>
		);
	}
}

export const OldStartBtn = connect()(OldStartBtnContainer);
