import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home(){

    // When a state change occurs, the component will re-render
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
         {id:1, title: "JohnSnow Film", release_date: "2026"},
         {id:2, title: "Derpz 2 Film", release_date: "2027"},
         {id:3, title: "Bart 3 Film", release_date: "2028"},
         {id:4, title: "GRZ 4 Film", release_date: "2029"},
    ]

    // State is something where once it's updated, the component will change and re-render itself to show the new state
    const handSearch= (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }

    // map method is to re iterate the movie array
    return (
        <div className="home">
            <form onSubmit={handSearch} className="search-form">
                <input type="text" 
                            placeholder="Search for movies...." 
                            className="search-input" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(
                    (movie) => 
                        movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                )}
            </div>
        </div>
    )
}

export default Home