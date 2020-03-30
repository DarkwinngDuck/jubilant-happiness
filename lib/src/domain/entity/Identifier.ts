export interface IIdentifier<T> {
    value: T;
    equals(v: IIdentifier<T>): boolean;
}

export abstract class Identifier<T> implements IIdentifier<T> {
    private readonly _value: T;

    get value() { return this._value; }

    constructor(value: T) { this._value = value; }

    equals(id: IIdentifier<T>): boolean {
        if (!!id && id instanceof this.constructor) { return id.value === this.value; }
        return false;
    }
}
