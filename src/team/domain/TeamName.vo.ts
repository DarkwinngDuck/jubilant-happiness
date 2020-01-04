import { ValueObject } from '../../domain/value-object';

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

    public static create(props: TeamNameProperties): any {
        
    }
}