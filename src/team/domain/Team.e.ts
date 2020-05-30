import { Entity } from '../../domain/entity';
import { IEntityDTO } from '../../domain/entity/Entity';
import { TeamName } from './TeamName.vo';
import { CreatedAt } from '../../domain/vo/CreatedAt.vo';
import { Result } from '../../domain/result';

interface TeamProperties extends IEntityDTO {
    name: TeamName;
    createdAt: CreatedAt;
}

export class Team extends Entity<TeamProperties> {

    get name(): string {
        return this.props.name.value;
    }

    get createdAt(): Date {
        return this.props.createdAt.value;
    }

    private constructor(properties: TeamProperties) {
        super(properties);
    }

    public static create(properties: TeamProperties): Result<Team> {
        return Result.ok<Team>(new Team(properties));
    }
}