import { parseISO } from 'date-fns';
import { Result } from '../result';
/**
 * example: 2020-01-05T23:20:54
 */
export default (value: string): Result<Date> | Result<Error[]> => {
    try {
        return Result.ok(parseISO(value));
    } catch(error) {
        return Result.failure(error);
    }
}