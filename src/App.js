import './css/App.css';
import Bar from './components/navbar';
import Cards from './components/cards';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bar />
      </header>
      <div className='cover'>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
