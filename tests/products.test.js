
const request = require("supertest");
const app = require("../server/app");

// Test the GET /foods endpoint.
describe("Food API Tests", () => {

    test("GET /foods should return all five food items", async () => {

        const response = await request(app).get("/foods");

        // Check the HTTP response.
        expect(response.status).toBe(200);

        // Check that the response is an array.
        expect(Array.isArray(response.body)).toBe(true);

        // Check that there are five food items.
        expect(response.body).toHaveLength(5);

        // Check that each food item has a name and price.
        response.body.forEach(food => {
            expect(food).toHaveProperty("name");
            expect(food).toHaveProperty("price");
        });
    });

    test("GET /foods should return JSON", async () => {

        const response = await request(app).get("/foods");

        expect(response.headers["content-type"]).toMatch(/json/);
    });

});
