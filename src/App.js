import { useState } from 'react';
import './App.css';

function App() {
	// define state variables
	const [flexDirection, setFlexDirection] = useState('row'); // column, row (radio)
	const [alignItems, setAlignItems] = useState('center'); // flex-start, flex-end, center, stretch, baseline
	const [justifyContent, setJustifyContent] = useState('space-between'); // start, end, center, space-between, space-evenly, space-around
  return (
    <div className="App">
	hello2
    </div>
  );
}

export default App;
