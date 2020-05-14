import { parseISO, isValid } from 'date-fns';

import { Result } from '../result';
/**
 * example: 2020-01-05T23:20:54
 */
export default (value: string): Result<string> | Result<Error> =>
    isValid(parseISO(value))
        ? Result.ok<string>(value)
        : Result.failure(new Error(`Invalid date value: ${value}`));
