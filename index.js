const express = require("express")
const helmet = require("helmet")
const cors = require("cors")


const server = express()
const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 5000

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to Resumeker",
  })
})

server.use((err, req, res, next) => {
  console.log("Error:", err)

  res.status(500).json({
    message: "Something went wrong",
  })
})

if (!module.parent){
  server.listen(port, host, () => {
    console.log(`\n** Running on http://${host}:${port} **\n`)
  })
}

module.exports = server;