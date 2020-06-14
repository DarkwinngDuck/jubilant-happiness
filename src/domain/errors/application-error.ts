import { ErrorCode } from "./error-code";

export class ApplicationError extends Error {
    public readonly code: ErrorCode;
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        this.code = ErrorCode.ValidationError;
        Error.captureStackTrace(this, this.constructor);
    }
}
