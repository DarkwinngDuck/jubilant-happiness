import { IUniqueId } from './interfaces';
import { UniqueId } from './UniqueId';

const isEntity = (v: any): v is Entity<any> => v instanceof Entity;

export abstract class Entity<T> {

    protected readonly _id: IUniqueId<any>;
    protected readonly props: T;

    constructor({ id, ...props }: any) {
        this._id = new UniqueId(id);
        this.props = props;
    };

    public equals(entity?: Entity<T>): boolean {
        if (!entity && !isEntity(entity)) return false;
        return this === entity || this._id.equals(entity._id);
    }
}
