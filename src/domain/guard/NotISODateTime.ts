import { parseISO, isValid } from 'date-fns';
import { Result } from '../result';
/**
 * example: 2020-01-05T23:20:54
 */
export default (value: string): Result<boolean> | Result<Error[]> => {
    return isValid(parseISO(value)) ? Result.ok<boolean>() : Result.failure(new Error('Invalid date value'));
}