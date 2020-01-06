import { CreatedAt } from './CreatedAt.vo';

describe('[Domain] CreatedAt', () => {
    it('should create CreatedAt vo if date is valid', () => {
        const isoDateStr = '2019-01-01T23:59:59';
        const createdAt = CreatedAt.create({ createdAt: isoDateStr }); 
        expect(createdAt.isSuccess).toStrictEqual(true);
        expect(createdAt.value instanceof CreatedAt).toStrictEqual(true);
    });

    it('should not create CreatedAt vo if date is invalid', () => {
        const isoDateStr = '2019-45-01T23:59:59';
        const createdAt = CreatedAt.create({ createdAt: isoDateStr }); 
        expect(createdAt.isFailure).toStrictEqual(true);
        expect(createdAt.errors).toStrictEqual([new Error('Invalid date value')]);
    });
});
