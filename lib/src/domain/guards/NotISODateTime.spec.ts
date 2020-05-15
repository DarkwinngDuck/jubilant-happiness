import { Result } from '../result';

import notISODateTime from './NotISODateTime';

describe('[Domain] Guards notISODateTime', () => {
    it('should always return instance of Result', () => {
        expect(
            notISODateTime(new Date().toISOString()) instanceof Result,
        ).toStrictEqual(true);
        expect(notISODateTime('test') instanceof Result).toStrictEqual(true);
    });

    it('should return succsessful result if value is ISODateTime', () => {
        const value = new Date().toISOString();
        const check = notISODateTime(value);
        expect(check.isSuccess).toStrictEqual(true);
        expect(check.isFailure).toStrictEqual(false);
        expect(check.value).toStrictEqual(value);
    });

    it('should return failed result if values lenght is not greater passed boundary', () => {
        const value = 'test';
        const errors = [new Error(`Invalid date value: ${value}`)];
        const check = notISODateTime(value);
        expect(check.isSuccess).toStrictEqual(false);
        expect(check.isFailure).toStrictEqual(true);
        expect(check.value).toStrictEqual(errors);
    });
});
