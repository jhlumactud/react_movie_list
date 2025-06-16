import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber = 2;

  return (
    <>
    {/* Conditional Rendering */}
      {/* { movieNumber === 1 ? (
      <MovieCard movie={{title: "JohnSnow Film", release_date: "2025"}}/>
      ) : (
      <MovieCard movie={{title: "Keon Film", release_date: "2026"}}/>
      )} */}

        {/* Javascript short circuiting */}
        {movieNumber === 1 && <MovieCard movie={{title: "JohnSnow Film", release_date: "2025"}}/>}
        {movieNumber === 2 && <MovieCard movie={{title: "Keon Film", release_date: "2026"}}/>}

    </>
  );
}

export default App
