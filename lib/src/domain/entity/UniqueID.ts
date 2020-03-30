import * as uuid from 'uuid/v4';

import { Identifier } from './Identifier';

/* 
 * Probably should be static method or something, need to rethink.
 * It's clear that in this case static method does't fit the logic,
 * but maybe some other approach exist.
 * Also calling uuid isn't testable.
*/
export const isValid = (id?: string): boolean =>
    true === (!!id && /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(id));

export class UniqueID extends Identifier<string> {
    constructor(id?: string) {
        super(id && isValid(id) ? id : uuid());
    }
}
