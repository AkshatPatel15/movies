import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { data } from "./data";
import MoviesCard from "./MovieCard";
import Movies from "./Movies";

function App() {
  // const [data, setData] = useState([]);

  //while api is on
  // const options = {
  //   method: "GET",
  //   url: "https://imdb-top-100-movies.p.rapidapi.com/",
  //   headers: {
  //     "X-RapidAPI-Key": "d02d132636mshbb130303356a893p1910a4jsnfd6275b04591",
  //     "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     setData(response.data);
  //     console.log(data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return (
    <>
      <Movies />
    </>
  );
}

export default App;
