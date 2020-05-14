import { Entity } from './Entity';

describe('[Domain] Entity', () => {

    class User extends Entity<any> { }
    const user = new User({ id: 1 });

    it('should be an instance of Entity', () => {
        expect(user instanceof Entity).toStrictEqual(true);
    })

    it('should return true on equals same instance', () => {
        expect(user.equals(user)).toStrictEqual(true);
    })
})