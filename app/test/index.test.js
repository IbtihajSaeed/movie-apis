const supertest=require('supertest');
const test_config =require("../config/test.config.js");
const request = supertest(test_config.SERVER_URL);
const chai=require('chai');
const expect=chai.expect;
const movieBody = {
  "name":"test",
    "description": "test",
    "genreId":4,
    "rating":5,
    "duration":1,
    "releaseDate":"6-12-2022"
};
//please run project first and then run test
describe("Movie Unit Tests", () => {
    describe("Save Movie", function () {
      it("should successfully add a movie if all required fields are provided", async () =>  {
        const result = await request.post("movie").send(movieBody);
        expect(result.statusCode).equal(200);
      });
      it("should throw an error if any required field is missing", async () => {
        const result = await request.post("movie").send(movieBody).catch((error) => {
          expect(error.message).to.equal("required fields missing")
        });
      });
    });
    describe("get Movies", function () {
      it("should successfully get all movies", async () =>  {
        const result = await request.get("movie");
        expect(result.statusCode).equal(200);
      });
      
    });

    describe("get Movies", function () {
      it("should successfully get movieby id", async () =>  {
        const result = await request.get("movie/4");
        expect(result.statusCode).equal(200);
      });
      
    });
  });