import { Result } from './Result';

describe('[Domain] Result', () => {

    it('should create ok result', () => {
        const value = 'test';
        const result = Result.ok<string>('test');
        expect(result.isSuccess).toStrictEqual(true);
        expect(result.isFailure).toStrictEqual(false);
        expect(result.value).toStrictEqual(value);
    });

    it('should create failure result', () => {
        const error = new Error('Error');
        const result = Result.failure([error]);
        expect(result.isSuccess).toStrictEqual(false);
        expect(result.isFailure).toStrictEqual(true);
        expect(result.value).toStrictEqual([error]);
    });

    it('should return ok result if no failure results passed to combine', () => {
        const result = Result.combine([Result.ok(), Result.ok()]);
        expect(result.isSuccess).toStrictEqual(true);
        expect(result.isFailure).toStrictEqual(false);
    });

    it('should return failure result and aggregate all passed errors on combine', () => {
        const error = new Error('error');
        const error2 = new Error('error2');
        const error3 = new Error('error3');
        const result = Result.combine([Result.ok(), Result.failure([error, error2]), Result.failure([error3])]);
        expect(result.isSuccess).toStrictEqual(false);
        expect(result.isFailure).toStrictEqual(true);
        expect(result.value).toStrictEqual([error, error2, error3]);
    });
})