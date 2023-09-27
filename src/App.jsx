import styles from './App.module.css';
import { Game } from './components';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<h1>Function Components</h1>
			<Game />
		</div>
	);
};
