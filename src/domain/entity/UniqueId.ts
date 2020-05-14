export interface IUniqueId<T> {
    value: T;
    equals(v: IUniqueId<T>): boolean;
}

export class UniqueId implements IUniqueId<string> {
    private readonly _value: string;

    get value() { return this._value; }

    /**
     * TODO implement id generator 
     * Make value optional if not passed should generate new id
     * @param value 
     */
    constructor(value: string) { this._value = value; }

    equals(id: IUniqueId<string>): boolean {
        if (!!id && id instanceof this.constructor) { return id.value === this.value; }
        return false;
    }

}