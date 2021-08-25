import React from "react";

import Calc from "./components/Tip";
import Form from "./components/Form";
import FormHooks from "./components/FormHooks"
import Calculator from "./components/Calculator"
import './App.css';

function App() {
  return (
    <div className="App">
      <Calc />
      <Form />
      <FormHooks />
      <Calculator />
    </div>
  );
}

export default App;
