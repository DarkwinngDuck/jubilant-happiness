export interface ValueObjectProperties {
    [key: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProperties> {
    public readonly props: T;

    constructor(props: T) {
        this.props = Object.freeze({ ...props });
    }

    public equals(vo?: ValueObject<T>): boolean {
        if (!!vo) {
            return JSON.stringify(this.props) === JSON.stringify(vo.props);
        }
        return false;
    }
}