import { Entity } from '../../domain/entity';
import { IEntityDTO } from '../../domain/entity/Entity';

interface TeamProperties extends IEntityDTO {
    name: TeamName;
    createdAt: DateTime;
}

export class Team extends Entity<TeamProperties> {

}