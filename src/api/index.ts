import "../config/module-alias"

import express, { Application } from "express"

import { AppDataSource } from "@/config/data-source"
import { ErrorMiddleware } from "@/middlewares/ErrorMiddleware"
import routes from "@/routes"

AppDataSource.initialize().then(() => {
  const app: Application = express()

  app.use(express.json())
  app.use(routes)

  app.use(ErrorMiddleware())

  return app.listen(process.env.PORT, () => {
    console.log("This server is running 🚀")
  })
})
