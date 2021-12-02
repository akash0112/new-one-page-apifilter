import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Book from './components/book/Book';
import Character from './components/character/Character';
import Movieqoute from './components/movieqoute/Movieqoute';
import Movies from './components/movies/Movies';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Book/>}/>
      <Route path="/movie" element={<Movies/>}/>
      <Route path="/character" element={<Character/>}/>
      <Route path="/movieqoute" element={<Movieqoute/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
