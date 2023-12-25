const URL_HOME =
  "https://api.themoviedb.org/3/movie/popular?api_key=18ba311b1724e3c827768daed3485284";

const URL_HOME_2 =
  "https://api.themoviedb.org/3/trending/all/day?api_key=18ba311b1724e3c827768daed3485284";
const URL_HOME_3 =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=18ba311b1724e3c827768daed3485284";

const URL_MOVIES =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=18ba311b1724e3c827768daed3485284";

const URL_MOVIES_2 =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=18ba311b1724e3c827768daed3485284";

const URL_TV =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=18ba311b1724e3c827768daed3485284";

const URL_TV_2 =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=18ba311b1724e3c827768daed3485284";

const urls_home = [URL_HOME, URL_HOME_2, URL_HOME_3];

const urls_movies = [URL_MOVIES, URL_MOVIES_2, URL_HOME];
const urls_tv = [URL_TV, URL_MOVIES, URL_TV_2];

export { urls_home, urls_movies, urls_tv };
