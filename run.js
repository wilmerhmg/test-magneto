import { getMovies } from './service/swapi';
import { processMovie } from './repositories/movie';

+async function Autorun() {
  try {
    const movies   = [];
    const rawFilms = await getMovies();
    for(const rawFilm of rawFilms.results) {
      movies.push(await processMovie(rawFilm));
    }
    console.log(JSON.stringify(movies));
  } catch (e) {
    console.warn(e);
  }

}();
