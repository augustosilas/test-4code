import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import {
  InvalidFieldError,
  NotFoundProductGroupError,
  NotFoundProductError,
  RequiredFieldError,
  ProductGroupWithProductsError,
} from 'src/domain/errors';

@Catch(
  NotFoundProductError,
  InvalidFieldError,
  RequiredFieldError,
  ProductGroupWithProductsError,
)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(
    exception:
      | NotFoundProductError
      | NotFoundProductGroupError
      | InvalidFieldError
      | RequiredFieldError
      | ProductGroupWithProductsError,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    if (
      exception instanceof NotFoundProductError ||
      exception instanceof NotFoundProductGroupError
    )
      status = HttpStatus.NOT_FOUND;
    else if (
      exception instanceof InvalidFieldError ||
      exception instanceof RequiredFieldError ||
      exception instanceof ProductGroupWithProductsError
    )
      status = HttpStatus.BAD_REQUEST;

    response.status(status).json({
      statusCode: status,
      message:
        status === HttpStatus.INTERNAL_SERVER_ERROR
          ? 'Internal server error'
          : exception.message,
    });
  }
}
