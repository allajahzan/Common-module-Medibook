import { Response } from "express";

export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    VERIFIED = 202,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export enum ResponseMessage {
    SUCCESS = "Operation successful",
    CREATED = "Resource successfully created",
    VERIFIED = "Resource verified",
    BAD_REQUEST = "Bad request",
    UNAUTHORIZED = "Unauthorized access",
    FORBIDDEN = "Access forbidden",
    NOT_FOUND = "Resource not found",
    INTERNAL_SERVER_ERROR = "Internal server error",
}

export const SendResponse = <D>(
    res: Response,
    statusCode: number,
    message: string,
    data: D
): void => {
    try {
        res.status(statusCode).json({
            status: statusCode >= 200 && statusCode <= 300,
            message,
            data,
        });
    } catch (err: any) {
        throw new Error(err);
    }
};
