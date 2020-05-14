import { UniqueId } from './UniqueId';

describe('[Domain] Entity', () => {

    class UserId extends UniqueId { }
    const id = new UserId('unique id');

    it('should be an instance of UniqueId', () => {
        expect(id instanceof UniqueId).toStrictEqual(true);
    })

    it('should return true on equals same instance', () => {
        expect(id.equals(id)).toStrictEqual(true);
    })
})