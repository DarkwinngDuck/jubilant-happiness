import { Result } from '../result';

import notGreaterStringThan from './NotGreaterStringThan';

describe('[Domain] Guards notGreaterStringThan', () => {
    it('should always return instance of Result', () => {
        expect(notGreaterStringThan('123', 2) instanceof Result).toStrictEqual(
            true,
        );
        expect(notGreaterStringThan('12', 2) instanceof Result).toStrictEqual(
            true,
        );
    });

    it('should return succsessful result if values lenght is not greater passed boundary', () => {
        const value = 'test';
        const check = notGreaterStringThan(value, 5);
        expect(check.isSuccess).toStrictEqual(true);
        expect(check.isFailure).toStrictEqual(false);
        expect(check.value).toStrictEqual(value);
    });

    it('should return failed result if values lenght is greater passed boundary', () => {
        const value = 'test';
        const boundary = 3;
        const errors = [new Error(`Value should be equal or less than ${boundary}`)];
        const check = notGreaterStringThan(value, boundary);
        expect(check.isSuccess).toStrictEqual(false);
        expect(check.isFailure).toStrictEqual(true);
        expect(check.value).toStrictEqual(errors);
    });
});
