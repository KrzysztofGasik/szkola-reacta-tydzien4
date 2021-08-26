import React from 'react';

import Calc from './components/Tip';
import Form from './components/Form';
import FormHooks from './components/FormHooks';
import Calculator from './components/Calculator';
import Button from './components/Button';
import './App.css';

function App() {
	return (
		<div className="App">
			<Calc className="Calc" />
			<div style={{display: 'flex', justifyContent: 'space-around',flexFlow: 'row wrap'}}>
				<Form className="Form" />
				<FormHooks className="FormHooks" />
			</div>
			<Calculator className="Calculator" />
			<Button className="Button" />
		</div>
	);
}

export default App;
