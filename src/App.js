import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import Selector from './components/Selector';
import Chart from './components/Charts';
import {Container} from 'react-bootstrap'
import chartCollections from './data/chart-collections.json'

function App() {
  const charts = chartCollections
  return (
    <div className="App">
        <Nav />
        <Selector />
        <Chart chartCollections={charts}/>
    </div>
  );
}

export default App;
