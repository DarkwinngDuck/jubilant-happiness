export class Result<T> {
    public isSuccess: boolean;
    public isFailure: boolean
    public value: T | Error[];

    private constructor(isSuccess: boolean, errors?: Error[], value?: T) {
        if (isSuccess && errors) {
            throw new Error('InvalidOperation: A ok result can not contain errors');
        }
        if (!isSuccess && (!errors || !errors.length)) {
            throw new Error('InvalidOperation: A failure result must contain errors');
        }

        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.value = isSuccess ? value : errors;
        Object.freeze(this);
    }

    public static ok<U>(value?: U): Result<U> {
        return new Result<U>(true, null, value);
    }

    public static failure(...errors: Error[]): Result<Error[]> {
        return new Result(false, errors);
    }

    public static combine(...results: Result<any>[]): Result<any> | Result<Error[]> {
        const errors = results.reduce((acc, result) => {
            return result.isFailure ? [...acc, ...result.value] : acc;
        }, []);
        return errors.length ? Result.failure(...errors) : Result.ok();
    }
}