export class HttpException extends Error {
  public status: number
  public message: string
  constructor({
    statusCode,
    message
  }: {
    statusCode: number
    message: string
  }) {
    super(message)
    this.status = statusCode
    this.message = message
  }
}
