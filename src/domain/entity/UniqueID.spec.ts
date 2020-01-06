import * as uuid from 'uuid/v4';

import { isValid } from './UniqueID';

describe('[Domain] UniqueID/isValid', () => {

    it('should be a function', () => {
        expect(typeof isValid).toStrictEqual('function');
    });

    it('should return false on bad uuid', () => {
        expect(isValid('test')).toStrictEqual(false);
    });

    /* 
    * Definitely uuid should be injected or something
    * to avoid coupled unit tests 
    */
    it('should return true on valid uuid', () => {
        const validUuid = uuid();
        expect(isValid(validUuid)).toStrictEqual(true);
    });

})