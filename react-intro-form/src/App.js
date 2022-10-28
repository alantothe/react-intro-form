import { useState } from "react"
import './App.css';

function App()  {
  return (
    <div className="App App-header">
      <MovieForm />
      
      
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
}}/>
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




      
    </div>
  );
}


export default App;
