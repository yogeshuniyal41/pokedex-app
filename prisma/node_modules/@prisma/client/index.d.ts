
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Pokemon
 * 
 */
export type Pokemon = $Result.DefaultSelection<Prisma.$PokemonPayload>
/**
 * Model PokemonType
 * 
 */
export type PokemonType = $Result.DefaultSelection<Prisma.$PokemonTypePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pokemon
 * const pokemon = await prisma.pokemon.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pokemon
   * const pokemon = await prisma.pokemon.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pokemon`: Exposes CRUD operations for the **Pokemon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pokemon
    * const pokemon = await prisma.pokemon.findMany()
    * ```
    */
  get pokemon(): Prisma.PokemonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemonType`: Exposes CRUD operations for the **PokemonType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokemonTypes
    * const pokemonTypes = await prisma.pokemonType.findMany()
    * ```
    */
  get pokemonType(): Prisma.PokemonTypeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Pokemon: 'Pokemon',
    PokemonType: 'PokemonType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pokemon" | "pokemonType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pokemon: {
        payload: Prisma.$PokemonPayload<ExtArgs>
        fields: Prisma.PokemonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findFirst: {
            args: Prisma.PokemonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findMany: {
            args: Prisma.PokemonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          create: {
            args: Prisma.PokemonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          createMany: {
            args: Prisma.PokemonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          delete: {
            args: Prisma.PokemonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          update: {
            args: Prisma.PokemonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          deleteMany: {
            args: Prisma.PokemonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          upsert: {
            args: Prisma.PokemonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          aggregate: {
            args: Prisma.PokemonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemon>
          }
          groupBy: {
            args: Prisma.PokemonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonCountAggregateOutputType> | number
          }
        }
      }
      PokemonType: {
        payload: Prisma.$PokemonTypePayload<ExtArgs>
        fields: Prisma.PokemonTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          findFirst: {
            args: Prisma.PokemonTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          findMany: {
            args: Prisma.PokemonTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>[]
          }
          create: {
            args: Prisma.PokemonTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          createMany: {
            args: Prisma.PokemonTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>[]
          }
          delete: {
            args: Prisma.PokemonTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          update: {
            args: Prisma.PokemonTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          deleteMany: {
            args: Prisma.PokemonTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>[]
          }
          upsert: {
            args: Prisma.PokemonTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          aggregate: {
            args: Prisma.PokemonTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemonType>
          }
          groupBy: {
            args: Prisma.PokemonTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonTypeCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pokemon?: PokemonOmit
    pokemonType?: PokemonTypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PokemonCountOutputType
   */

  export type PokemonCountOutputType = {
    types: number
  }

  export type PokemonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    types?: boolean | PokemonCountOutputTypeCountTypesArgs
  }

  // Custom InputTypes
  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCountOutputType
     */
    select?: PokemonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonTypeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pokemon
   */

  export type AggregatePokemon = {
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  export type PokemonAvgAggregateOutputType = {
    id: number | null
  }

  export type PokemonSumAggregateOutputType = {
    id: number | null
  }

  export type PokemonMinAggregateOutputType = {
    id: number | null
    name: string | null
    sprite: string | null
  }

  export type PokemonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sprite: string | null
  }

  export type PokemonCountAggregateOutputType = {
    id: number
    name: number
    sprite: number
    _all: number
  }


  export type PokemonAvgAggregateInputType = {
    id?: true
  }

  export type PokemonSumAggregateInputType = {
    id?: true
  }

  export type PokemonMinAggregateInputType = {
    id?: true
    name?: true
    sprite?: true
  }

  export type PokemonMaxAggregateInputType = {
    id?: true
    name?: true
    sprite?: true
  }

  export type PokemonCountAggregateInputType = {
    id?: true
    name?: true
    sprite?: true
    _all?: true
  }

  export type PokemonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to aggregate.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pokemon
    **/
    _count?: true | PokemonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonMaxAggregateInputType
  }

  export type GetPokemonAggregateType<T extends PokemonAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemon[P]>
      : GetScalarType<T[P], AggregatePokemon[P]>
  }




  export type PokemonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonWhereInput
    orderBy?: PokemonOrderByWithAggregationInput | PokemonOrderByWithAggregationInput[]
    by: PokemonScalarFieldEnum[] | PokemonScalarFieldEnum
    having?: PokemonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonCountAggregateInputType | true
    _avg?: PokemonAvgAggregateInputType
    _sum?: PokemonSumAggregateInputType
    _min?: PokemonMinAggregateInputType
    _max?: PokemonMaxAggregateInputType
  }

  export type PokemonGroupByOutputType = {
    id: number
    name: string
    sprite: string
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  type GetPokemonGroupByPayload<T extends PokemonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonGroupByOutputType[P]>
        }
      >
    >


  export type PokemonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sprite?: boolean
    types?: boolean | Pokemon$typesArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sprite?: boolean
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sprite?: boolean
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectScalar = {
    id?: boolean
    name?: boolean
    sprite?: boolean
  }

  export type PokemonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sprite", ExtArgs["result"]["pokemon"]>
  export type PokemonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    types?: boolean | Pokemon$typesArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PokemonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PokemonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PokemonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pokemon"
    objects: {
      types: Prisma.$PokemonTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      sprite: string
    }, ExtArgs["result"]["pokemon"]>
    composites: {}
  }

  type PokemonGetPayload<S extends boolean | null | undefined | PokemonDefaultArgs> = $Result.GetResult<Prisma.$PokemonPayload, S>

  type PokemonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonCountAggregateInputType | true
    }

  export interface PokemonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pokemon'], meta: { name: 'Pokemon' } }
    /**
     * Find zero or one Pokemon that matches the filter.
     * @param {PokemonFindUniqueArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonFindUniqueArgs>(args: SelectSubset<T, PokemonFindUniqueArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pokemon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonFindUniqueOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonFindFirstArgs>(args?: SelectSubset<T, PokemonFindFirstArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pokemon
     * const pokemon = await prisma.pokemon.findMany()
     * 
     * // Get first 10 Pokemon
     * const pokemon = await prisma.pokemon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonFindManyArgs>(args?: SelectSubset<T, PokemonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pokemon.
     * @param {PokemonCreateArgs} args - Arguments to create a Pokemon.
     * @example
     * // Create one Pokemon
     * const Pokemon = await prisma.pokemon.create({
     *   data: {
     *     // ... data to create a Pokemon
     *   }
     * })
     * 
     */
    create<T extends PokemonCreateArgs>(args: SelectSubset<T, PokemonCreateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pokemon.
     * @param {PokemonCreateManyArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonCreateManyArgs>(args?: SelectSubset<T, PokemonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pokemon and returns the data saved in the database.
     * @param {PokemonCreateManyAndReturnArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pokemon.
     * @param {PokemonDeleteArgs} args - Arguments to delete one Pokemon.
     * @example
     * // Delete one Pokemon
     * const Pokemon = await prisma.pokemon.delete({
     *   where: {
     *     // ... filter to delete one Pokemon
     *   }
     * })
     * 
     */
    delete<T extends PokemonDeleteArgs>(args: SelectSubset<T, PokemonDeleteArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pokemon.
     * @param {PokemonUpdateArgs} args - Arguments to update one Pokemon.
     * @example
     * // Update one Pokemon
     * const pokemon = await prisma.pokemon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonUpdateArgs>(args: SelectSubset<T, PokemonUpdateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pokemon.
     * @param {PokemonDeleteManyArgs} args - Arguments to filter Pokemon to delete.
     * @example
     * // Delete a few Pokemon
     * const { count } = await prisma.pokemon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonDeleteManyArgs>(args?: SelectSubset<T, PokemonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonUpdateManyArgs>(args: SelectSubset<T, PokemonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon and returns the data updated in the database.
     * @param {PokemonUpdateManyAndReturnArgs} args - Arguments to update many Pokemon.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pokemon.
     * @param {PokemonUpsertArgs} args - Arguments to update or create a Pokemon.
     * @example
     * // Update or create a Pokemon
     * const pokemon = await prisma.pokemon.upsert({
     *   create: {
     *     // ... data to create a Pokemon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pokemon we want to update
     *   }
     * })
     */
    upsert<T extends PokemonUpsertArgs>(args: SelectSubset<T, PokemonUpsertArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCountArgs} args - Arguments to filter Pokemon to count.
     * @example
     * // Count the number of Pokemon
     * const count = await prisma.pokemon.count({
     *   where: {
     *     // ... the filter for the Pokemon we want to count
     *   }
     * })
    **/
    count<T extends PokemonCountArgs>(
      args?: Subset<T, PokemonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonAggregateArgs>(args: Subset<T, PokemonAggregateArgs>): Prisma.PrismaPromise<GetPokemonAggregateType<T>>

    /**
     * Group by Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonGroupByArgs['orderBy'] }
        : { orderBy?: PokemonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pokemon model
   */
  readonly fields: PokemonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pokemon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    types<T extends Pokemon$typesArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pokemon model
   */
  interface PokemonFieldRefs {
    readonly id: FieldRef<"Pokemon", 'Int'>
    readonly name: FieldRef<"Pokemon", 'String'>
    readonly sprite: FieldRef<"Pokemon", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pokemon findUnique
   */
  export type PokemonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findUniqueOrThrow
   */
  export type PokemonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findFirst
   */
  export type PokemonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findFirstOrThrow
   */
  export type PokemonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findMany
   */
  export type PokemonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon create
   */
  export type PokemonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to create a Pokemon.
     */
    data: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
  }

  /**
   * Pokemon createMany
   */
  export type PokemonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon createManyAndReturn
   */
  export type PokemonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon update
   */
  export type PokemonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to update a Pokemon.
     */
    data: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
    /**
     * Choose, which Pokemon to update.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon updateMany
   */
  export type PokemonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
  }

  /**
   * Pokemon updateManyAndReturn
   */
  export type PokemonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
  }

  /**
   * Pokemon upsert
   */
  export type PokemonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The filter to search for the Pokemon to update in case it exists.
     */
    where: PokemonWhereUniqueInput
    /**
     * In case the Pokemon found by the `where` argument doesn't exist, create a new Pokemon with this data.
     */
    create: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
    /**
     * In case the Pokemon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
  }

  /**
   * Pokemon delete
   */
  export type PokemonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter which Pokemon to delete.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon deleteMany
   */
  export type PokemonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to delete
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to delete.
     */
    limit?: number
  }

  /**
   * Pokemon.types
   */
  export type Pokemon$typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    where?: PokemonTypeWhereInput
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    cursor?: PokemonTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * Pokemon without action
   */
  export type PokemonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
  }


  /**
   * Model PokemonType
   */

  export type AggregatePokemonType = {
    _count: PokemonTypeCountAggregateOutputType | null
    _avg: PokemonTypeAvgAggregateOutputType | null
    _sum: PokemonTypeSumAggregateOutputType | null
    _min: PokemonTypeMinAggregateOutputType | null
    _max: PokemonTypeMaxAggregateOutputType | null
  }

  export type PokemonTypeAvgAggregateOutputType = {
    id: number | null
    pokemonId: number | null
  }

  export type PokemonTypeSumAggregateOutputType = {
    id: number | null
    pokemonId: number | null
  }

  export type PokemonTypeMinAggregateOutputType = {
    id: number | null
    type: string | null
    pokemonId: number | null
  }

  export type PokemonTypeMaxAggregateOutputType = {
    id: number | null
    type: string | null
    pokemonId: number | null
  }

  export type PokemonTypeCountAggregateOutputType = {
    id: number
    type: number
    pokemonId: number
    _all: number
  }


  export type PokemonTypeAvgAggregateInputType = {
    id?: true
    pokemonId?: true
  }

  export type PokemonTypeSumAggregateInputType = {
    id?: true
    pokemonId?: true
  }

  export type PokemonTypeMinAggregateInputType = {
    id?: true
    type?: true
    pokemonId?: true
  }

  export type PokemonTypeMaxAggregateInputType = {
    id?: true
    type?: true
    pokemonId?: true
  }

  export type PokemonTypeCountAggregateInputType = {
    id?: true
    type?: true
    pokemonId?: true
    _all?: true
  }

  export type PokemonTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonType to aggregate.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokemonTypes
    **/
    _count?: true | PokemonTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonTypeMaxAggregateInputType
  }

  export type GetPokemonTypeAggregateType<T extends PokemonTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemonType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemonType[P]>
      : GetScalarType<T[P], AggregatePokemonType[P]>
  }




  export type PokemonTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonTypeWhereInput
    orderBy?: PokemonTypeOrderByWithAggregationInput | PokemonTypeOrderByWithAggregationInput[]
    by: PokemonTypeScalarFieldEnum[] | PokemonTypeScalarFieldEnum
    having?: PokemonTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonTypeCountAggregateInputType | true
    _avg?: PokemonTypeAvgAggregateInputType
    _sum?: PokemonTypeSumAggregateInputType
    _min?: PokemonTypeMinAggregateInputType
    _max?: PokemonTypeMaxAggregateInputType
  }

  export type PokemonTypeGroupByOutputType = {
    id: number
    type: string
    pokemonId: number
    _count: PokemonTypeCountAggregateOutputType | null
    _avg: PokemonTypeAvgAggregateOutputType | null
    _sum: PokemonTypeSumAggregateOutputType | null
    _min: PokemonTypeMinAggregateOutputType | null
    _max: PokemonTypeMaxAggregateOutputType | null
  }

  type GetPokemonTypeGroupByPayload<T extends PokemonTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonTypeGroupByOutputType[P]>
        }
      >
    >


  export type PokemonTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    pokemonId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonType"]>

  export type PokemonTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    pokemonId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonType"]>

  export type PokemonTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    pokemonId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonType"]>

  export type PokemonTypeSelectScalar = {
    id?: boolean
    type?: boolean
    pokemonId?: boolean
  }

  export type PokemonTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "pokemonId", ExtArgs["result"]["pokemonType"]>
  export type PokemonTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type PokemonTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type PokemonTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }

  export type $PokemonTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokemonType"
    objects: {
      pokemon: Prisma.$PokemonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      pokemonId: number
    }, ExtArgs["result"]["pokemonType"]>
    composites: {}
  }

  type PokemonTypeGetPayload<S extends boolean | null | undefined | PokemonTypeDefaultArgs> = $Result.GetResult<Prisma.$PokemonTypePayload, S>

  type PokemonTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonTypeCountAggregateInputType | true
    }

  export interface PokemonTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokemonType'], meta: { name: 'PokemonType' } }
    /**
     * Find zero or one PokemonType that matches the filter.
     * @param {PokemonTypeFindUniqueArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonTypeFindUniqueArgs>(args: SelectSubset<T, PokemonTypeFindUniqueArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokemonType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonTypeFindUniqueOrThrowArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeFindFirstArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonTypeFindFirstArgs>(args?: SelectSubset<T, PokemonTypeFindFirstArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeFindFirstOrThrowArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokemonTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonTypes
     * const pokemonTypes = await prisma.pokemonType.findMany()
     * 
     * // Get first 10 PokemonTypes
     * const pokemonTypes = await prisma.pokemonType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonTypeWithIdOnly = await prisma.pokemonType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonTypeFindManyArgs>(args?: SelectSubset<T, PokemonTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokemonType.
     * @param {PokemonTypeCreateArgs} args - Arguments to create a PokemonType.
     * @example
     * // Create one PokemonType
     * const PokemonType = await prisma.pokemonType.create({
     *   data: {
     *     // ... data to create a PokemonType
     *   }
     * })
     * 
     */
    create<T extends PokemonTypeCreateArgs>(args: SelectSubset<T, PokemonTypeCreateArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokemonTypes.
     * @param {PokemonTypeCreateManyArgs} args - Arguments to create many PokemonTypes.
     * @example
     * // Create many PokemonTypes
     * const pokemonType = await prisma.pokemonType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonTypeCreateManyArgs>(args?: SelectSubset<T, PokemonTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokemonTypes and returns the data saved in the database.
     * @param {PokemonTypeCreateManyAndReturnArgs} args - Arguments to create many PokemonTypes.
     * @example
     * // Create many PokemonTypes
     * const pokemonType = await prisma.pokemonType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokemonTypes and only return the `id`
     * const pokemonTypeWithIdOnly = await prisma.pokemonType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokemonType.
     * @param {PokemonTypeDeleteArgs} args - Arguments to delete one PokemonType.
     * @example
     * // Delete one PokemonType
     * const PokemonType = await prisma.pokemonType.delete({
     *   where: {
     *     // ... filter to delete one PokemonType
     *   }
     * })
     * 
     */
    delete<T extends PokemonTypeDeleteArgs>(args: SelectSubset<T, PokemonTypeDeleteArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokemonType.
     * @param {PokemonTypeUpdateArgs} args - Arguments to update one PokemonType.
     * @example
     * // Update one PokemonType
     * const pokemonType = await prisma.pokemonType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonTypeUpdateArgs>(args: SelectSubset<T, PokemonTypeUpdateArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokemonTypes.
     * @param {PokemonTypeDeleteManyArgs} args - Arguments to filter PokemonTypes to delete.
     * @example
     * // Delete a few PokemonTypes
     * const { count } = await prisma.pokemonType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonTypeDeleteManyArgs>(args?: SelectSubset<T, PokemonTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonTypes
     * const pokemonType = await prisma.pokemonType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonTypeUpdateManyArgs>(args: SelectSubset<T, PokemonTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonTypes and returns the data updated in the database.
     * @param {PokemonTypeUpdateManyAndReturnArgs} args - Arguments to update many PokemonTypes.
     * @example
     * // Update many PokemonTypes
     * const pokemonType = await prisma.pokemonType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokemonTypes and only return the `id`
     * const pokemonTypeWithIdOnly = await prisma.pokemonType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokemonType.
     * @param {PokemonTypeUpsertArgs} args - Arguments to update or create a PokemonType.
     * @example
     * // Update or create a PokemonType
     * const pokemonType = await prisma.pokemonType.upsert({
     *   create: {
     *     // ... data to create a PokemonType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonType we want to update
     *   }
     * })
     */
    upsert<T extends PokemonTypeUpsertArgs>(args: SelectSubset<T, PokemonTypeUpsertArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokemonTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeCountArgs} args - Arguments to filter PokemonTypes to count.
     * @example
     * // Count the number of PokemonTypes
     * const count = await prisma.pokemonType.count({
     *   where: {
     *     // ... the filter for the PokemonTypes we want to count
     *   }
     * })
    **/
    count<T extends PokemonTypeCountArgs>(
      args?: Subset<T, PokemonTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokemonType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonTypeAggregateArgs>(args: Subset<T, PokemonTypeAggregateArgs>): Prisma.PrismaPromise<GetPokemonTypeAggregateType<T>>

    /**
     * Group by PokemonType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonTypeGroupByArgs['orderBy'] }
        : { orderBy?: PokemonTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokemonType model
   */
  readonly fields: PokemonTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokemonType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PokemonType model
   */
  interface PokemonTypeFieldRefs {
    readonly id: FieldRef<"PokemonType", 'Int'>
    readonly type: FieldRef<"PokemonType", 'String'>
    readonly pokemonId: FieldRef<"PokemonType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PokemonType findUnique
   */
  export type PokemonTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType findUniqueOrThrow
   */
  export type PokemonTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType findFirst
   */
  export type PokemonTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonTypes.
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonTypes.
     */
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * PokemonType findFirstOrThrow
   */
  export type PokemonTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonTypes.
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonTypes.
     */
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * PokemonType findMany
   */
  export type PokemonTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonTypes to fetch.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokemonTypes.
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * PokemonType create
   */
  export type PokemonTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a PokemonType.
     */
    data: XOR<PokemonTypeCreateInput, PokemonTypeUncheckedCreateInput>
  }

  /**
   * PokemonType createMany
   */
  export type PokemonTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonTypes.
     */
    data: PokemonTypeCreateManyInput | PokemonTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonType createManyAndReturn
   */
  export type PokemonTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * The data used to create many PokemonTypes.
     */
    data: PokemonTypeCreateManyInput | PokemonTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokemonType update
   */
  export type PokemonTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a PokemonType.
     */
    data: XOR<PokemonTypeUpdateInput, PokemonTypeUncheckedUpdateInput>
    /**
     * Choose, which PokemonType to update.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType updateMany
   */
  export type PokemonTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonTypes.
     */
    data: XOR<PokemonTypeUpdateManyMutationInput, PokemonTypeUncheckedUpdateManyInput>
    /**
     * Filter which PokemonTypes to update
     */
    where?: PokemonTypeWhereInput
    /**
     * Limit how many PokemonTypes to update.
     */
    limit?: number
  }

  /**
   * PokemonType updateManyAndReturn
   */
  export type PokemonTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * The data used to update PokemonTypes.
     */
    data: XOR<PokemonTypeUpdateManyMutationInput, PokemonTypeUncheckedUpdateManyInput>
    /**
     * Filter which PokemonTypes to update
     */
    where?: PokemonTypeWhereInput
    /**
     * Limit how many PokemonTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokemonType upsert
   */
  export type PokemonTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the PokemonType to update in case it exists.
     */
    where: PokemonTypeWhereUniqueInput
    /**
     * In case the PokemonType found by the `where` argument doesn't exist, create a new PokemonType with this data.
     */
    create: XOR<PokemonTypeCreateInput, PokemonTypeUncheckedCreateInput>
    /**
     * In case the PokemonType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonTypeUpdateInput, PokemonTypeUncheckedUpdateInput>
  }

  /**
   * PokemonType delete
   */
  export type PokemonTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter which PokemonType to delete.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType deleteMany
   */
  export type PokemonTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonTypes to delete
     */
    where?: PokemonTypeWhereInput
    /**
     * Limit how many PokemonTypes to delete.
     */
    limit?: number
  }

  /**
   * PokemonType without action
   */
  export type PokemonTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PokemonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sprite: 'sprite'
  };

  export type PokemonScalarFieldEnum = (typeof PokemonScalarFieldEnum)[keyof typeof PokemonScalarFieldEnum]


  export const PokemonTypeScalarFieldEnum: {
    id: 'id',
    type: 'type',
    pokemonId: 'pokemonId'
  };

  export type PokemonTypeScalarFieldEnum = (typeof PokemonTypeScalarFieldEnum)[keyof typeof PokemonTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PokemonWhereInput = {
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    id?: IntFilter<"Pokemon"> | number
    name?: StringFilter<"Pokemon"> | string
    sprite?: StringFilter<"Pokemon"> | string
    types?: PokemonTypeListRelationFilter
  }

  export type PokemonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sprite?: SortOrder
    types?: PokemonTypeOrderByRelationAggregateInput
  }

  export type PokemonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    sprite?: StringFilter<"Pokemon"> | string
    types?: PokemonTypeListRelationFilter
  }, "id" | "name">

  export type PokemonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sprite?: SortOrder
    _count?: PokemonCountOrderByAggregateInput
    _avg?: PokemonAvgOrderByAggregateInput
    _max?: PokemonMaxOrderByAggregateInput
    _min?: PokemonMinOrderByAggregateInput
    _sum?: PokemonSumOrderByAggregateInput
  }

  export type PokemonScalarWhereWithAggregatesInput = {
    AND?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    OR?: PokemonScalarWhereWithAggregatesInput[]
    NOT?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pokemon"> | number
    name?: StringWithAggregatesFilter<"Pokemon"> | string
    sprite?: StringWithAggregatesFilter<"Pokemon"> | string
  }

  export type PokemonTypeWhereInput = {
    AND?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    OR?: PokemonTypeWhereInput[]
    NOT?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    id?: IntFilter<"PokemonType"> | number
    type?: StringFilter<"PokemonType"> | string
    pokemonId?: IntFilter<"PokemonType"> | number
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }

  export type PokemonTypeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    pokemonId?: SortOrder
    pokemon?: PokemonOrderByWithRelationInput
  }

  export type PokemonTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    OR?: PokemonTypeWhereInput[]
    NOT?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    type?: StringFilter<"PokemonType"> | string
    pokemonId?: IntFilter<"PokemonType"> | number
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }, "id">

  export type PokemonTypeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    pokemonId?: SortOrder
    _count?: PokemonTypeCountOrderByAggregateInput
    _avg?: PokemonTypeAvgOrderByAggregateInput
    _max?: PokemonTypeMaxOrderByAggregateInput
    _min?: PokemonTypeMinOrderByAggregateInput
    _sum?: PokemonTypeSumOrderByAggregateInput
  }

  export type PokemonTypeScalarWhereWithAggregatesInput = {
    AND?: PokemonTypeScalarWhereWithAggregatesInput | PokemonTypeScalarWhereWithAggregatesInput[]
    OR?: PokemonTypeScalarWhereWithAggregatesInput[]
    NOT?: PokemonTypeScalarWhereWithAggregatesInput | PokemonTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PokemonType"> | number
    type?: StringWithAggregatesFilter<"PokemonType"> | string
    pokemonId?: IntWithAggregatesFilter<"PokemonType"> | number
  }

  export type PokemonCreateInput = {
    name: string
    sprite: string
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
  }

  export type PokemonUncheckedCreateInput = {
    id?: number
    name: string
    sprite: string
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
  }

  export type PokemonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
  }

  export type PokemonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
  }

  export type PokemonCreateManyInput = {
    id?: number
    name: string
    sprite: string
  }

  export type PokemonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonTypeCreateInput = {
    type: string
    pokemon: PokemonCreateNestedOneWithoutTypesInput
  }

  export type PokemonTypeUncheckedCreateInput = {
    id?: number
    type: string
    pokemonId: number
  }

  export type PokemonTypeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    pokemon?: PokemonUpdateOneRequiredWithoutTypesNestedInput
  }

  export type PokemonTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonTypeCreateManyInput = {
    id?: number
    type: string
    pokemonId: number
  }

  export type PokemonTypeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PokemonTypeListRelationFilter = {
    every?: PokemonTypeWhereInput
    some?: PokemonTypeWhereInput
    none?: PokemonTypeWhereInput
  }

  export type PokemonTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PokemonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sprite?: SortOrder
  }

  export type PokemonAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PokemonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sprite?: SortOrder
  }

  export type PokemonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sprite?: SortOrder
  }

  export type PokemonSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PokemonScalarRelationFilter = {
    is?: PokemonWhereInput
    isNot?: PokemonWhereInput
  }

  export type PokemonTypeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    pokemonId?: SortOrder
  }

  export type PokemonTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
  }

  export type PokemonTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    pokemonId?: SortOrder
  }

  export type PokemonTypeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    pokemonId?: SortOrder
  }

  export type PokemonTypeSumOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
  }

  export type PokemonTypeCreateNestedManyWithoutPokemonInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
  }

  export type PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PokemonTypeUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    upsert?: PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput | PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    set?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    disconnect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    delete?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    update?: PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput | PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: PokemonTypeUpdateManyWithWhereWithoutPokemonInput | PokemonTypeUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    upsert?: PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput | PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    set?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    disconnect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    delete?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    update?: PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput | PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: PokemonTypeUpdateManyWithWhereWithoutPokemonInput | PokemonTypeUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
  }

  export type PokemonCreateNestedOneWithoutTypesInput = {
    create?: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutTypesInput
    connect?: PokemonWhereUniqueInput
  }

  export type PokemonUpdateOneRequiredWithoutTypesNestedInput = {
    create?: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutTypesInput
    upsert?: PokemonUpsertWithoutTypesInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutTypesInput, PokemonUpdateWithoutTypesInput>, PokemonUncheckedUpdateWithoutTypesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PokemonTypeCreateWithoutPokemonInput = {
    type: string
  }

  export type PokemonTypeUncheckedCreateWithoutPokemonInput = {
    id?: number
    type: string
  }

  export type PokemonTypeCreateOrConnectWithoutPokemonInput = {
    where: PokemonTypeWhereUniqueInput
    create: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput>
  }

  export type PokemonTypeCreateManyPokemonInputEnvelope = {
    data: PokemonTypeCreateManyPokemonInput | PokemonTypeCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput = {
    where: PokemonTypeWhereUniqueInput
    update: XOR<PokemonTypeUpdateWithoutPokemonInput, PokemonTypeUncheckedUpdateWithoutPokemonInput>
    create: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput>
  }

  export type PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput = {
    where: PokemonTypeWhereUniqueInput
    data: XOR<PokemonTypeUpdateWithoutPokemonInput, PokemonTypeUncheckedUpdateWithoutPokemonInput>
  }

  export type PokemonTypeUpdateManyWithWhereWithoutPokemonInput = {
    where: PokemonTypeScalarWhereInput
    data: XOR<PokemonTypeUpdateManyMutationInput, PokemonTypeUncheckedUpdateManyWithoutPokemonInput>
  }

  export type PokemonTypeScalarWhereInput = {
    AND?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
    OR?: PokemonTypeScalarWhereInput[]
    NOT?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
    id?: IntFilter<"PokemonType"> | number
    type?: StringFilter<"PokemonType"> | string
    pokemonId?: IntFilter<"PokemonType"> | number
  }

  export type PokemonCreateWithoutTypesInput = {
    name: string
    sprite: string
  }

  export type PokemonUncheckedCreateWithoutTypesInput = {
    id?: number
    name: string
    sprite: string
  }

  export type PokemonCreateOrConnectWithoutTypesInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
  }

  export type PokemonUpsertWithoutTypesInput = {
    update: XOR<PokemonUpdateWithoutTypesInput, PokemonUncheckedUpdateWithoutTypesInput>
    create: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutTypesInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutTypesInput, PokemonUncheckedUpdateWithoutTypesInput>
  }

  export type PokemonUpdateWithoutTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonUncheckedUpdateWithoutTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonTypeCreateManyPokemonInput = {
    id?: number
    type: string
  }

  export type PokemonTypeUpdateWithoutPokemonInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonTypeUncheckedUpdateWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonTypeUncheckedUpdateManyWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}