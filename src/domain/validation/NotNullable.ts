import { Validator, ValidationError } from "./Contracts";

export default function NotNullable<T>(target: T, prop: keyof T): void {
    let _value: any;
    const validator: Validator<T> = (value: T): T => {
        if (!value) {
            throw new ValidationError('Value should not be nullable'); 
        }
        return value;
    } 
    Object.defineProperty(target, prop, {
      get: () => _value,
      set: value => {
          _value = validator(value);
      },
      enumerable: true
    });
}
