import { Result } from '../result';

export default (value: number, boundary: number): Result<number> | Result<Error[]> => 
    value <= boundary
        ? Result.ok(value)
        : Result.failure(new Error(`Value should be equal or less than ${boundary}`));
        