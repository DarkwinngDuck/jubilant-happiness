import { Team } from './Team.e';
import { TeamName } from './TeamName.vo';
import { CreatedAt } from '../../domain/vo';

describe('[Team] Team', () => {
    it('should create Team entity', () => {
        const team = Team.create({
            id: '09111111',
            name: TeamName.create({ name: 'test' }).value,
            createdAt: CreatedAt.create({ createdAt: '2019-01-01' }).value,
        }); 
        expect(team.isSuccess).toStrictEqual(true);
        expect(team.value instanceof Team).toStrictEqual(true);
    });
});
