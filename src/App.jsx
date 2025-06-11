import CatList from './components/CatList';
import './App.css';
import DATA from './data.js';

const App = () => {
  return (
    <>
      <CatList catData={DATA}/>
    </>     
  );
};

export default App;
