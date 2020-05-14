import { Result } from '../result';

export default <T>(value: T): Result<T> | Result<Error> =>
    !!value
        ? Result.ok<T>(value)
        : Result.failure(new Error('Value must be truthy'));
