import { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults';
import './scss/main.scss';

function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <SearchBar setResults={setResults}></SearchBar>
      <SearchResults results={results}></SearchResults>      
    </>
  );
}

export default App;
