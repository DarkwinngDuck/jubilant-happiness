import { ErrorCode } from '../errors';
import { ApplicationError } from '../errors';

export class ValidationError extends ApplicationError {
    public readonly code: ErrorCode;
    constructor(message: string) {
        super(message);
        this.code = ErrorCode.ValidationError;
    }
}

export interface GeneralValidationOptions {}

export interface StringValidationOptions extends GeneralValidationOptions {
    minLength: number;
    maxLength: number;
}

export interface NumberValidationOptions extends GeneralValidationOptions {
    min: number;
    max: number;
}

export type Validator<T> = (value: T) => T;
