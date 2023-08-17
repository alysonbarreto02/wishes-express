import "../config/module-alias"

import express, { Application, NextFunction, Request, Response } from "express"

import { AppDataSource } from "@/config/data-source"
import { AppError } from "@/errors/AppError"
import routes from "@/routes"

AppDataSource.initialize().then(() => {
  const app: Application = express()

  app.use(express.json())
  app.use(routes)

  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: "error",
          message: error.message
        })
      }

      return response.status(500).json({
        status: "error",
        message: "Internal server error"
      })
    }
  )

  return app.listen(process.env.PORT, () => {
    console.log("This server is running 🚀")
  })
})
