import { Maybe } from './Maybe';
import { Nullable } from './Nullable';

export type MaybeNullable<T> = Maybe<T> | Nullable<T>;