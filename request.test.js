jest.mock("rxjs/ajax");

const Observable = require("rxjs");
const AjaxModule = require("rxjs/ajax");

const getMovie$ = require("./rx-request.js");


describe("get", () => {
  it("Inglourious Basterds is returned according to reviews", (done) => {
    const mySpy = jest
      .spyOn(AjaxModule, "ajax")
      .mockImplementationOnce(() =>
        Observable.of({
          response: [
            {
              id: 1,
              name: "James Cameron",
            },
            {
              id: 2,
              name: "Quentin Tarantino",
            },
            {
              id: 3,
              name: "Wes Anderson",
            },
            {
              id: 4,
              name: "Stanley Kubrick",
            },
          ],
        })
      )
      .mockImplementationOnce(() =>
        Observable.of({
          response: [
            {
              id: 4,
              title: "Django Unchained",
            },
            {
              id: 5,
              title: "Inglourious Basterds",
            },
            {
              id: 6,
              title: "Grindhouse",
            },
          ],
        })
      )
      .mockImplementationOnce(() =>
        Observable.of({
          response: [
            {
              id: 1,
              reviewer: "Stanley",
              rating: 8,
            },
            {
              id: 2,
              reviewer: "James",
              rating: 5,
            },
            {
              id: 3,
              reviewer: "Anna",
              rating: 8,
            },
            {
              id: 4,
              reviewer: "Kate",
              rating: 9,
            },
          ],
        })
      )
      .mockImplementationOnce(() =>
        Observable.of({
          response: [
            {
              id: 1,
              reviewer: "James",
              rating: 10,
            },
            {
              id: 2,
              reviewer: "Kate",
              rating: 10,
            },
            {
              id: 3,
              reviewer: "Patricia",
              rating: 8,
            },
            {
              id: 4,
              reviewer: "Jerry",
              rating: 9,
            },
          ],
        })
      )
      .mockImplementationOnce(() =>
        Observable.of({
          response: [
            {
              id: 1,
              reviewer: "Tom",
              rating: 2,
            },
            {
              id: 2,
              reviewer: "Mike",
              rating: 10,
            },
            {
              id: 3,
              reviewer: "Bridget",
              rating: 8,
            },
            {
              id: 4,
              reviewer: "Tommy",
              rating: 9,
            },
          ],
        })
      );

    getMovie$().subscribe({
      next: (result) => {
        expect(result).toEqual("Inglourious Basterds");
        done();
      },
      error: (error) => console.log(error),
    });

    expect(mySpy).toHaveBeenCalled();
  });

  it("Django Unchained is returned according to reviews", (done) => {
    const mySpy = jest
      .spyOn(AjaxModule, "ajax")
      .mockImplementationOnce(() =>
        Observable.of({
          response: [
            {
              id: 1,
              name: "James Cameron",
            },
            {
              id: 2,
              name: "Quentin Tarantino",
            },
            {
              id: 3,
              name: "Wes Anderson",
            },
            {
              id: 4,
              name: "Stanley Kubrick",
            },
          ],
        })
      )
      .mockImplementationOnce(() =>
        Observable.of({
          response: [
            {
              id: 4,
              title: "Django Unchained",
            },
            {
              id: 5,
              title: "Inglourious Basterds",
            },
            {
              id: 6,
              title: "Grindhouse",
            },
          ],
        })
      )
      .mockImplementationOnce(() =>
        Observable.of({
          response: [
            {
              id: 1,
              reviewer: "Stanley",
              rating: 8,
            },
            {
              id: 2,
              reviewer: "James",
              rating: 10,
            },
            {
              id: 3,
              reviewer: "Anna",
              rating: 8,
            },
            {
              id: 4,
              reviewer: "Kate",
              rating: 9,
            },
          ],
        })
      )
      .mockImplementationOnce(() =>
        Observable.of({
          response: [
            {
              id: 1,
              reviewer: "James",
              rating: 1,
            },
            {
              id: 2,
              reviewer: "Kate",
              rating: 1,
            },
            {
              id: 3,
              reviewer: "Patricia",
              rating: 8,
            },
            {
              id: 4,
              reviewer: "Jerry",
              rating: 9,
            },
          ],
        })
      )
      .mockImplementationOnce(() =>
        Observable.of({
          response: [
            {
              id: 1,
              reviewer: "Tom",
              rating: 2,
            },
            {
              id: 2,
              reviewer: "Mike",
              rating: 10,
            },
            {
              id: 3,
              reviewer: "Bridget",
              rating: 8,
            },
            {
              id: 4,
              reviewer: "Tommy",
              rating: 9,
            },
          ],
        })
      );

    getMovie$().subscribe({
      next: (result) => {
        expect(result).toEqual("Django Unchained");
        done();
      },
      error: (error) => console.log(error),
    });

    expect(mySpy).toHaveBeenCalled();
  });
});
