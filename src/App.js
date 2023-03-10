import "./App.css";
import axios from "axios";
import { useState } from "react";

import Movies from "./template/Movies";
import Manubar from "./template/Manubar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMovie from "./template/AboutMovie";

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
      <Manubar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/about/:id" element={<AboutMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
