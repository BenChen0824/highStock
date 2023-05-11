import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import Selector from './components/Selector';
import Chart from './components/Charts';
import {Container} from 'react-bootstrap'
import chartCollections from './data/chart-collections.json'
import releases from './data/releases.json';
import sources from './data/sources.json';
import { useState, useEffect } from 'react';
function App() {

  const [releaseFilter,setReleaseFilter]  = useState(0);
  const [sourcesFilter,setSourcesFilter]  = useState(0);
  
  const handleOnChange = (event) => {
    if(event.target.dataset.key==='sources'){
      setSourcesFilter(+event.target.value)
    }else{
      setReleaseFilter(+event.target.value)
    }
  }


    const chartData = chartCollections
    .filter(chart => {
      if(releaseFilter===0&&sourcesFilter===0) return true
      if(releaseFilter===0&&sourcesFilter!==0) {return chart.source_id===+sourcesFilter}
      if(releaseFilter!==0&&sourcesFilter===0) {return chart.release_id===+releaseFilter}
      if(releaseFilter!==0&&sourcesFilter!==0) {return chart.release_id===+releaseFilter&&chart.source_id===+sourcesFilter}
    })

  return (
    <div className="App">
        <Nav />
        <Selector releases={releases} sources={sources} releaseFilter={releaseFilter} sourcesFilter={sourcesFilter} onChange={handleOnChange}/>
        <Chart chartCollections={chartData} releaseFilter={releaseFilter} sourcesFilter={sourcesFilter}/>
    </div>
  );
}

export default App;
