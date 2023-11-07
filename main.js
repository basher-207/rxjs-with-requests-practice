const getMovie$ = require("./rx-request.js");

getMovie$().subscribe({
  next: (result) =>
    console.log(`The best movie by Quentin Tarantino issss... ${result}!`),
  error: (error) => console.log(error),
});
