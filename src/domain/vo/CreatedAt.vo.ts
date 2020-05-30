import { parseISO } from 'date-fns';

import { ValueObject } from '../value-object';
import { Guards } from '../guard';
import { Result } from '../result';

interface CreatedAtProperties {
    createdAt: Date;
}

export class CreatedAt extends ValueObject<CreatedAtProperties> {
    get value() {
        return this.props.createdAt;
    }

    private constructor(props: CreatedAtProperties) {
        super(props);
    }

    public static create(props: { createdAt: string }): Result<CreatedAt> {
        const validation = Result.combine(
            Guards.NotFalsy(props.createdAt),
            Guards.NotISODateTime(props.createdAt),
        );
        return validation.isSuccess
            ? Result.ok<CreatedAt>(new CreatedAt({ createdAt: parseISO(props.createdAt) }))
            : validation;
    }
}