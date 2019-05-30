const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:4000/";

describe("routes : static", () => {


  describe("GET /", () => {


    it("should return status code 200 and have 'BxR Portfolio' in the body of the response", () => {
        request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("BxR Portfolio");



        done();
      });
    });

  });
});