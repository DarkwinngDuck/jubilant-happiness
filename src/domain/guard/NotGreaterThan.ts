import { Result } from '../result';

export default (value: any, boundary: number): Result<number> | Result<Error[]> => {
    try {
        const check = value.length <= boundary;
        return check ? Result.ok(value.length) : Result.failure(new Error(`Value should be equal or less than ${boundary}`));
    } catch(error) {
        return Result.failure(error);
    }
};
        