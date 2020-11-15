const API_KEY = "747e4d8790bd111419e88605ca28440c";

const requests =  {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystry : `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchScify: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern : `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation : `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV : `/discover/movie?api_key=${API_KEY}&with_genres=10770`

};
export default requests;