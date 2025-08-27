import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/hello';
import Greeter from './components/greeter';
import ClickAlert from './components/clickAlert';
import Counter from './components/counter';
import ItemList from './components/itemList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld />
        <ClickAlert />
        <Counter />
        <ItemList />
        <Greeter name="Teotihuacan" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
