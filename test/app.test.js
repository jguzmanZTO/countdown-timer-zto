import app from "../src/app.js"
import request from "supertest"

describe("GET /", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/").send()
    expect(response.statusCode).toBe(200)
  })
  test("should respond with a message", async () => {
    const response = await request(app).get("/").send()
    expect(response.text).toBe("Running ZTO - Image rendering server")
  })
})

describe("GET /render", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app)
      .get(
        "/render?style=1&endTime=1&backgroundColor=3333&labelColor=00&numberColor=123&accentColor=d2d"
      )
      .send()
    expect(response.statusCode).toBe(200)
  })
  test("should respond with a error", async () => {
    const response = await request(app).get("/render/").send()
    expect(response.statusCode).toBe(400)
  })
})
