import { useState } from "react"
import './App.css';

function App()  {
  const [movieList, setMovieList] = useState([])
  const handleAddMovie = (newMovie) => {
    const movieListCopy = [...movieList ]
    movieListCopy.push(newMovie)
    setMovieList(movieListCopy)
  }
  console.log(movieList)
  return (
    <div className="App App-header">
      <MovieForm handleAddMovie={handleAddMovie} />
      <MoviesDisplay movieList={movieList} />





    </div>
  );
}
function MovieForm(props) {
  const [title, setTitle] = useState("")
  const [director, setDirector] = useState("")
  const [actors, setActors] = useState("")
  const [plot, setPlot] = useState("")
  const [imdbRating, setImdbRating] = useState(0)


  console.log(title)
  return (
    <div className="App App-header">
      <h1>Movie Form</h1>
      <label>Title:</label>
      <input type="text" onChange={(event)=>{
setTitle(event.target.value)

}
}
/>
<p>Current Title: {title}</p>


<label>Director:</label>
      <input type="text" onChange={(event)=>{
setDirector(event.target.value)
}}/>
<p>Current Director: {director}</p>

<label>Actors:</label>
      <input type="text" onChange={(event)=>{
setActors(event.target.value)
}}/>
<p>Current Actors: {actors}</p>

<label>Plot:</label>
      <input type="text" onChange={(event)=>{
setPlot(event.target.value)
}}/>
<p>Current Plot: {plot}</p>


<label>IMDB Rating:</label>
      <input type="number" step="0.1" onChange={(event)=>{
setImdbRating(event.target.value)
}}/>
<p>Current Plot: {imdbRating}</p>



<button onClick={()=>{

  const newMovie ={
    title,
    director,
    actors,
    plot,
    imdbRating

  }

  props.handleAddMovie(newMovie)




}}>Add Movie</button>





    </div>
  );
}


function MoviesDisplay(props) {

  return (
    <div className="App App-header">
      {props.movieList.map((movie, index)=>{

      return (<MoviesItem movie={movie} key={index}/>
      )
      })}

    </div>
  );
}

function MoviesItem(props) {

  return (
    <div className="App App-header">
      <h2>Title: {props.movie.title}</h2>
      <p>Director: {props.movie.director}</p>
      <p>Actors: {props.movie.actors}</p>
      <p>Plot: {props.movie.plot}</p>
      <p>IMDB Rating: {props.movie.imdbRating}</p>

    </div>
  );
}


export default App;
