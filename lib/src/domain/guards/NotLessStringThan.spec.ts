import { Result } from '../result';

import notLessStringThan from './NotLessStirngThan';

describe('[Domain] Guards notLessStringThan', () => {
    it('should always return instance of Result', () => {
        expect(notLessStringThan('123', 2) instanceof Result).toStrictEqual(
            true,
        );
        expect(notLessStringThan('12', 2) instanceof Result).toStrictEqual(
            true,
        );
    });

    it('should return succsessful result if values lenght is greater then passed boundary', () => {
        const value = 'test';
        const check = notLessStringThan(value, 1);
        expect(check.isSuccess).toStrictEqual(true);
        expect(check.isFailure).toStrictEqual(false);
        expect(check.value).toStrictEqual(value);
    });

    it('should return failed result if values lenght is not greater passed boundary', () => {
        const value = 'test';
        const boundary = 5;
        const errors = [new Error(`Value should be equal or greater than ${boundary}`)];
        const check = notLessStringThan(value, boundary);
        expect(check.isSuccess).toStrictEqual(false);
        expect(check.isFailure).toStrictEqual(true);
        expect(check.value).toStrictEqual(errors);
    });
});
