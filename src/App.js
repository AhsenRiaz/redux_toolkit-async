import './App.css';
import Counter from './components/Counter';
import { CounterDisplay } from './components/CounterDisplay';


function App() {
  return (
    <div className="App">
     <h1>Redux Toolkit</h1>
     <Counter/>
     <CounterDisplay/>
    </div>
  );
}

export default App;
