import { ValueObject } from '../../domain/value-object';
import { Guards } from '../../domain/guard';
import { Result } from '../../domain/result';

interface TeamNameProperties {
    name: string;
}

export class TeamName extends ValueObject<TeamNameProperties> {
    private static MIN_LENGTH = 3;
    private static MAX_LENGTH = 50;

    get value() {
        return this.props.name;
    }

    private constructor(props: TeamNameProperties) {
        super(props);
    }

    public static create(props: TeamNameProperties): Result<TeamName> {
        const validation = Result.combine(
            Guards.NotFalsy(props.name),
            Guards.NotLessThan(props.name, TeamName.MIN_LENGTH),
            Guards.NotGreaterThan(props.name, TeamName.MAX_LENGTH),
        );
        return validation.isSuccess
            ? Result.ok<TeamName>(new TeamName(props))
            : validation;
    }
}