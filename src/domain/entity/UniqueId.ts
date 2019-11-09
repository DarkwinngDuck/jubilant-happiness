import { IUniqueId } from './interfaces';

export class UniqueId<T> {
    private readonly _value: T;

    get value() { return this._value; }

    constructor(value: T) { this._value = value; }

    equals(id: IUniqueId<T>): boolean {
        if (!!id && id instanceof this.constructor) { return id.value === this.value; }
        return false;
    }

}
