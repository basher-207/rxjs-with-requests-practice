const { ajax } = require("rxjs/ajax");
const XMLHttpRequest = require("xhr2");
global.XMLHttpRequest = XMLHttpRequest;

function getMovie$(directorName = "Quentin Tarantino") {
  const BASE_PATH = `https://custom-pages.github.io/nrevutska.github.io/`;

  const directors$ = ajax({
    url: `${BASE_PATH}/directors/`,
  })
    .pipe
    // get response property from the result

    // find the id of director with name equal to directorName

    // make a new request to `${BASE_PATH}/directors/${id}/movies`
    // to retrieve the list of movies of chosen director
    // NOTE that the source observable has to be mapped to a new observable here,
    // so use a higher order mapping operator
    // get response property from the result

    // for each movie in the result you need to gather its average review score
    // to do so, you'll need to make a request to `${BASE_PATH}/movies/${movie.id}/reviews`
    // use getAverageScore function for this and combine all evaluated by this function results
    // NOTE that current observable has to be mapped to a new observable here,
    // so use a higher order mapping operator

    // get the movie title with the highest review score
    ();

  function getAverageScore(movie) {
    return ajax({
      url: `${BASE_PATH}/movies/${movie.id}/reviews`,
    }).pipe(
      // get response property from the result
      // convert result to evaluated average score
      // convert result to an object with structure like this: 
      // { title: movie.title, averageScore: evaluatedOnPreviousStep }      
    );
  }
  return directors$;
}

module.exports = getMovie$;
