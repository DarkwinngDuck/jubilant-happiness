export interface IUniqueId<T> {
    value: T;
    equals(v: IUniqueId<T>): boolean;
}