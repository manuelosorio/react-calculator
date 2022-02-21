import { useState } from 'react';
import { ButtonWrapper } from "./_components/button-wrapper/button-wrapper";
import { CalculatorDisplay } from "./_components/display/calculator-display";
import './App.sass';
import { Actions } from "./helper/actions";

function App() {
  const  [displayState, setDisplayState] = useState(0);
  const [resultState, setResultState] = useState(0);

  const clickHandler = (r: num | operator, action?: Actions) => {
    switch (action) {
      case(Actions.CLEAR): {
        setDisplayState(0);
        setResultState(0);
        break;
      }
      case (Actions.DELETE): {
        if (resultState) {
          setResultState(0);
          setDisplayState(0);
          break;
        }
        if (displayState) {
          setDisplayState((prev): any => {
            const arr = prev.toString().split('');
            console.log(arr, arr.slice(0, -1))
            return arr.slice(0, -1).join('')
          })
        }

        break;
      }
      case(Actions.ADD):
      case(Actions.SUBTRACT):
      case(Actions.MULTIPLY):
      case(Actions.DIVIDE): {
        if (displayState) {
          setDisplayState((prev): any => {
            const regex = /[Xx\-+/]/g;
            const arr: any[] = prev.toString().split('');
            if (regex.test(arr[arr.length - 1])) {
              arr.pop()
              arr.push(r)
              return arr.join('');
            }
            arr.push(r)
            return arr.join('');
          })
        }
        if (resultState) {
          setDisplayState((): any => {
            const arr: any[] = [];
            arr.push(resultState, r, )
            return arr.join('');
          });
          setResultState(0);
        }
        break;
      }
      case (Actions.TOTAL): {
        setResultState((_prev) => {
          // const regex = /[Xx\-+*/]/g;
          const prevState: Array<string | "+" | "-"  | "X" | "/"> = displayState.toString().split('');
          for (let i = 0; prevState.length > i; i++) {
            if (prevState[i] === "X") {
              prevState[i] = "*"
            }
          }
          try {
            // eslint-disable-next-line no-eval
            const calcVal = eval(prevState.join('')).toString();
            setDisplayState(calcVal)
            return calcVal;
          } catch (e) {
            setDisplayState(displayState);
          }
        });

        break;
      }
      default: {
        if (resultState) {
          setDisplayState(0);
          setResultState(0);
        }
        setDisplayState((prev): any => {
          const arr: any[] = [];
          arr.push(prev, r)
          const containsDecimal = prev.toString().includes('.');
          if (r === '.' && containsDecimal) {
            arr[arr.length - 1] = ''
          }
          return arr[0] === 0 && r !== '.' ? arr.pop() : arr.join('')
        });
      }
    }
  }
  return (
    <main>
      <div className="calculator">
        <CalculatorDisplay state={{num: displayState, res: resultState}} />
        <ButtonWrapper handleClick={clickHandler}/>
      </div>
    </main>
  );
}

export default App;
type operator =  "." | "+" | "-"  | "X" | "/" | "DEL" | "Reset";
type num = Number | 0;
