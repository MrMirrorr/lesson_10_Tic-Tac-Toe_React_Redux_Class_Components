import { Component } from 'react';
import { OldBoard, OldInfo, OldStartBtn } from '../components';

export class OldGame extends Component {
	render() {
		return (
			<>
				<OldInfo />
				<OldBoard />
				<OldStartBtn />
			</>
		);
	}
}
