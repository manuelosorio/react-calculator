import React, { useState } from 'react';
import { ButtonWrapper } from "./_components/button-wrapper/button-wrapper";
import { CalculatorDisplay } from "./_components/display/calculator-display";
import './App.sass';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [displayState, setDisplayState] = useState(0);
  return (
    <main>
      <div className="calculator">
        <CalculatorDisplay state={displayState} />
        <ButtonWrapper />
      </div>
    </main>
  );
}

export default App;
