import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <MovieCard movie={{title: "JohnSnow Film", release_date: "2025"}}/>
      <MovieCard movie={{title: "Keon Film", release_date: "2026"}}/>
      <MovieCard movie={{title: "Keila Film", release_date: "2027"}}/>
    </>
  );
}

export default App
