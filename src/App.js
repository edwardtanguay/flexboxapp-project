import { useState } from 'react';
import './App.css';

function App() {
	// define state variables
	const [flexDirection, setFlexDirection] = useState('row'); // column, row (radio)
	const [alignItems, setAlignItems] = useState('center'); // flex-start, flex-end, center, stretch, baseline
	const [justifyContent, setJustifyContent] = useState('space-between'); // start, end, center, space-between, space-evenly, space-around
	return (
		<div className="App">
			<h1>Flexbox Generator</h1>
			<fieldset className="flexDirection">

				<legend>Flex Direction</legend>

				<input id="row" type="radio" name="flexDirection" value="row" checked={flexDirection === "row"} onChange={(e) => setFlexDirection(e.target.value)} />
				<label htmlFor="row">row</label>

				<input id="column" type="radio" name="flexDirection" value="column" checked={flexDirection === "column"} onChange={(e) => setFlexDirection(e.target.value)} />
				<label htmlFor="column">column</label>

			</fieldset>
		</div>
	);
}

export default App;
