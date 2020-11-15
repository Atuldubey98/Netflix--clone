import React from 'react';
import Banner from "./Banner";
import './App.css';
import requests from './requests';
import Row from './Row';
import Nav from './Nav';

function App() {

  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Actions Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Animations Movies" fetchUrl={requests.fetchAnimation} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Western Movies" fetchUrl={requests.fetchWestern} />

    </div>
  );
}

export default App;
