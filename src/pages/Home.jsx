import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
         {id:1, title: "JohnSnow Film", release_date: "2026"},
         {id:2, title: "JohnSnow 2 Film", release_date: "2027"},
         {id:3, title: "JohnSnow 3 Film", release_date: "2028"},
         {id:4, title: "JohnSnow 4 Film", release_date: "2029"},
    ]

    const handSearch= () => {

    }

    // map method is to re iterate the movie array
    return (
        <div className="home">
            <form onSubmit={handSearch} className="search-form">
                <input type="text" placeholder="Search for movies...." className="search-input" />
                <button type="submit" className="search-btn">Search</button>
            </form>


            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Home