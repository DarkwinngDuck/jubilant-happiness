import { ValueObject } from '../../domain/value-object';
import { Guards } from '../../domain/guard';
import { Result } from '../../domain/result';

interface CreatedAtProperties {
    value: string;
}

export class CreatedAt extends ValueObject<CreatedAtProperties> {
    get value() {
        return this.props.value;
    }

    private constructor(props: CreatedAtProperties) {
        super(props);
    }

    public static create(props: CreatedAtProperties): Result<CreatedAt> | Result<Error[]> {
        const validation = Result.combine(
            Guards.NotFalsy(props.value),
            Guards.NotISODateTime(props.value),
        );
        return validation.isSuccess
            ? Result.ok<CreatedAt>(new CreatedAt(props))
            : validation;
    }
}