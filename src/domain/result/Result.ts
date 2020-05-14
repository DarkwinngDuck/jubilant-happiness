interface ResultDefinition {
    isSuccess: boolean;
}

interface SuccessResultDefinition<T> extends ResultDefinition {
    isSuccess: true;
    value: T;
}

interface FailureResultDefinition extends ResultDefinition {
    isSuccess: false;
    errors: Error[];
}

export class Result<T> {
    public isSuccess: boolean;
    private _value: T;
    private _errors: Error[];

    get value(): T {
        return this._value;
    }

    get errors(): Error[] {
        return this._errors;
    }

    private constructor(definition: SuccessResultDefinition<T> | FailureResultDefinition) {
        this.isSuccess = definition.isSuccess;
        this._value = definition.isSuccess && definition.value;
        this._errors = definition.isSuccess === false && definition.errors;
        Object.freeze(this);
    }

    public static ok<U>(value?: U): Result<U> {
        return new Result<U>({
            isSuccess: true,
            value,
        });
    }

    public static failure(...errors: Error[]): Result<Error[]> {
        return new Result({
            isSuccess: false,
            errors,
        });
    }

    public static combine(...results: Result<any>[]): Result<any> | Result<Error[]> {
        const errors: Error[] = results.reduce((acc, result) => {
            return result.isSuccess ? acc : [...acc, ...result.errors];
        }, []);
        return errors.length ? Result.failure(...errors) : Result.ok();
    }
}