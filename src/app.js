import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("Running ZTO - Image rendering server")
})

app.get("/render", (req, res) => {
  const {
    style,
    endTime,
    backgroundColor,
    labelColor,
    numberColor,
    accentColor,
  } = req.query
  if (
    style &&
    endTime &&
    backgroundColor &&
    labelColor &&
    numberColor &&
    accentColor
  ) {
    res.send("Rendering image")
  } else {
    res.status(400).send("Missing parameters")
  }

  res.send("Rendering image")
})

export default app
