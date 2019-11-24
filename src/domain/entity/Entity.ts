import { IUniqueId, UniqueId } from './UniqueId';

export interface IEntity<T extends IEntityDTO> {
    equals(entity?: Entity<T>): boolean;
}
// TODO: rename interface
export interface IEntityDTO {
    id: string;
}

const isEntity = (v: any): v is Entity<any> => v instanceof Entity;

export abstract class Entity<T extends IEntityDTO> implements IEntity<T> {

    protected readonly _id: IUniqueId<string>;
    protected readonly props: Omit<T, 'id'>;

    constructor({ id, ...props }: T) {
        this._id = new UniqueId(id);
        this.props = props;
    };

    public equals(entity?: Entity<T>): boolean {
        if (!entity && !isEntity(entity)) return false;
        return this === entity || this._id.equals(entity._id);
    }
}
