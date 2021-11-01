# ts-types

Useful types for better typescript coding

## Install

`npm install @vladbasin/ts-types --save`

## Getting Started

Wrap value into Maybe to explicitly identify it can be undefined
```typescript
import { Maybe } from "@vladbasin/ts-types"

Maybe<T> maybeValue = getValueWhichMightBeUndefined();
```

Wrap value into Nullable to explicitly identify it can be null
```typescript
import { Nullable } from "@vladbasin/ts-types"

Nullable<T> maybeValue = getValueWhichMightBeNull();
```

Wrap value into MaybeNullable to explicitly identify it can be null or also undefined
```typescript
import { MaybeNullable } from "@vladbasin/ts-types"

MaybeNullable<T> maybeValue = getValueWhichMightBeNullOrUndefined();
```