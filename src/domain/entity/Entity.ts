import { IIdentifier } from './Identifier';
import { UniqueID } from './UniqueID';

export interface IEntity<T extends IEntityDTO> {
    equals(entity?: Entity<T>): boolean;
}
// TODO: rename interface
export interface IEntityDTO {
    id: string;
}

export abstract class Entity<T extends IEntityDTO> implements IEntity<T> {

    protected readonly _id: IIdentifier<string>;
    protected readonly props: Omit<T, 'id'>;

    get id(): IIdentifier<string> { return this._id; }

    static isEntity(v: any): v is Entity<any> { return v instanceof Entity; }

    constructor({ id, ...props }: T) {
        this._id = new UniqueID(id);
        this.props = props;
    };

    public equals(entity?: Entity<T>): boolean {
        return entity && Entity.isEntity(entity) && (this === entity || this.id.equals(entity._id))
    }
}
