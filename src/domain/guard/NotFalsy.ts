import { Result } from '../result';

export default (value: any): Result<any> | Result<Error[]> => 
    !!value
        ? Result.failure(new Error('Value must be truthy'))
        : Result.ok(value);