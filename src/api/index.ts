import "../config/module-alias"

import routes from "@/routes"

import { AppDataSource } from "@/config/data-source"
import express from "express"

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())
  app.use(routes)

  return app.listen(process.env.PORT, () => {
    console.log("This server is running 🚀")
  })
})
