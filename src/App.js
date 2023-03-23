
import { useState } from 'react';
import './App.css';
import Drinks from './component/Drinks/Drinks';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Random from './component/Random/Random';

function App() {
  const[searchQuery, setSearchQuery] = useState([]);
  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  return (
    <div className="App">
      <Header onSearch={handleSearch}></Header>
      <Random></Random>
      <Drinks searchQuery={searchQuery}></Drinks>
      <Footer></Footer>
    </div>
  );
}

export default App;
