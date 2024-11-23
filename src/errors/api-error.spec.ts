import { ApiError } from "./api-error";

describe("ApiError", () => {
    describe("when constructed", () => {
        const message = 'A HTTP error with status code 500';
        const method = 'GET';
        const url = 'http://localhost:3333';
        const httpError = new ApiError(500, message, method, url);

        it("should return an error object", () => {
            expect(httpError).toBeInstanceOf(Error);
        });

        it("should contain the statusCode", () => {
            expect(httpError.statusCode).toBe(500);
        });

        it("should contain the message", () => {
            expect(httpError.message).toBe(message);
        });

        it("should contain the HTTP method", () => {
            expect(httpError.method).toBe(method);
        });

        it("should be named Internal Server Error", () => {
            expect(httpError.name).toBe("Internal Server Error");
        });

        it("should contain the stack", () => {
            expect(httpError.url).toContain(url);
        });
    });
});
