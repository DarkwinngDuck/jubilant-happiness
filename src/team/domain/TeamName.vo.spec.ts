import { TeamName } from './TeamName.vo';

describe('[Team] TeamName', () => {
    it('should create TeamName vo if name is valid', () => {
        const name = TeamName.create({ name: 'test' }); 
        expect(name.isSuccess).toStrictEqual(true);
        expect(name.value instanceof TeamName).toStrictEqual(true);
    });

    it('should not create CreatedAt vo if date is invalid', () => {
        const emptyName = TeamName.create({ name: undefined }); 
        expect(emptyName.isSuccess).toStrictEqual(false);

        const shortName = TeamName.create({ name: 'te' }); 
        expect(shortName.isSuccess).toStrictEqual(false);

        const longName = TeamName.create({ name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' }); 
        expect(longName.isSuccess).toStrictEqual(false);
    });
});
