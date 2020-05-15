import { Result } from '../result';

import notFalsy from './NotFalsy';

describe('[Domain] Guards notFalsy', () => {
    it('should always return instance of Result', () => {
        expect(notFalsy(true) instanceof Result).toStrictEqual(true);
        expect(notFalsy(false) instanceof Result).toStrictEqual(true);
    });

    it('should return succsessful result if value is truthy', () => {
        const value = {};
        const check = notFalsy(value);
        expect(check.isSuccess).toStrictEqual(true);
        expect(check.isFailure).toStrictEqual(false);
        expect(check.value).toStrictEqual(value);
    });

    it('should return failed result if value is falsy', () => {
        const value = false;
        const errors = [new Error('Value must be truthy')];
        const check = notFalsy(value);
        expect(check.isSuccess).toStrictEqual(false);
        expect(check.isFailure).toStrictEqual(true);
        expect(check.value).toStrictEqual(errors);
    });
});
