import { NextFunction, Request, Response } from "express"
import { AppError } from "@/errors/AppError"

export function ErrorMiddleware() {
  return (
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
}
