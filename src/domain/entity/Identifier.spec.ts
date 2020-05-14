import { Identifier } from './Identifier';

describe('[Domain] Identifier', () => {

    class UserId extends Identifier<string> { }
    const id = new UserId('unique id');

    it('should be an instance of Identifier', () => {
        expect(id instanceof Identifier).toStrictEqual(true);
    })

    it('should return true on equals same instance', () => {
        expect(id.equals(id)).toStrictEqual(true);
    })
});
