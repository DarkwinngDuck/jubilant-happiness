import { ValueObject } from '../../domain/value-object';
import { Guards } from '../../domain/guard';
import { Result } from '../../domain/result';

interface TeamNameProperties {
    value: string;
}

export class TeamName extends ValueObject<TeamNameProperties> {
    private static MIN_LENGTH = 3;
    private static MAX_LENGTH = 50;

    get value() {
        return this.props.value;
    }

    private constructor(props: TeamNameProperties) {
        super(props);
    }

    public static create(props: TeamNameProperties): Result<TeamName> | Result<Error[]> {
        const validation = Result.combine(
            Guards.NotFalsy(props.value),
            Guards.NotLessThan(props.value.length, TeamName.MIN_LENGTH),
            Guards.NotGreaterThan(props.value.length, TeamName.MAX_LENGTH),
        );
        return validation.isSuccess
            ? Result.ok<TeamName>(new TeamName(props))
            : validation;
    }
}