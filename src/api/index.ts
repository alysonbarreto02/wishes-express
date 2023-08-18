import "../config/module-alias"

import express, { Application } from "express"

import { AppDataSource } from "@/config/data-source"
import routes from "@/routes"
import { errorMiddleware } from "@/middlewares/ErrorMiddleware"

AppDataSource.initialize().then(() => {
  const app: Application = express()

  app.use(express.json())

  app.use(routes)

  app.use(errorMiddleware)

  app.listen(process.env.PORT, () => {
    console.log("This server is running 🚀")
  })
})
