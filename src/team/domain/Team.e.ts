import { Entity } from '../../domain/entity';
import { IEntityDTO } from '../../domain/entity/Entity';
import { TeamName } from './TeamName.vo';
import { CreatedAt } from './CreatedAt.vo';

interface TeamProperties extends IEntityDTO {
    name: TeamName;
    createdAt: CreatedAt;
}

export class Team extends Entity<TeamProperties> {

}