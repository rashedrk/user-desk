import { Prisma } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {

    let statusCode = 500;
    let success = false;
    let message = err.message || "Something went wrong!";
    let error = err;


    if (err instanceof Prisma.PrismaClientValidationError) {
        statusCode = 400;
        message = 'Validation Error';
        error = err.message;
    }

    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
            // Record not found
            statusCode = 404;
            message = "Record not found";
            error = err.meta;
        }
        else if (err.code === 'P2002') {
            // Unique constraint violation
            statusCode = 409;
            message = "Duplicate Key error";
            error = err.meta;
        }
    }
    else if (err instanceof Error) {
        if (err.message === 'User not found') {
            statusCode = 404;
        } else {
            statusCode = 400;
        }
    }

    res.status(statusCode).json({
        success,
        message,
        error
    })
};

export default globalErrorHandler;