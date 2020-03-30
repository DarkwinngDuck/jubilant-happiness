import { ValueObject } from './ValueObject';

interface UserNameProperties {
    name: string;
}

class UserName extends ValueObject<UserNameProperties> {}

describe('[Domain] ValueObject', () => {
    it('should be created', () => {
        const userName = new UserName({ name: 'John' });
        expect(userName).toBeDefined();
    });

    it('should check equality of another value object', () => {
        const john1 = new UserName({ name: 'John' });
        const john2 = new UserName({ name: 'John' });
        const bill = new UserName({ name: 'Bill' });
        expect(john1.equals(john2)).toStrictEqual(true);
        expect(bill.equals(john1)).toStrictEqual(false);
    });
});
