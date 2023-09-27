import { Component } from 'react';
import { OldGame } from './components';

export class OldApp extends Component {
	render() {
		return (
			<div className="min-h-1/2 w-full bg-black flex flex-col justify-center items-center">
				<h1 className="text-center text-green-800">Class Components</h1>
				<OldGame />
			</div>
		);
	}
}
