import { useState } from 'react';
import { Box } from './components/Box';
import './App.css';

function App() {
	const farben = ["brown", "pink", "red", "yellow", "green", "blue", "purple"];

	// define state variables
	const [flexDirection, setFlexDirection] = useState('column'); // column, row (radio)
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

			<fieldset className="alignItems">

				<legend>Align Items</legend>

				<select>
					<option value="start" onClick={(e) => setAlignItems(e.target.value)}>start</option>
					<option value="end" onClick={(e) => setAlignItems(e.target.value)}>end</option>
					<option value="center" onClick={(e) => setAlignItems(e.target.value)}>center</option>
				</select>

			</fieldset>

			<div className="data">
				<div>flexDirection: {flexDirection}</div>
				<div>alignItems: {alignItems}</div>
			</div>

			<div
				className="flex-container"
				style={{
					flexDirection: flexDirection,
					justifyContent: justifyContent,
					alignItems: alignItems,
				}}
			>
				{farben.map((farbe) => {
					return <Box farbe={farbe} />;
				})}
			</div>

		</div>
	);
}

export default App;
