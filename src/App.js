import './css/App.css';
import Bar from './components/navbar';
import Home from './components/home';
import Page2 from './components/page2';
import Page3 from './components/page3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bar />
      </header>
      <div className='cover'>
        <Home />
        <div class='cover-two'><Page2/></div>
        <div class='cover-three'> <Page3/></div>
      </div>
    </div>
  );
}

export default App;
