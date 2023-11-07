const { ajax } = require("rxjs/ajax");
const { map, mergeMap, from, max} = require("rxjs");
const XMLHttpRequest = require("xhr2");
global.XMLHttpRequest = XMLHttpRequest;

function getMovie$(directorName = "Quentin Tarantino") {
  const BASE_PATH = `https://custom-pages.github.io/nrevutska.github.io/`;

  const directors$ = ajax({
    url: `${BASE_PATH}/directors/`,
  })
  .pipe(
    map(x => {
      const allDirectors = x.response;
      return allDirectors.find(d => d.name === directorName);
    }),
    mergeMap(x => {
      const id = x.id;
      return ajax({url: `${BASE_PATH}/directors/${id}/movies`});
    }),
    mergeMap(x => {
      const moviesArr = x.response;
      return from(moviesArr).pipe(
        mergeMap(movie => getAverageScore(movie))
      );
    }),
    max((a, b) => a.averageScore < b.averageScore ? -1 : 1),
    map(x => x.title)
  );

  function getAverageScore(movie) {
    return ajax({
      url: `${BASE_PATH}/movies/${movie.id}/reviews`,
    }).pipe(
      map(x => {
        const commentsArray = x.response;
        return commentsArray.reduce((acc, cur) => {
          const scoreSum = acc.scoreSum + cur.rating;
          const commentsCount = ++acc.commentsCount;
          return {...acc, scoreSum: scoreSum, commentsCount: commentsCount};
        },{title: movie.title, scoreSum: 0, commentsCount: 0});
      }),
      map(x => {
        const averageScore = x.scoreSum / x.commentsCount;
        return {title: x.title, averageScore: averageScore};
      })    
    );
  };

  return directors$;
}

module.exports = getMovie$;
