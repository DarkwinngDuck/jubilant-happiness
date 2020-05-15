import { Result } from '../result';

export default (
    value: string,
    boundary: number,
): Result<string> | Result<Error> =>
    value.length <= boundary
        ? Result.ok<string>(value)
        : Result.failure(
              new Error(`Value should be equal or less than ${boundary}`),
          );
