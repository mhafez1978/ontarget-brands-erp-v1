
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model SubscriptionPlan
 * 
 */
export type SubscriptionPlan = $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>
/**
 * Model Feature
 * 
 */
export type Feature = $Result.DefaultSelection<Prisma.$FeaturePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectStaff
 * 
 */
export type ProjectStaff = $Result.DefaultSelection<Prisma.$ProjectStaffPayload>
/**
 * Model ProjectCustomer
 * 
 */
export type ProjectCustomer = $Result.DefaultSelection<Prisma.$ProjectCustomerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  STAFF: 'STAFF',
  CUSTOMER: 'CUSTOMER',
  GUEST: 'GUEST'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CompanyCategory: {
  AGRICULTURE: 'AGRICULTURE',
  AUTOMOTIVE: 'AUTOMOTIVE',
  CONSTRUCTION: 'CONSTRUCTION',
  CONSULTING: 'CONSULTING',
  EDUCATION: 'EDUCATION',
  ENERGY: 'ENERGY',
  ENTERTAINMENT: 'ENTERTAINMENT',
  FINANCE: 'FINANCE',
  FOOD_AND_BEVERAGE: 'FOOD_AND_BEVERAGE',
  GOVERNMENT: 'GOVERNMENT',
  HEALTHCARE: 'HEALTHCARE',
  HOSPITALITY: 'HOSPITALITY',
  INTERIOR_DESIGN: 'INTERIOR_DESIGN',
  MANUFACTURING: 'MANUFACTURING',
  MARKETING: 'MARKETING',
  NON_PROFIT: 'NON_PROFIT',
  PHARMACEUTICAL: 'PHARMACEUTICAL',
  REAL_ESTATE: 'REAL_ESTATE',
  RETAIL: 'RETAIL',
  TECHNOLOGY: 'TECHNOLOGY',
  TELECOMMUNICATIONS: 'TELECOMMUNICATIONS',
  TRANSPORTATION: 'TRANSPORTATION'
};

export type CompanyCategory = (typeof CompanyCategory)[keyof typeof CompanyCategory]


export const BusinessType: {
  SERVICES: 'SERVICES',
  PRODUCTS: 'PRODUCTS',
  SERVICES_AND_PRODUCTS: 'SERVICES_AND_PRODUCTS',
  OTHER: 'OTHER'
};

export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType]


export const ProjectStatus: {
  PLANNING: 'PLANNING',
  IN_PROGRESS: 'IN_PROGRESS',
  ON_HOLD: 'ON_HOLD',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
  ARCHIVED: 'ARCHIVED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CompanyCategory = $Enums.CompanyCategory

export const CompanyCategory: typeof $Enums.CompanyCategory

export type BusinessType = $Enums.BusinessType

export const BusinessType: typeof $Enums.BusinessType

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlans
    * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
    * ```
    */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.feature.findMany()
    * ```
    */
  get feature(): Prisma.FeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectStaff`: Exposes CRUD operations for the **ProjectStaff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectStaffs
    * const projectStaffs = await prisma.projectStaff.findMany()
    * ```
    */
  get projectStaff(): Prisma.ProjectStaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectCustomer`: Exposes CRUD operations for the **ProjectCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectCustomers
    * const projectCustomers = await prisma.projectCustomer.findMany()
    * ```
    */
  get projectCustomer(): Prisma.ProjectCustomerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    User: 'User',
    Company: 'Company',
    SubscriptionPlan: 'SubscriptionPlan',
    Feature: 'Feature',
    Project: 'Project',
    ProjectStaff: 'ProjectStaff',
    ProjectCustomer: 'ProjectCustomer'
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
      modelProps: "user" | "company" | "subscriptionPlan" | "feature" | "project" | "projectStaff" | "projectCustomer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlan>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanCountAggregateOutputType> | number
          }
        }
      }
      Feature: {
        payload: Prisma.$FeaturePayload<ExtArgs>
        fields: Prisma.FeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findFirst: {
            args: Prisma.FeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findMany: {
            args: Prisma.FeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          create: {
            args: Prisma.FeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          createMany: {
            args: Prisma.FeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          update: {
            args: Prisma.FeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          deleteMany: {
            args: Prisma.FeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeature>
          }
          groupBy: {
            args: Prisma.FeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectStaff: {
        payload: Prisma.$ProjectStaffPayload<ExtArgs>
        fields: Prisma.ProjectStaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectStaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectStaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectStaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectStaffPayload>
          }
          findFirst: {
            args: Prisma.ProjectStaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectStaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectStaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectStaffPayload>
          }
          findMany: {
            args: Prisma.ProjectStaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectStaffPayload>[]
          }
          create: {
            args: Prisma.ProjectStaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectStaffPayload>
          }
          createMany: {
            args: Prisma.ProjectStaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectStaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectStaffPayload>
          }
          update: {
            args: Prisma.ProjectStaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectStaffPayload>
          }
          deleteMany: {
            args: Prisma.ProjectStaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectStaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectStaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectStaffPayload>
          }
          aggregate: {
            args: Prisma.ProjectStaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectStaff>
          }
          groupBy: {
            args: Prisma.ProjectStaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectStaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectStaffCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectStaffCountAggregateOutputType> | number
          }
        }
      }
      ProjectCustomer: {
        payload: Prisma.$ProjectCustomerPayload<ExtArgs>
        fields: Prisma.ProjectCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCustomerPayload>
          }
          findFirst: {
            args: Prisma.ProjectCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCustomerPayload>
          }
          findMany: {
            args: Prisma.ProjectCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCustomerPayload>[]
          }
          create: {
            args: Prisma.ProjectCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCustomerPayload>
          }
          createMany: {
            args: Prisma.ProjectCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCustomerPayload>
          }
          update: {
            args: Prisma.ProjectCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCustomerPayload>
          }
          deleteMany: {
            args: Prisma.ProjectCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCustomerPayload>
          }
          aggregate: {
            args: Prisma.ProjectCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectCustomer>
          }
          groupBy: {
            args: Prisma.ProjectCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCustomerCountAggregateOutputType> | number
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
    user?: UserOmit
    company?: CompanyOmit
    subscriptionPlan?: SubscriptionPlanOmit
    feature?: FeatureOmit
    project?: ProjectOmit
    projectStaff?: ProjectStaffOmit
    projectCustomer?: ProjectCustomerOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedCompanies: number
    companies: number
    ProjectCustomer: number
    ProjectStaff: number
    Project: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedCompanies?: boolean | UserCountOutputTypeCountOwnedCompaniesArgs
    companies?: boolean | UserCountOutputTypeCountCompaniesArgs
    ProjectCustomer?: boolean | UserCountOutputTypeCountProjectCustomerArgs
    ProjectStaff?: boolean | UserCountOutputTypeCountProjectStaffArgs
    Project?: boolean | UserCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCustomerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectStaffWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    activeUsers: number
    users: number
    Project: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activeUsers?: boolean | CompanyCountOutputTypeCountActiveUsersArgs
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    Project?: boolean | CompanyCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountActiveUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type SubscriptionPlanCountOutputType
   */

  export type SubscriptionPlanCountOutputType = {
    features: number
    companies: number
  }

  export type SubscriptionPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | SubscriptionPlanCountOutputTypeCountFeaturesArgs
    companies?: boolean | SubscriptionPlanCountOutputTypeCountCompaniesArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
     */
    select?: SubscriptionPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }


  /**
   * Count Type FeatureCountOutputType
   */

  export type FeatureCountOutputType = {
    plans: number
  }

  export type FeatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plans?: boolean | FeatureCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureCountOutputType
     */
    select?: FeatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    staff: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | ProjectCountOutputTypeCountStaffArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectStaffWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    phone: string | null
    birthDate: Date | null
    password: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    companyId: string | null
    isActive: boolean | null
    role: $Enums.Role | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    phone: string | null
    birthDate: Date | null
    password: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    companyId: string | null
    isActive: boolean | null
    role: $Enums.Role | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    phone: number
    birthDate: number
    password: number
    addressLine1: number
    addressLine2: number
    city: number
    state: number
    zipCode: number
    country: number
    companyId: number
    isActive: number
    role: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    phone?: true
    birthDate?: true
    password?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    companyId?: true
    isActive?: true
    role?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    phone?: true
    birthDate?: true
    password?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    companyId?: true
    isActive?: true
    role?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    phone?: true
    birthDate?: true
    password?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    companyId?: true
    isActive?: true
    role?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    image: string | null
    phone: string | null
    birthDate: Date | null
    password: string
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    companyId: string | null
    isActive: boolean
    role: $Enums.Role
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    phone?: boolean
    birthDate?: boolean
    password?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    companyId?: boolean
    isActive?: boolean
    role?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownedCompanies?: boolean | User$ownedCompaniesArgs<ExtArgs>
    companies?: boolean | User$companiesArgs<ExtArgs>
    company?: boolean | User$companyArgs<ExtArgs>
    ProjectCustomer?: boolean | User$ProjectCustomerArgs<ExtArgs>
    ProjectStaff?: boolean | User$ProjectStaffArgs<ExtArgs>
    Project?: boolean | User$ProjectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    phone?: boolean
    birthDate?: boolean
    password?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    companyId?: boolean
    isActive?: boolean
    role?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "phone" | "birthDate" | "password" | "addressLine1" | "addressLine2" | "city" | "state" | "zipCode" | "country" | "companyId" | "isActive" | "role" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedCompanies?: boolean | User$ownedCompaniesArgs<ExtArgs>
    companies?: boolean | User$companiesArgs<ExtArgs>
    company?: boolean | User$companyArgs<ExtArgs>
    ProjectCustomer?: boolean | User$ProjectCustomerArgs<ExtArgs>
    ProjectStaff?: boolean | User$ProjectStaffArgs<ExtArgs>
    Project?: boolean | User$ProjectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedCompanies: Prisma.$CompanyPayload<ExtArgs>[]
      companies: Prisma.$CompanyPayload<ExtArgs>[]
      company: Prisma.$CompanyPayload<ExtArgs> | null
      ProjectCustomer: Prisma.$ProjectCustomerPayload<ExtArgs>[]
      ProjectStaff: Prisma.$ProjectStaffPayload<ExtArgs>[]
      Project: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      image: string | null
      phone: string | null
      birthDate: Date | null
      password: string
      addressLine1: string | null
      addressLine2: string | null
      city: string | null
      state: string | null
      zipCode: string | null
      country: string | null
      companyId: string | null
      isActive: boolean
      role: $Enums.Role
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedCompanies<T extends User$ownedCompaniesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedCompaniesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companies<T extends User$companiesArgs<ExtArgs> = {}>(args?: Subset<T, User$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ProjectCustomer<T extends User$ProjectCustomerArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectCustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProjectStaff<T extends User$ProjectStaffArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectStaffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Project<T extends User$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly addressLine1: FieldRef<"User", 'String'>
    readonly addressLine2: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly zipCode: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly companyId: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedCompanies
   */
  export type User$ownedCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * User.companies
   */
  export type User$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User.ProjectCustomer
   */
  export type User$ProjectCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
    where?: ProjectCustomerWhereInput
    orderBy?: ProjectCustomerOrderByWithRelationInput | ProjectCustomerOrderByWithRelationInput[]
    cursor?: ProjectCustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCustomerScalarFieldEnum | ProjectCustomerScalarFieldEnum[]
  }

  /**
   * User.ProjectStaff
   */
  export type User$ProjectStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
    where?: ProjectStaffWhereInput
    orderBy?: ProjectStaffOrderByWithRelationInput | ProjectStaffOrderByWithRelationInput[]
    cursor?: ProjectStaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectStaffScalarFieldEnum | ProjectStaffScalarFieldEnum[]
  }

  /**
   * User.Project
   */
  export type User$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    slogan: string | null
    category: $Enums.CompanyCategory | null
    type: $Enums.BusinessType | null
    logo: string | null
    domain: string | null
    phone: string | null
    supportEmail: string | null
    salesEmail: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    isActive: boolean | null
    gmailConnected: boolean | null
    office365Connected: boolean | null
    ownerId: string | null
    subscriptionPlanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slogan: string | null
    category: $Enums.CompanyCategory | null
    type: $Enums.BusinessType | null
    logo: string | null
    domain: string | null
    phone: string | null
    supportEmail: string | null
    salesEmail: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    isActive: boolean | null
    gmailConnected: boolean | null
    office365Connected: boolean | null
    ownerId: string | null
    subscriptionPlanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    slogan: number
    category: number
    type: number
    logo: number
    domain: number
    phone: number
    supportEmail: number
    salesEmail: number
    addressLine1: number
    addressLine2: number
    city: number
    state: number
    zipCode: number
    country: number
    isActive: number
    gmailConnected: number
    office365Connected: number
    ownerId: number
    subscriptionPlanId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    slogan?: true
    category?: true
    type?: true
    logo?: true
    domain?: true
    phone?: true
    supportEmail?: true
    salesEmail?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    isActive?: true
    gmailConnected?: true
    office365Connected?: true
    ownerId?: true
    subscriptionPlanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    slogan?: true
    category?: true
    type?: true
    logo?: true
    domain?: true
    phone?: true
    supportEmail?: true
    salesEmail?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    isActive?: true
    gmailConnected?: true
    office365Connected?: true
    ownerId?: true
    subscriptionPlanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    slogan?: true
    category?: true
    type?: true
    logo?: true
    domain?: true
    phone?: true
    supportEmail?: true
    salesEmail?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    isActive?: true
    gmailConnected?: true
    office365Connected?: true
    ownerId?: true
    subscriptionPlanId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    slogan: string | null
    category: $Enums.CompanyCategory | null
    type: $Enums.BusinessType | null
    logo: string | null
    domain: string | null
    phone: string | null
    supportEmail: string | null
    salesEmail: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    isActive: boolean
    gmailConnected: boolean
    office365Connected: boolean
    ownerId: string
    subscriptionPlanId: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slogan?: boolean
    category?: boolean
    type?: boolean
    logo?: boolean
    domain?: boolean
    phone?: boolean
    supportEmail?: boolean
    salesEmail?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    ownerId?: boolean
    subscriptionPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    activeUsers?: boolean | Company$activeUsersArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    subscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    Project?: boolean | Company$ProjectArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>



  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    slogan?: boolean
    category?: boolean
    type?: boolean
    logo?: boolean
    domain?: boolean
    phone?: boolean
    supportEmail?: boolean
    salesEmail?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    ownerId?: boolean
    subscriptionPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slogan" | "category" | "type" | "logo" | "domain" | "phone" | "supportEmail" | "salesEmail" | "addressLine1" | "addressLine2" | "city" | "state" | "zipCode" | "country" | "isActive" | "gmailConnected" | "office365Connected" | "ownerId" | "subscriptionPlanId" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    activeUsers?: boolean | Company$activeUsersArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    subscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    Project?: boolean | Company$ProjectArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      activeUsers: Prisma.$UserPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      subscriptionPlan: Prisma.$SubscriptionPlanPayload<ExtArgs>
      Project: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slogan: string | null
      category: $Enums.CompanyCategory | null
      type: $Enums.BusinessType | null
      logo: string | null
      domain: string | null
      phone: string | null
      supportEmail: string | null
      salesEmail: string | null
      addressLine1: string | null
      addressLine2: string | null
      city: string | null
      state: string | null
      zipCode: string | null
      country: string | null
      isActive: boolean
      gmailConnected: boolean
      office365Connected: boolean
      ownerId: string
      subscriptionPlanId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activeUsers<T extends Company$activeUsersArgs<ExtArgs> = {}>(args?: Subset<T, Company$activeUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptionPlan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Project<T extends Company$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, Company$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly slogan: FieldRef<"Company", 'String'>
    readonly category: FieldRef<"Company", 'CompanyCategory'>
    readonly type: FieldRef<"Company", 'BusinessType'>
    readonly logo: FieldRef<"Company", 'String'>
    readonly domain: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly supportEmail: FieldRef<"Company", 'String'>
    readonly salesEmail: FieldRef<"Company", 'String'>
    readonly addressLine1: FieldRef<"Company", 'String'>
    readonly addressLine2: FieldRef<"Company", 'String'>
    readonly city: FieldRef<"Company", 'String'>
    readonly state: FieldRef<"Company", 'String'>
    readonly zipCode: FieldRef<"Company", 'String'>
    readonly country: FieldRef<"Company", 'String'>
    readonly isActive: FieldRef<"Company", 'Boolean'>
    readonly gmailConnected: FieldRef<"Company", 'Boolean'>
    readonly office365Connected: FieldRef<"Company", 'Boolean'>
    readonly ownerId: FieldRef<"Company", 'String'>
    readonly subscriptionPlanId: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.activeUsers
   */
  export type Company$activeUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.Project
   */
  export type Company$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanAvgAggregateOutputType = {
    pricePerMonth: Decimal | null
    maxUsers: number | null
    maxAdmins: number | null
    maxManagers: number | null
    maxCustomers: number | null
    storageLimitMB: number | null
    maxProjects: number | null
  }

  export type SubscriptionPlanSumAggregateOutputType = {
    pricePerMonth: Decimal | null
    maxUsers: number | null
    maxAdmins: number | null
    maxManagers: number | null
    maxCustomers: number | null
    storageLimitMB: number | null
    maxProjects: number | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    pricePerMonth: Decimal | null
    description: string | null
    maxUsers: number | null
    maxAdmins: number | null
    maxManagers: number | null
    maxCustomers: number | null
    storageLimitMB: number | null
    maxProjects: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    pricePerMonth: Decimal | null
    description: string | null
    maxUsers: number | null
    maxAdmins: number | null
    maxManagers: number | null
    maxCustomers: number | null
    storageLimitMB: number | null
    maxProjects: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number
    name: number
    pricePerMonth: number
    description: number
    maxUsers: number
    maxAdmins: number
    maxManagers: number
    maxCustomers: number
    storageLimitMB: number
    maxProjects: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionPlanAvgAggregateInputType = {
    pricePerMonth?: true
    maxUsers?: true
    maxAdmins?: true
    maxManagers?: true
    maxCustomers?: true
    storageLimitMB?: true
    maxProjects?: true
  }

  export type SubscriptionPlanSumAggregateInputType = {
    pricePerMonth?: true
    maxUsers?: true
    maxAdmins?: true
    maxManagers?: true
    maxCustomers?: true
    storageLimitMB?: true
    maxProjects?: true
  }

  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    name?: true
    pricePerMonth?: true
    description?: true
    maxUsers?: true
    maxAdmins?: true
    maxManagers?: true
    maxCustomers?: true
    storageLimitMB?: true
    maxProjects?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    name?: true
    pricePerMonth?: true
    description?: true
    maxUsers?: true
    maxAdmins?: true
    maxManagers?: true
    maxCustomers?: true
    storageLimitMB?: true
    maxProjects?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    name?: true
    pricePerMonth?: true
    description?: true
    maxUsers?: true
    maxAdmins?: true
    maxManagers?: true
    maxCustomers?: true
    storageLimitMB?: true
    maxProjects?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlans
    **/
    _count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }




  export type SubscriptionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithAggregationInput | SubscriptionPlanOrderByWithAggregationInput[]
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanCountAggregateInputType | true
    _avg?: SubscriptionPlanAvgAggregateInputType
    _sum?: SubscriptionPlanSumAggregateInputType
    _min?: SubscriptionPlanMinAggregateInputType
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type SubscriptionPlanGroupByOutputType = {
    id: string
    name: string
    pricePerMonth: Decimal
    description: string | null
    maxUsers: number
    maxAdmins: number
    maxManagers: number
    maxCustomers: number
    storageLimitMB: number
    maxProjects: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pricePerMonth?: boolean
    description?: boolean
    maxUsers?: boolean
    maxAdmins?: boolean
    maxManagers?: boolean
    maxCustomers?: boolean
    storageLimitMB?: boolean
    maxProjects?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    features?: boolean | SubscriptionPlan$featuresArgs<ExtArgs>
    companies?: boolean | SubscriptionPlan$companiesArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlan"]>



  export type SubscriptionPlanSelectScalar = {
    id?: boolean
    name?: boolean
    pricePerMonth?: boolean
    description?: boolean
    maxUsers?: boolean
    maxAdmins?: boolean
    maxManagers?: boolean
    maxCustomers?: boolean
    storageLimitMB?: boolean
    maxProjects?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "pricePerMonth" | "description" | "maxUsers" | "maxAdmins" | "maxManagers" | "maxCustomers" | "storageLimitMB" | "maxProjects" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["subscriptionPlan"]>
  export type SubscriptionPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | SubscriptionPlan$featuresArgs<ExtArgs>
    companies?: boolean | SubscriptionPlan$companiesArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPlan"
    objects: {
      features: Prisma.$FeaturePayload<ExtArgs>[]
      companies: Prisma.$CompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      pricePerMonth: Prisma.Decimal
      description: string | null
      maxUsers: number
      maxAdmins: number
      maxManagers: number
      maxCustomers: number
      storageLimitMB: number
      maxProjects: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionPlan"]>
    composites: {}
  }

  type SubscriptionPlanGetPayload<S extends boolean | null | undefined | SubscriptionPlanDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>

  type SubscriptionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPlanCountAggregateInputType | true
    }

  export interface SubscriptionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan'], meta: { name: 'SubscriptionPlan' } }
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     * 
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPlanCreateArgs>(args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPlanDeleteArgs>(args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPlanUpdateArgs>(args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionPlanAggregateArgs>(args: Subset<T, SubscriptionPlanAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPlan model
   */
  readonly fields: SubscriptionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    features<T extends SubscriptionPlan$featuresArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companies<T extends SubscriptionPlan$companiesArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubscriptionPlan model
   */
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<"SubscriptionPlan", 'String'>
    readonly name: FieldRef<"SubscriptionPlan", 'String'>
    readonly pricePerMonth: FieldRef<"SubscriptionPlan", 'Decimal'>
    readonly description: FieldRef<"SubscriptionPlan", 'String'>
    readonly maxUsers: FieldRef<"SubscriptionPlan", 'Int'>
    readonly maxAdmins: FieldRef<"SubscriptionPlan", 'Int'>
    readonly maxManagers: FieldRef<"SubscriptionPlan", 'Int'>
    readonly maxCustomers: FieldRef<"SubscriptionPlan", 'Int'>
    readonly storageLimitMB: FieldRef<"SubscriptionPlan", 'Int'>
    readonly maxProjects: FieldRef<"SubscriptionPlan", 'Int'>
    readonly isActive: FieldRef<"SubscriptionPlan", 'Boolean'>
    readonly createdAt: FieldRef<"SubscriptionPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan.features
   */
  export type SubscriptionPlan$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    cursor?: FeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan.companies
   */
  export type SubscriptionPlan$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
  }


  /**
   * Model Feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  export type FeatureMinAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    isActive: boolean | null
  }

  export type FeatureMaxAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    isActive: boolean | null
  }

  export type FeatureCountAggregateOutputType = {
    id: number
    key: number
    label: number
    isActive: number
    _all: number
  }


  export type FeatureMinAggregateInputType = {
    id?: true
    key?: true
    label?: true
    isActive?: true
  }

  export type FeatureMaxAggregateInputType = {
    id?: true
    key?: true
    label?: true
    isActive?: true
  }

  export type FeatureCountAggregateInputType = {
    id?: true
    key?: true
    label?: true
    isActive?: true
    _all?: true
  }

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType
  }

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>
  }




  export type FeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithAggregationInput | FeatureOrderByWithAggregationInput[]
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum
    having?: FeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCountAggregateInputType | true
    _min?: FeatureMinAggregateInputType
    _max?: FeatureMaxAggregateInputType
  }

  export type FeatureGroupByOutputType = {
    id: string
    key: string
    label: string
    isActive: boolean
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
        }
      >
    >


  export type FeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    isActive?: boolean
    plans?: boolean | Feature$plansArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>



  export type FeatureSelectScalar = {
    id?: boolean
    key?: boolean
    label?: boolean
    isActive?: boolean
  }

  export type FeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "label" | "isActive", ExtArgs["result"]["feature"]>
  export type FeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plans?: boolean | Feature$plansArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feature"
    objects: {
      plans: Prisma.$SubscriptionPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      label: string
      isActive: boolean
    }, ExtArgs["result"]["feature"]>
    composites: {}
  }

  type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = $Result.GetResult<Prisma.$FeaturePayload, S>

  type FeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureCountAggregateInputType | true
    }

  export interface FeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feature'], meta: { name: 'Feature' } }
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFindUniqueArgs>(args: SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFindFirstArgs>(args?: SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureWithIdOnly = await prisma.feature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureFindManyArgs>(args?: SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     * 
     */
    create<T extends FeatureCreateArgs>(args: SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Features.
     * @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureCreateManyArgs>(args?: SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     * 
     */
    delete<T extends FeatureDeleteArgs>(args: SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureUpdateArgs>(args: SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureDeleteManyArgs>(args?: SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureUpdateManyArgs>(args: SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     */
    upsert<T extends FeatureUpsertArgs>(args: SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(
      args?: Subset<T, FeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureAggregateArgs>(args: Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
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
      T extends FeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feature model
   */
  readonly fields: FeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plans<T extends Feature$plansArgs<ExtArgs> = {}>(args?: Subset<T, Feature$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Feature model
   */
  interface FeatureFieldRefs {
    readonly id: FieldRef<"Feature", 'String'>
    readonly key: FieldRef<"Feature", 'String'>
    readonly label: FieldRef<"Feature", 'String'>
    readonly isActive: FieldRef<"Feature", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Feature findUnique
   */
  export type FeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findUniqueOrThrow
   */
  export type FeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findFirst
   */
  export type FeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findFirstOrThrow
   */
  export type FeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findMany
   */
  export type FeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Features to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature create
   */
  export type FeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Feature.
     */
    data: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
  }

  /**
   * Feature createMany
   */
  export type FeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature update
   */
  export type FeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Feature.
     */
    data: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
    /**
     * Choose, which Feature to update.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature updateMany
   */
  export type FeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature upsert
   */
  export type FeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: FeatureWhereUniqueInput
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
  }

  /**
   * Feature delete
   */
  export type FeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter which Feature to delete.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature deleteMany
   */
  export type FeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to delete.
     */
    limit?: number
  }

  /**
   * Feature.plans
   */
  export type Feature$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    cursor?: SubscriptionPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * Feature without action
   */
  export type FeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    budget: Decimal | null
    progress: number | null
  }

  export type ProjectSumAggregateOutputType = {
    budget: Decimal | null
    progress: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    startDate: Date | null
    endDate: Date | null
    companyId: string | null
    budget: Decimal | null
    progress: number | null
    managerId: string | null
    customerid: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    startDate: Date | null
    endDate: Date | null
    companyId: string | null
    budget: Decimal | null
    progress: number | null
    managerId: string | null
    customerid: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    startDate: number
    endDate: number
    companyId: number
    budget: number
    progress: number
    managerId: number
    customerid: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    budget?: true
    progress?: true
  }

  export type ProjectSumAggregateInputType = {
    budget?: true
    progress?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    companyId?: true
    budget?: true
    progress?: true
    managerId?: true
    customerid?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    companyId?: true
    budget?: true
    progress?: true
    managerId?: true
    customerid?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    companyId?: true
    budget?: true
    progress?: true
    managerId?: true
    customerid?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: $Enums.ProjectStatus
    startDate: Date | null
    endDate: Date | null
    companyId: string
    budget: Decimal | null
    progress: number | null
    managerId: string
    customerid: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    companyId?: boolean
    budget?: boolean
    progress?: boolean
    managerId?: boolean
    customerid?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | Project$customerArgs<ExtArgs>
    staff?: boolean | Project$staffArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    companyId?: boolean
    budget?: boolean
    progress?: boolean
    managerId?: boolean
    customerid?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "startDate" | "endDate" | "companyId" | "budget" | "progress" | "managerId" | "customerid" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | Project$customerArgs<ExtArgs>
    staff?: boolean | Project$staffArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      manager: Prisma.$UserPayload<ExtArgs>
      customer: Prisma.$ProjectCustomerPayload<ExtArgs> | null
      staff: Prisma.$ProjectStaffPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: $Enums.ProjectStatus
      startDate: Date | null
      endDate: Date | null
      companyId: string
      budget: Prisma.Decimal | null
      progress: number | null
      managerId: string
      customerid: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manager<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends Project$customerArgs<ExtArgs> = {}>(args?: Subset<T, Project$customerArgs<ExtArgs>>): Prisma__ProjectCustomerClient<$Result.GetResult<Prisma.$ProjectCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staff<T extends Project$staffArgs<ExtArgs> = {}>(args?: Subset<T, Project$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly companyId: FieldRef<"Project", 'String'>
    readonly budget: FieldRef<"Project", 'Decimal'>
    readonly progress: FieldRef<"Project", 'Int'>
    readonly managerId: FieldRef<"Project", 'String'>
    readonly customerid: FieldRef<"Project", 'String'>
    readonly isActive: FieldRef<"Project", 'Boolean'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.customer
   */
  export type Project$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
    where?: ProjectCustomerWhereInput
  }

  /**
   * Project.staff
   */
  export type Project$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
    where?: ProjectStaffWhereInput
    orderBy?: ProjectStaffOrderByWithRelationInput | ProjectStaffOrderByWithRelationInput[]
    cursor?: ProjectStaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectStaffScalarFieldEnum | ProjectStaffScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectStaff
   */

  export type AggregateProjectStaff = {
    _count: ProjectStaffCountAggregateOutputType | null
    _min: ProjectStaffMinAggregateOutputType | null
    _max: ProjectStaffMaxAggregateOutputType | null
  }

  export type ProjectStaffMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    assignedAt: Date | null
  }

  export type ProjectStaffMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    assignedAt: Date | null
  }

  export type ProjectStaffCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    assignedAt: number
    _all: number
  }


  export type ProjectStaffMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    assignedAt?: true
  }

  export type ProjectStaffMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    assignedAt?: true
  }

  export type ProjectStaffCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    assignedAt?: true
    _all?: true
  }

  export type ProjectStaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectStaff to aggregate.
     */
    where?: ProjectStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectStaffs to fetch.
     */
    orderBy?: ProjectStaffOrderByWithRelationInput | ProjectStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectStaffs
    **/
    _count?: true | ProjectStaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectStaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectStaffMaxAggregateInputType
  }

  export type GetProjectStaffAggregateType<T extends ProjectStaffAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectStaff[P]>
      : GetScalarType<T[P], AggregateProjectStaff[P]>
  }




  export type ProjectStaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectStaffWhereInput
    orderBy?: ProjectStaffOrderByWithAggregationInput | ProjectStaffOrderByWithAggregationInput[]
    by: ProjectStaffScalarFieldEnum[] | ProjectStaffScalarFieldEnum
    having?: ProjectStaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectStaffCountAggregateInputType | true
    _min?: ProjectStaffMinAggregateInputType
    _max?: ProjectStaffMaxAggregateInputType
  }

  export type ProjectStaffGroupByOutputType = {
    id: string
    projectId: string
    userId: string
    assignedAt: Date
    _count: ProjectStaffCountAggregateOutputType | null
    _min: ProjectStaffMinAggregateOutputType | null
    _max: ProjectStaffMaxAggregateOutputType | null
  }

  type GetProjectStaffGroupByPayload<T extends ProjectStaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectStaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectStaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectStaffGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectStaffGroupByOutputType[P]>
        }
      >
    >


  export type ProjectStaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    assignedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectStaff"]>



  export type ProjectStaffSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    assignedAt?: boolean
  }

  export type ProjectStaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "assignedAt", ExtArgs["result"]["projectStaff"]>
  export type ProjectStaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectStaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectStaff"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: string
      assignedAt: Date
    }, ExtArgs["result"]["projectStaff"]>
    composites: {}
  }

  type ProjectStaffGetPayload<S extends boolean | null | undefined | ProjectStaffDefaultArgs> = $Result.GetResult<Prisma.$ProjectStaffPayload, S>

  type ProjectStaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectStaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectStaffCountAggregateInputType | true
    }

  export interface ProjectStaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectStaff'], meta: { name: 'ProjectStaff' } }
    /**
     * Find zero or one ProjectStaff that matches the filter.
     * @param {ProjectStaffFindUniqueArgs} args - Arguments to find a ProjectStaff
     * @example
     * // Get one ProjectStaff
     * const projectStaff = await prisma.projectStaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectStaffFindUniqueArgs>(args: SelectSubset<T, ProjectStaffFindUniqueArgs<ExtArgs>>): Prisma__ProjectStaffClient<$Result.GetResult<Prisma.$ProjectStaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectStaff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectStaffFindUniqueOrThrowArgs} args - Arguments to find a ProjectStaff
     * @example
     * // Get one ProjectStaff
     * const projectStaff = await prisma.projectStaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectStaffFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectStaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectStaffClient<$Result.GetResult<Prisma.$ProjectStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectStaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectStaffFindFirstArgs} args - Arguments to find a ProjectStaff
     * @example
     * // Get one ProjectStaff
     * const projectStaff = await prisma.projectStaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectStaffFindFirstArgs>(args?: SelectSubset<T, ProjectStaffFindFirstArgs<ExtArgs>>): Prisma__ProjectStaffClient<$Result.GetResult<Prisma.$ProjectStaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectStaff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectStaffFindFirstOrThrowArgs} args - Arguments to find a ProjectStaff
     * @example
     * // Get one ProjectStaff
     * const projectStaff = await prisma.projectStaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectStaffFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectStaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectStaffClient<$Result.GetResult<Prisma.$ProjectStaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectStaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectStaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectStaffs
     * const projectStaffs = await prisma.projectStaff.findMany()
     * 
     * // Get first 10 ProjectStaffs
     * const projectStaffs = await prisma.projectStaff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectStaffWithIdOnly = await prisma.projectStaff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectStaffFindManyArgs>(args?: SelectSubset<T, ProjectStaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectStaff.
     * @param {ProjectStaffCreateArgs} args - Arguments to create a ProjectStaff.
     * @example
     * // Create one ProjectStaff
     * const ProjectStaff = await prisma.projectStaff.create({
     *   data: {
     *     // ... data to create a ProjectStaff
     *   }
     * })
     * 
     */
    create<T extends ProjectStaffCreateArgs>(args: SelectSubset<T, ProjectStaffCreateArgs<ExtArgs>>): Prisma__ProjectStaffClient<$Result.GetResult<Prisma.$ProjectStaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectStaffs.
     * @param {ProjectStaffCreateManyArgs} args - Arguments to create many ProjectStaffs.
     * @example
     * // Create many ProjectStaffs
     * const projectStaff = await prisma.projectStaff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectStaffCreateManyArgs>(args?: SelectSubset<T, ProjectStaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectStaff.
     * @param {ProjectStaffDeleteArgs} args - Arguments to delete one ProjectStaff.
     * @example
     * // Delete one ProjectStaff
     * const ProjectStaff = await prisma.projectStaff.delete({
     *   where: {
     *     // ... filter to delete one ProjectStaff
     *   }
     * })
     * 
     */
    delete<T extends ProjectStaffDeleteArgs>(args: SelectSubset<T, ProjectStaffDeleteArgs<ExtArgs>>): Prisma__ProjectStaffClient<$Result.GetResult<Prisma.$ProjectStaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectStaff.
     * @param {ProjectStaffUpdateArgs} args - Arguments to update one ProjectStaff.
     * @example
     * // Update one ProjectStaff
     * const projectStaff = await prisma.projectStaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectStaffUpdateArgs>(args: SelectSubset<T, ProjectStaffUpdateArgs<ExtArgs>>): Prisma__ProjectStaffClient<$Result.GetResult<Prisma.$ProjectStaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectStaffs.
     * @param {ProjectStaffDeleteManyArgs} args - Arguments to filter ProjectStaffs to delete.
     * @example
     * // Delete a few ProjectStaffs
     * const { count } = await prisma.projectStaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectStaffDeleteManyArgs>(args?: SelectSubset<T, ProjectStaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectStaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectStaffs
     * const projectStaff = await prisma.projectStaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectStaffUpdateManyArgs>(args: SelectSubset<T, ProjectStaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectStaff.
     * @param {ProjectStaffUpsertArgs} args - Arguments to update or create a ProjectStaff.
     * @example
     * // Update or create a ProjectStaff
     * const projectStaff = await prisma.projectStaff.upsert({
     *   create: {
     *     // ... data to create a ProjectStaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectStaff we want to update
     *   }
     * })
     */
    upsert<T extends ProjectStaffUpsertArgs>(args: SelectSubset<T, ProjectStaffUpsertArgs<ExtArgs>>): Prisma__ProjectStaffClient<$Result.GetResult<Prisma.$ProjectStaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectStaffCountArgs} args - Arguments to filter ProjectStaffs to count.
     * @example
     * // Count the number of ProjectStaffs
     * const count = await prisma.projectStaff.count({
     *   where: {
     *     // ... the filter for the ProjectStaffs we want to count
     *   }
     * })
    **/
    count<T extends ProjectStaffCountArgs>(
      args?: Subset<T, ProjectStaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectStaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectStaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectStaffAggregateArgs>(args: Subset<T, ProjectStaffAggregateArgs>): Prisma.PrismaPromise<GetProjectStaffAggregateType<T>>

    /**
     * Group by ProjectStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectStaffGroupByArgs} args - Group by arguments.
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
      T extends ProjectStaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectStaffGroupByArgs['orderBy'] }
        : { orderBy?: ProjectStaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectStaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectStaff model
   */
  readonly fields: ProjectStaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectStaff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectStaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectStaff model
   */
  interface ProjectStaffFieldRefs {
    readonly id: FieldRef<"ProjectStaff", 'String'>
    readonly projectId: FieldRef<"ProjectStaff", 'String'>
    readonly userId: FieldRef<"ProjectStaff", 'String'>
    readonly assignedAt: FieldRef<"ProjectStaff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectStaff findUnique
   */
  export type ProjectStaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
    /**
     * Filter, which ProjectStaff to fetch.
     */
    where: ProjectStaffWhereUniqueInput
  }

  /**
   * ProjectStaff findUniqueOrThrow
   */
  export type ProjectStaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
    /**
     * Filter, which ProjectStaff to fetch.
     */
    where: ProjectStaffWhereUniqueInput
  }

  /**
   * ProjectStaff findFirst
   */
  export type ProjectStaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
    /**
     * Filter, which ProjectStaff to fetch.
     */
    where?: ProjectStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectStaffs to fetch.
     */
    orderBy?: ProjectStaffOrderByWithRelationInput | ProjectStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectStaffs.
     */
    cursor?: ProjectStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectStaffs.
     */
    distinct?: ProjectStaffScalarFieldEnum | ProjectStaffScalarFieldEnum[]
  }

  /**
   * ProjectStaff findFirstOrThrow
   */
  export type ProjectStaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
    /**
     * Filter, which ProjectStaff to fetch.
     */
    where?: ProjectStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectStaffs to fetch.
     */
    orderBy?: ProjectStaffOrderByWithRelationInput | ProjectStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectStaffs.
     */
    cursor?: ProjectStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectStaffs.
     */
    distinct?: ProjectStaffScalarFieldEnum | ProjectStaffScalarFieldEnum[]
  }

  /**
   * ProjectStaff findMany
   */
  export type ProjectStaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
    /**
     * Filter, which ProjectStaffs to fetch.
     */
    where?: ProjectStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectStaffs to fetch.
     */
    orderBy?: ProjectStaffOrderByWithRelationInput | ProjectStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectStaffs.
     */
    cursor?: ProjectStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectStaffs.
     */
    skip?: number
    distinct?: ProjectStaffScalarFieldEnum | ProjectStaffScalarFieldEnum[]
  }

  /**
   * ProjectStaff create
   */
  export type ProjectStaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectStaff.
     */
    data: XOR<ProjectStaffCreateInput, ProjectStaffUncheckedCreateInput>
  }

  /**
   * ProjectStaff createMany
   */
  export type ProjectStaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectStaffs.
     */
    data: ProjectStaffCreateManyInput | ProjectStaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectStaff update
   */
  export type ProjectStaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectStaff.
     */
    data: XOR<ProjectStaffUpdateInput, ProjectStaffUncheckedUpdateInput>
    /**
     * Choose, which ProjectStaff to update.
     */
    where: ProjectStaffWhereUniqueInput
  }

  /**
   * ProjectStaff updateMany
   */
  export type ProjectStaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectStaffs.
     */
    data: XOR<ProjectStaffUpdateManyMutationInput, ProjectStaffUncheckedUpdateManyInput>
    /**
     * Filter which ProjectStaffs to update
     */
    where?: ProjectStaffWhereInput
    /**
     * Limit how many ProjectStaffs to update.
     */
    limit?: number
  }

  /**
   * ProjectStaff upsert
   */
  export type ProjectStaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectStaff to update in case it exists.
     */
    where: ProjectStaffWhereUniqueInput
    /**
     * In case the ProjectStaff found by the `where` argument doesn't exist, create a new ProjectStaff with this data.
     */
    create: XOR<ProjectStaffCreateInput, ProjectStaffUncheckedCreateInput>
    /**
     * In case the ProjectStaff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectStaffUpdateInput, ProjectStaffUncheckedUpdateInput>
  }

  /**
   * ProjectStaff delete
   */
  export type ProjectStaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
    /**
     * Filter which ProjectStaff to delete.
     */
    where: ProjectStaffWhereUniqueInput
  }

  /**
   * ProjectStaff deleteMany
   */
  export type ProjectStaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectStaffs to delete
     */
    where?: ProjectStaffWhereInput
    /**
     * Limit how many ProjectStaffs to delete.
     */
    limit?: number
  }

  /**
   * ProjectStaff without action
   */
  export type ProjectStaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectStaff
     */
    select?: ProjectStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectStaff
     */
    omit?: ProjectStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectStaffInclude<ExtArgs> | null
  }


  /**
   * Model ProjectCustomer
   */

  export type AggregateProjectCustomer = {
    _count: ProjectCustomerCountAggregateOutputType | null
    _min: ProjectCustomerMinAggregateOutputType | null
    _max: ProjectCustomerMaxAggregateOutputType | null
  }

  export type ProjectCustomerMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    role: string | null
    notes: string | null
    addedAt: Date | null
  }

  export type ProjectCustomerMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    role: string | null
    notes: string | null
    addedAt: Date | null
  }

  export type ProjectCustomerCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    role: number
    notes: number
    addedAt: number
    _all: number
  }


  export type ProjectCustomerMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
    notes?: true
    addedAt?: true
  }

  export type ProjectCustomerMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
    notes?: true
    addedAt?: true
  }

  export type ProjectCustomerCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
    notes?: true
    addedAt?: true
    _all?: true
  }

  export type ProjectCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCustomer to aggregate.
     */
    where?: ProjectCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCustomers to fetch.
     */
    orderBy?: ProjectCustomerOrderByWithRelationInput | ProjectCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectCustomers
    **/
    _count?: true | ProjectCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectCustomerMaxAggregateInputType
  }

  export type GetProjectCustomerAggregateType<T extends ProjectCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectCustomer[P]>
      : GetScalarType<T[P], AggregateProjectCustomer[P]>
  }




  export type ProjectCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCustomerWhereInput
    orderBy?: ProjectCustomerOrderByWithAggregationInput | ProjectCustomerOrderByWithAggregationInput[]
    by: ProjectCustomerScalarFieldEnum[] | ProjectCustomerScalarFieldEnum
    having?: ProjectCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCustomerCountAggregateInputType | true
    _min?: ProjectCustomerMinAggregateInputType
    _max?: ProjectCustomerMaxAggregateInputType
  }

  export type ProjectCustomerGroupByOutputType = {
    id: string
    projectId: string
    userId: string
    role: string | null
    notes: string | null
    addedAt: Date
    _count: ProjectCustomerCountAggregateOutputType | null
    _min: ProjectCustomerMinAggregateOutputType | null
    _max: ProjectCustomerMaxAggregateOutputType | null
  }

  type GetProjectCustomerGroupByPayload<T extends ProjectCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectCustomerGroupByOutputType[P]>
        }
      >
    >


  export type ProjectCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    notes?: boolean
    addedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCustomer"]>



  export type ProjectCustomerSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    notes?: boolean
    addedAt?: boolean
  }

  export type ProjectCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "role" | "notes" | "addedAt", ExtArgs["result"]["projectCustomer"]>
  export type ProjectCustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectCustomer"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: string
      role: string | null
      notes: string | null
      addedAt: Date
    }, ExtArgs["result"]["projectCustomer"]>
    composites: {}
  }

  type ProjectCustomerGetPayload<S extends boolean | null | undefined | ProjectCustomerDefaultArgs> = $Result.GetResult<Prisma.$ProjectCustomerPayload, S>

  type ProjectCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectCustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCustomerCountAggregateInputType | true
    }

  export interface ProjectCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectCustomer'], meta: { name: 'ProjectCustomer' } }
    /**
     * Find zero or one ProjectCustomer that matches the filter.
     * @param {ProjectCustomerFindUniqueArgs} args - Arguments to find a ProjectCustomer
     * @example
     * // Get one ProjectCustomer
     * const projectCustomer = await prisma.projectCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectCustomerFindUniqueArgs>(args: SelectSubset<T, ProjectCustomerFindUniqueArgs<ExtArgs>>): Prisma__ProjectCustomerClient<$Result.GetResult<Prisma.$ProjectCustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectCustomerFindUniqueOrThrowArgs} args - Arguments to find a ProjectCustomer
     * @example
     * // Get one ProjectCustomer
     * const projectCustomer = await prisma.projectCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectCustomerClient<$Result.GetResult<Prisma.$ProjectCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCustomerFindFirstArgs} args - Arguments to find a ProjectCustomer
     * @example
     * // Get one ProjectCustomer
     * const projectCustomer = await prisma.projectCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectCustomerFindFirstArgs>(args?: SelectSubset<T, ProjectCustomerFindFirstArgs<ExtArgs>>): Prisma__ProjectCustomerClient<$Result.GetResult<Prisma.$ProjectCustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCustomerFindFirstOrThrowArgs} args - Arguments to find a ProjectCustomer
     * @example
     * // Get one ProjectCustomer
     * const projectCustomer = await prisma.projectCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectCustomerClient<$Result.GetResult<Prisma.$ProjectCustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectCustomers
     * const projectCustomers = await prisma.projectCustomer.findMany()
     * 
     * // Get first 10 ProjectCustomers
     * const projectCustomers = await prisma.projectCustomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectCustomerWithIdOnly = await prisma.projectCustomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectCustomerFindManyArgs>(args?: SelectSubset<T, ProjectCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectCustomer.
     * @param {ProjectCustomerCreateArgs} args - Arguments to create a ProjectCustomer.
     * @example
     * // Create one ProjectCustomer
     * const ProjectCustomer = await prisma.projectCustomer.create({
     *   data: {
     *     // ... data to create a ProjectCustomer
     *   }
     * })
     * 
     */
    create<T extends ProjectCustomerCreateArgs>(args: SelectSubset<T, ProjectCustomerCreateArgs<ExtArgs>>): Prisma__ProjectCustomerClient<$Result.GetResult<Prisma.$ProjectCustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectCustomers.
     * @param {ProjectCustomerCreateManyArgs} args - Arguments to create many ProjectCustomers.
     * @example
     * // Create many ProjectCustomers
     * const projectCustomer = await prisma.projectCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCustomerCreateManyArgs>(args?: SelectSubset<T, ProjectCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectCustomer.
     * @param {ProjectCustomerDeleteArgs} args - Arguments to delete one ProjectCustomer.
     * @example
     * // Delete one ProjectCustomer
     * const ProjectCustomer = await prisma.projectCustomer.delete({
     *   where: {
     *     // ... filter to delete one ProjectCustomer
     *   }
     * })
     * 
     */
    delete<T extends ProjectCustomerDeleteArgs>(args: SelectSubset<T, ProjectCustomerDeleteArgs<ExtArgs>>): Prisma__ProjectCustomerClient<$Result.GetResult<Prisma.$ProjectCustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectCustomer.
     * @param {ProjectCustomerUpdateArgs} args - Arguments to update one ProjectCustomer.
     * @example
     * // Update one ProjectCustomer
     * const projectCustomer = await prisma.projectCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectCustomerUpdateArgs>(args: SelectSubset<T, ProjectCustomerUpdateArgs<ExtArgs>>): Prisma__ProjectCustomerClient<$Result.GetResult<Prisma.$ProjectCustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectCustomers.
     * @param {ProjectCustomerDeleteManyArgs} args - Arguments to filter ProjectCustomers to delete.
     * @example
     * // Delete a few ProjectCustomers
     * const { count } = await prisma.projectCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectCustomerDeleteManyArgs>(args?: SelectSubset<T, ProjectCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectCustomers
     * const projectCustomer = await prisma.projectCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectCustomerUpdateManyArgs>(args: SelectSubset<T, ProjectCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectCustomer.
     * @param {ProjectCustomerUpsertArgs} args - Arguments to update or create a ProjectCustomer.
     * @example
     * // Update or create a ProjectCustomer
     * const projectCustomer = await prisma.projectCustomer.upsert({
     *   create: {
     *     // ... data to create a ProjectCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectCustomer we want to update
     *   }
     * })
     */
    upsert<T extends ProjectCustomerUpsertArgs>(args: SelectSubset<T, ProjectCustomerUpsertArgs<ExtArgs>>): Prisma__ProjectCustomerClient<$Result.GetResult<Prisma.$ProjectCustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCustomerCountArgs} args - Arguments to filter ProjectCustomers to count.
     * @example
     * // Count the number of ProjectCustomers
     * const count = await prisma.projectCustomer.count({
     *   where: {
     *     // ... the filter for the ProjectCustomers we want to count
     *   }
     * })
    **/
    count<T extends ProjectCustomerCountArgs>(
      args?: Subset<T, ProjectCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectCustomerAggregateArgs>(args: Subset<T, ProjectCustomerAggregateArgs>): Prisma.PrismaPromise<GetProjectCustomerAggregateType<T>>

    /**
     * Group by ProjectCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCustomerGroupByArgs} args - Group by arguments.
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
      T extends ProjectCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectCustomerGroupByArgs['orderBy'] }
        : { orderBy?: ProjectCustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectCustomer model
   */
  readonly fields: ProjectCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectCustomer model
   */
  interface ProjectCustomerFieldRefs {
    readonly id: FieldRef<"ProjectCustomer", 'String'>
    readonly projectId: FieldRef<"ProjectCustomer", 'String'>
    readonly userId: FieldRef<"ProjectCustomer", 'String'>
    readonly role: FieldRef<"ProjectCustomer", 'String'>
    readonly notes: FieldRef<"ProjectCustomer", 'String'>
    readonly addedAt: FieldRef<"ProjectCustomer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectCustomer findUnique
   */
  export type ProjectCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCustomer to fetch.
     */
    where: ProjectCustomerWhereUniqueInput
  }

  /**
   * ProjectCustomer findUniqueOrThrow
   */
  export type ProjectCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCustomer to fetch.
     */
    where: ProjectCustomerWhereUniqueInput
  }

  /**
   * ProjectCustomer findFirst
   */
  export type ProjectCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCustomer to fetch.
     */
    where?: ProjectCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCustomers to fetch.
     */
    orderBy?: ProjectCustomerOrderByWithRelationInput | ProjectCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCustomers.
     */
    cursor?: ProjectCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCustomers.
     */
    distinct?: ProjectCustomerScalarFieldEnum | ProjectCustomerScalarFieldEnum[]
  }

  /**
   * ProjectCustomer findFirstOrThrow
   */
  export type ProjectCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCustomer to fetch.
     */
    where?: ProjectCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCustomers to fetch.
     */
    orderBy?: ProjectCustomerOrderByWithRelationInput | ProjectCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCustomers.
     */
    cursor?: ProjectCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCustomers.
     */
    distinct?: ProjectCustomerScalarFieldEnum | ProjectCustomerScalarFieldEnum[]
  }

  /**
   * ProjectCustomer findMany
   */
  export type ProjectCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCustomers to fetch.
     */
    where?: ProjectCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCustomers to fetch.
     */
    orderBy?: ProjectCustomerOrderByWithRelationInput | ProjectCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectCustomers.
     */
    cursor?: ProjectCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCustomers.
     */
    skip?: number
    distinct?: ProjectCustomerScalarFieldEnum | ProjectCustomerScalarFieldEnum[]
  }

  /**
   * ProjectCustomer create
   */
  export type ProjectCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectCustomer.
     */
    data: XOR<ProjectCustomerCreateInput, ProjectCustomerUncheckedCreateInput>
  }

  /**
   * ProjectCustomer createMany
   */
  export type ProjectCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectCustomers.
     */
    data: ProjectCustomerCreateManyInput | ProjectCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectCustomer update
   */
  export type ProjectCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectCustomer.
     */
    data: XOR<ProjectCustomerUpdateInput, ProjectCustomerUncheckedUpdateInput>
    /**
     * Choose, which ProjectCustomer to update.
     */
    where: ProjectCustomerWhereUniqueInput
  }

  /**
   * ProjectCustomer updateMany
   */
  export type ProjectCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectCustomers.
     */
    data: XOR<ProjectCustomerUpdateManyMutationInput, ProjectCustomerUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCustomers to update
     */
    where?: ProjectCustomerWhereInput
    /**
     * Limit how many ProjectCustomers to update.
     */
    limit?: number
  }

  /**
   * ProjectCustomer upsert
   */
  export type ProjectCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectCustomer to update in case it exists.
     */
    where: ProjectCustomerWhereUniqueInput
    /**
     * In case the ProjectCustomer found by the `where` argument doesn't exist, create a new ProjectCustomer with this data.
     */
    create: XOR<ProjectCustomerCreateInput, ProjectCustomerUncheckedCreateInput>
    /**
     * In case the ProjectCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectCustomerUpdateInput, ProjectCustomerUncheckedUpdateInput>
  }

  /**
   * ProjectCustomer delete
   */
  export type ProjectCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
    /**
     * Filter which ProjectCustomer to delete.
     */
    where: ProjectCustomerWhereUniqueInput
  }

  /**
   * ProjectCustomer deleteMany
   */
  export type ProjectCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCustomers to delete
     */
    where?: ProjectCustomerWhereInput
    /**
     * Limit how many ProjectCustomers to delete.
     */
    limit?: number
  }

  /**
   * ProjectCustomer without action
   */
  export type ProjectCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCustomer
     */
    select?: ProjectCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCustomer
     */
    omit?: ProjectCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCustomerInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    phone: 'phone',
    birthDate: 'birthDate',
    password: 'password',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
    companyId: 'companyId',
    isActive: 'isActive',
    role: 'role',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slogan: 'slogan',
    category: 'category',
    type: 'type',
    logo: 'logo',
    domain: 'domain',
    phone: 'phone',
    supportEmail: 'supportEmail',
    salesEmail: 'salesEmail',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
    isActive: 'isActive',
    gmailConnected: 'gmailConnected',
    office365Connected: 'office365Connected',
    ownerId: 'ownerId',
    subscriptionPlanId: 'subscriptionPlanId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    pricePerMonth: 'pricePerMonth',
    description: 'description',
    maxUsers: 'maxUsers',
    maxAdmins: 'maxAdmins',
    maxManagers: 'maxManagers',
    maxCustomers: 'maxCustomers',
    storageLimitMB: 'storageLimitMB',
    maxProjects: 'maxProjects',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]


  export const FeatureScalarFieldEnum: {
    id: 'id',
    key: 'key',
    label: 'label',
    isActive: 'isActive'
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    companyId: 'companyId',
    budget: 'budget',
    progress: 'progress',
    managerId: 'managerId',
    customerid: 'customerid',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectStaffScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    assignedAt: 'assignedAt'
  };

  export type ProjectStaffScalarFieldEnum = (typeof ProjectStaffScalarFieldEnum)[keyof typeof ProjectStaffScalarFieldEnum]


  export const ProjectCustomerScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    role: 'role',
    notes: 'notes',
    addedAt: 'addedAt'
  };

  export type ProjectCustomerScalarFieldEnum = (typeof ProjectCustomerScalarFieldEnum)[keyof typeof ProjectCustomerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    phone: 'phone',
    password: 'password',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
    companyId: 'companyId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CompanyOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slogan: 'slogan',
    logo: 'logo',
    domain: 'domain',
    phone: 'phone',
    supportEmail: 'supportEmail',
    salesEmail: 'salesEmail',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
    ownerId: 'ownerId',
    subscriptionPlanId: 'subscriptionPlanId'
  };

  export type CompanyOrderByRelevanceFieldEnum = (typeof CompanyOrderByRelevanceFieldEnum)[keyof typeof CompanyOrderByRelevanceFieldEnum]


  export const SubscriptionPlanOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type SubscriptionPlanOrderByRelevanceFieldEnum = (typeof SubscriptionPlanOrderByRelevanceFieldEnum)[keyof typeof SubscriptionPlanOrderByRelevanceFieldEnum]


  export const FeatureOrderByRelevanceFieldEnum: {
    id: 'id',
    key: 'key',
    label: 'label'
  };

  export type FeatureOrderByRelevanceFieldEnum = (typeof FeatureOrderByRelevanceFieldEnum)[keyof typeof FeatureOrderByRelevanceFieldEnum]


  export const ProjectOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    companyId: 'companyId',
    managerId: 'managerId',
    customerid: 'customerid'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const ProjectStaffOrderByRelevanceFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId'
  };

  export type ProjectStaffOrderByRelevanceFieldEnum = (typeof ProjectStaffOrderByRelevanceFieldEnum)[keyof typeof ProjectStaffOrderByRelevanceFieldEnum]


  export const ProjectCustomerOrderByRelevanceFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    role: 'role',
    notes: 'notes'
  };

  export type ProjectCustomerOrderByRelevanceFieldEnum = (typeof ProjectCustomerOrderByRelevanceFieldEnum)[keyof typeof ProjectCustomerOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'CompanyCategory'
   */
  export type EnumCompanyCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyCategory'>
    


  /**
   * Reference to a field of type 'BusinessType'
   */
  export type EnumBusinessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    addressLine1?: StringNullableFilter<"User"> | string | null
    addressLine2?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    zipCode?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    companyId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedCompanies?: CompanyListRelationFilter
    companies?: CompanyListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    ProjectCustomer?: ProjectCustomerListRelationFilter
    ProjectStaff?: ProjectStaffListRelationFilter
    Project?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    password?: SortOrder
    addressLine1?: SortOrderInput | SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownedCompanies?: CompanyOrderByRelationAggregateInput
    companies?: CompanyOrderByRelationAggregateInput
    company?: CompanyOrderByWithRelationInput
    ProjectCustomer?: ProjectCustomerOrderByRelationAggregateInput
    ProjectStaff?: ProjectStaffOrderByRelationAggregateInput
    Project?: ProjectOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    addressLine1?: StringNullableFilter<"User"> | string | null
    addressLine2?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    zipCode?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    companyId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedCompanies?: CompanyListRelationFilter
    companies?: CompanyListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    ProjectCustomer?: ProjectCustomerListRelationFilter
    ProjectStaff?: ProjectStaffListRelationFilter
    Project?: ProjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    password?: SortOrder
    addressLine1?: SortOrderInput | SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    addressLine1?: StringNullableWithAggregatesFilter<"User"> | string | null
    addressLine2?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    state?: StringNullableWithAggregatesFilter<"User"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    slogan?: StringNullableFilter<"Company"> | string | null
    category?: EnumCompanyCategoryNullableFilter<"Company"> | $Enums.CompanyCategory | null
    type?: EnumBusinessTypeNullableFilter<"Company"> | $Enums.BusinessType | null
    logo?: StringNullableFilter<"Company"> | string | null
    domain?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    supportEmail?: StringNullableFilter<"Company"> | string | null
    salesEmail?: StringNullableFilter<"Company"> | string | null
    addressLine1?: StringNullableFilter<"Company"> | string | null
    addressLine2?: StringNullableFilter<"Company"> | string | null
    city?: StringNullableFilter<"Company"> | string | null
    state?: StringNullableFilter<"Company"> | string | null
    zipCode?: StringNullableFilter<"Company"> | string | null
    country?: StringNullableFilter<"Company"> | string | null
    isActive?: BoolFilter<"Company"> | boolean
    gmailConnected?: BoolFilter<"Company"> | boolean
    office365Connected?: BoolFilter<"Company"> | boolean
    ownerId?: StringFilter<"Company"> | string
    subscriptionPlanId?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    activeUsers?: UserListRelationFilter
    users?: UserListRelationFilter
    subscriptionPlan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    Project?: ProjectListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slogan?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    domain?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    supportEmail?: SortOrderInput | SortOrder
    salesEmail?: SortOrderInput | SortOrder
    addressLine1?: SortOrderInput | SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    isActive?: SortOrder
    gmailConnected?: SortOrder
    office365Connected?: SortOrder
    ownerId?: SortOrder
    subscriptionPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    activeUsers?: UserOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    subscriptionPlan?: SubscriptionPlanOrderByWithRelationInput
    Project?: ProjectOrderByRelationAggregateInput
    _relevance?: CompanyOrderByRelevanceInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    domain?: string
    supportEmail?: string
    salesEmail?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    slogan?: StringNullableFilter<"Company"> | string | null
    category?: EnumCompanyCategoryNullableFilter<"Company"> | $Enums.CompanyCategory | null
    type?: EnumBusinessTypeNullableFilter<"Company"> | $Enums.BusinessType | null
    logo?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    addressLine1?: StringNullableFilter<"Company"> | string | null
    addressLine2?: StringNullableFilter<"Company"> | string | null
    city?: StringNullableFilter<"Company"> | string | null
    state?: StringNullableFilter<"Company"> | string | null
    zipCode?: StringNullableFilter<"Company"> | string | null
    country?: StringNullableFilter<"Company"> | string | null
    isActive?: BoolFilter<"Company"> | boolean
    gmailConnected?: BoolFilter<"Company"> | boolean
    office365Connected?: BoolFilter<"Company"> | boolean
    ownerId?: StringFilter<"Company"> | string
    subscriptionPlanId?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    activeUsers?: UserListRelationFilter
    users?: UserListRelationFilter
    subscriptionPlan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    Project?: ProjectListRelationFilter
  }, "id" | "name" | "domain" | "supportEmail" | "salesEmail">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slogan?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    domain?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    supportEmail?: SortOrderInput | SortOrder
    salesEmail?: SortOrderInput | SortOrder
    addressLine1?: SortOrderInput | SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    isActive?: SortOrder
    gmailConnected?: SortOrder
    office365Connected?: SortOrder
    ownerId?: SortOrder
    subscriptionPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    slogan?: StringNullableWithAggregatesFilter<"Company"> | string | null
    category?: EnumCompanyCategoryNullableWithAggregatesFilter<"Company"> | $Enums.CompanyCategory | null
    type?: EnumBusinessTypeNullableWithAggregatesFilter<"Company"> | $Enums.BusinessType | null
    logo?: StringNullableWithAggregatesFilter<"Company"> | string | null
    domain?: StringNullableWithAggregatesFilter<"Company"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Company"> | string | null
    supportEmail?: StringNullableWithAggregatesFilter<"Company"> | string | null
    salesEmail?: StringNullableWithAggregatesFilter<"Company"> | string | null
    addressLine1?: StringNullableWithAggregatesFilter<"Company"> | string | null
    addressLine2?: StringNullableWithAggregatesFilter<"Company"> | string | null
    city?: StringNullableWithAggregatesFilter<"Company"> | string | null
    state?: StringNullableWithAggregatesFilter<"Company"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"Company"> | string | null
    country?: StringNullableWithAggregatesFilter<"Company"> | string | null
    isActive?: BoolWithAggregatesFilter<"Company"> | boolean
    gmailConnected?: BoolWithAggregatesFilter<"Company"> | boolean
    office365Connected?: BoolWithAggregatesFilter<"Company"> | boolean
    ownerId?: StringWithAggregatesFilter<"Company"> | string
    subscriptionPlanId?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    id?: StringFilter<"SubscriptionPlan"> | string
    name?: StringFilter<"SubscriptionPlan"> | string
    pricePerMonth?: DecimalFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"SubscriptionPlan"> | string | null
    maxUsers?: IntFilter<"SubscriptionPlan"> | number
    maxAdmins?: IntFilter<"SubscriptionPlan"> | number
    maxManagers?: IntFilter<"SubscriptionPlan"> | number
    maxCustomers?: IntFilter<"SubscriptionPlan"> | number
    storageLimitMB?: IntFilter<"SubscriptionPlan"> | number
    maxProjects?: IntFilter<"SubscriptionPlan"> | number
    isActive?: BoolFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    features?: FeatureListRelationFilter
    companies?: CompanyListRelationFilter
  }

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pricePerMonth?: SortOrder
    description?: SortOrderInput | SortOrder
    maxUsers?: SortOrder
    maxAdmins?: SortOrder
    maxManagers?: SortOrder
    maxCustomers?: SortOrder
    storageLimitMB?: SortOrder
    maxProjects?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    features?: FeatureOrderByRelationAggregateInput
    companies?: CompanyOrderByRelationAggregateInput
    _relevance?: SubscriptionPlanOrderByRelevanceInput
  }

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    pricePerMonth?: DecimalFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"SubscriptionPlan"> | string | null
    maxUsers?: IntFilter<"SubscriptionPlan"> | number
    maxAdmins?: IntFilter<"SubscriptionPlan"> | number
    maxManagers?: IntFilter<"SubscriptionPlan"> | number
    maxCustomers?: IntFilter<"SubscriptionPlan"> | number
    storageLimitMB?: IntFilter<"SubscriptionPlan"> | number
    maxProjects?: IntFilter<"SubscriptionPlan"> | number
    isActive?: BoolFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    features?: FeatureListRelationFilter
    companies?: CompanyListRelationFilter
  }, "id" | "name">

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    pricePerMonth?: SortOrder
    description?: SortOrderInput | SortOrder
    maxUsers?: SortOrder
    maxAdmins?: SortOrder
    maxManagers?: SortOrder
    maxCustomers?: SortOrder
    storageLimitMB?: SortOrder
    maxProjects?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionPlanCountOrderByAggregateInput
    _avg?: SubscriptionPlanAvgOrderByAggregateInput
    _max?: SubscriptionPlanMaxOrderByAggregateInput
    _min?: SubscriptionPlanMinOrderByAggregateInput
    _sum?: SubscriptionPlanSumOrderByAggregateInput
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    name?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    pricePerMonth?: DecimalWithAggregatesFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"SubscriptionPlan"> | string | null
    maxUsers?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    maxAdmins?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    maxManagers?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    maxCustomers?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    storageLimitMB?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    maxProjects?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    isActive?: BoolWithAggregatesFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
  }

  export type FeatureWhereInput = {
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    id?: StringFilter<"Feature"> | string
    key?: StringFilter<"Feature"> | string
    label?: StringFilter<"Feature"> | string
    isActive?: BoolFilter<"Feature"> | boolean
    plans?: SubscriptionPlanListRelationFilter
  }

  export type FeatureOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    isActive?: SortOrder
    plans?: SubscriptionPlanOrderByRelationAggregateInput
    _relevance?: FeatureOrderByRelevanceInput
  }

  export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    label?: StringFilter<"Feature"> | string
    isActive?: BoolFilter<"Feature"> | boolean
    plans?: SubscriptionPlanListRelationFilter
  }, "id" | "key">

  export type FeatureOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    isActive?: SortOrder
    _count?: FeatureCountOrderByAggregateInput
    _max?: FeatureMaxOrderByAggregateInput
    _min?: FeatureMinOrderByAggregateInput
  }

  export type FeatureScalarWhereWithAggregatesInput = {
    AND?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    OR?: FeatureScalarWhereWithAggregatesInput[]
    NOT?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feature"> | string
    key?: StringWithAggregatesFilter<"Feature"> | string
    label?: StringWithAggregatesFilter<"Feature"> | string
    isActive?: BoolWithAggregatesFilter<"Feature"> | boolean
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    companyId?: StringFilter<"Project"> | string
    budget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    progress?: IntNullableFilter<"Project"> | number | null
    managerId?: StringFilter<"Project"> | string
    customerid?: StringNullableFilter<"Project"> | string | null
    isActive?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
    customer?: XOR<ProjectCustomerNullableScalarRelationFilter, ProjectCustomerWhereInput> | null
    staff?: ProjectStaffListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    companyId?: SortOrder
    budget?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    managerId?: SortOrder
    customerid?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    manager?: UserOrderByWithRelationInput
    customer?: ProjectCustomerOrderByWithRelationInput
    staff?: ProjectStaffOrderByRelationAggregateInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    companyId?: StringFilter<"Project"> | string
    budget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    progress?: IntNullableFilter<"Project"> | number | null
    managerId?: StringFilter<"Project"> | string
    customerid?: StringNullableFilter<"Project"> | string | null
    isActive?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
    customer?: XOR<ProjectCustomerNullableScalarRelationFilter, ProjectCustomerWhereInput> | null
    staff?: ProjectStaffListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    companyId?: SortOrder
    budget?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    managerId?: SortOrder
    customerid?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    companyId?: StringWithAggregatesFilter<"Project"> | string
    budget?: DecimalNullableWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    progress?: IntNullableWithAggregatesFilter<"Project"> | number | null
    managerId?: StringWithAggregatesFilter<"Project"> | string
    customerid?: StringNullableWithAggregatesFilter<"Project"> | string | null
    isActive?: BoolWithAggregatesFilter<"Project"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectStaffWhereInput = {
    AND?: ProjectStaffWhereInput | ProjectStaffWhereInput[]
    OR?: ProjectStaffWhereInput[]
    NOT?: ProjectStaffWhereInput | ProjectStaffWhereInput[]
    id?: StringFilter<"ProjectStaff"> | string
    projectId?: StringFilter<"ProjectStaff"> | string
    userId?: StringFilter<"ProjectStaff"> | string
    assignedAt?: DateTimeFilter<"ProjectStaff"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectStaffOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: ProjectStaffOrderByRelevanceInput
  }

  export type ProjectStaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_userId?: ProjectStaffProjectIdUserIdCompoundUniqueInput
    AND?: ProjectStaffWhereInput | ProjectStaffWhereInput[]
    OR?: ProjectStaffWhereInput[]
    NOT?: ProjectStaffWhereInput | ProjectStaffWhereInput[]
    projectId?: StringFilter<"ProjectStaff"> | string
    userId?: StringFilter<"ProjectStaff"> | string
    assignedAt?: DateTimeFilter<"ProjectStaff"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "projectId_userId">

  export type ProjectStaffOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    _count?: ProjectStaffCountOrderByAggregateInput
    _max?: ProjectStaffMaxOrderByAggregateInput
    _min?: ProjectStaffMinOrderByAggregateInput
  }

  export type ProjectStaffScalarWhereWithAggregatesInput = {
    AND?: ProjectStaffScalarWhereWithAggregatesInput | ProjectStaffScalarWhereWithAggregatesInput[]
    OR?: ProjectStaffScalarWhereWithAggregatesInput[]
    NOT?: ProjectStaffScalarWhereWithAggregatesInput | ProjectStaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectStaff"> | string
    projectId?: StringWithAggregatesFilter<"ProjectStaff"> | string
    userId?: StringWithAggregatesFilter<"ProjectStaff"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"ProjectStaff"> | Date | string
  }

  export type ProjectCustomerWhereInput = {
    AND?: ProjectCustomerWhereInput | ProjectCustomerWhereInput[]
    OR?: ProjectCustomerWhereInput[]
    NOT?: ProjectCustomerWhereInput | ProjectCustomerWhereInput[]
    id?: StringFilter<"ProjectCustomer"> | string
    projectId?: StringFilter<"ProjectCustomer"> | string
    userId?: StringFilter<"ProjectCustomer"> | string
    role?: StringNullableFilter<"ProjectCustomer"> | string | null
    notes?: StringNullableFilter<"ProjectCustomer"> | string | null
    addedAt?: DateTimeFilter<"ProjectCustomer"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectCustomerOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: ProjectCustomerOrderByRelevanceInput
  }

  export type ProjectCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    projectId_userId?: ProjectCustomerProjectIdUserIdCompoundUniqueInput
    AND?: ProjectCustomerWhereInput | ProjectCustomerWhereInput[]
    OR?: ProjectCustomerWhereInput[]
    NOT?: ProjectCustomerWhereInput | ProjectCustomerWhereInput[]
    userId?: StringFilter<"ProjectCustomer"> | string
    role?: StringNullableFilter<"ProjectCustomer"> | string | null
    notes?: StringNullableFilter<"ProjectCustomer"> | string | null
    addedAt?: DateTimeFilter<"ProjectCustomer"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "projectId" | "projectId_userId">

  export type ProjectCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    _count?: ProjectCustomerCountOrderByAggregateInput
    _max?: ProjectCustomerMaxOrderByAggregateInput
    _min?: ProjectCustomerMinOrderByAggregateInput
  }

  export type ProjectCustomerScalarWhereWithAggregatesInput = {
    AND?: ProjectCustomerScalarWhereWithAggregatesInput | ProjectCustomerScalarWhereWithAggregatesInput[]
    OR?: ProjectCustomerScalarWhereWithAggregatesInput[]
    NOT?: ProjectCustomerScalarWhereWithAggregatesInput | ProjectCustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectCustomer"> | string
    projectId?: StringWithAggregatesFilter<"ProjectCustomer"> | string
    userId?: StringWithAggregatesFilter<"ProjectCustomer"> | string
    role?: StringNullableWithAggregatesFilter<"ProjectCustomer"> | string | null
    notes?: StringNullableWithAggregatesFilter<"ProjectCustomer"> | string | null
    addedAt?: DateTimeWithAggregatesFilter<"ProjectCustomer"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyCreateNestedManyWithoutOwnerInput
    companies?: CompanyCreateNestedManyWithoutUsersInput
    company?: CompanyCreateNestedOneWithoutActiveUsersInput
    ProjectCustomer?: ProjectCustomerCreateNestedManyWithoutUserInput
    ProjectStaff?: ProjectStaffCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    companyId?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUsersInput
    ProjectCustomer?: ProjectCustomerUncheckedCreateNestedManyWithoutUserInput
    ProjectStaff?: ProjectStaffUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUpdateManyWithoutOwnerNestedInput
    companies?: CompanyUpdateManyWithoutUsersNestedInput
    company?: CompanyUpdateOneWithoutActiveUsersNestedInput
    ProjectCustomer?: ProjectCustomerUpdateManyWithoutUserNestedInput
    ProjectStaff?: ProjectStaffUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUsersNestedInput
    ProjectCustomer?: ProjectCustomerUncheckedUpdateManyWithoutUserNestedInput
    ProjectStaff?: ProjectStaffUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    companyId?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCompaniesInput
    activeUsers?: UserCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompaniesInput
    subscriptionPlan: SubscriptionPlanCreateNestedOneWithoutCompaniesInput
    Project?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    ownerId: string
    subscriptionPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activeUsers?: UserUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompaniesInput
    Project?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCompaniesNestedInput
    activeUsers?: UserUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompaniesNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateOneRequiredWithoutCompaniesNestedInput
    Project?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    subscriptionPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUsers?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompaniesNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    ownerId: string
    subscriptionPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    subscriptionPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanCreateInput = {
    id?: string
    name: string
    pricePerMonth?: Decimal | DecimalJsLike | number | string
    description?: string | null
    maxUsers?: number
    maxAdmins?: number
    maxManagers?: number
    maxCustomers?: number
    storageLimitMB?: number
    maxProjects?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    features?: FeatureCreateNestedManyWithoutPlansInput
    companies?: CompanyCreateNestedManyWithoutSubscriptionPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id?: string
    name: string
    pricePerMonth?: Decimal | DecimalJsLike | number | string
    description?: string | null
    maxUsers?: number
    maxAdmins?: number
    maxManagers?: number
    maxCustomers?: number
    storageLimitMB?: number
    maxProjects?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    features?: FeatureUncheckedCreateNestedManyWithoutPlansInput
    companies?: CompanyUncheckedCreateNestedManyWithoutSubscriptionPlanInput
  }

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxAdmins?: IntFieldUpdateOperationsInput | number
    maxManagers?: IntFieldUpdateOperationsInput | number
    maxCustomers?: IntFieldUpdateOperationsInput | number
    storageLimitMB?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUpdateManyWithoutPlansNestedInput
    companies?: CompanyUpdateManyWithoutSubscriptionPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxAdmins?: IntFieldUpdateOperationsInput | number
    maxManagers?: IntFieldUpdateOperationsInput | number
    maxCustomers?: IntFieldUpdateOperationsInput | number
    storageLimitMB?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUncheckedUpdateManyWithoutPlansNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutSubscriptionPlanNestedInput
  }

  export type SubscriptionPlanCreateManyInput = {
    id?: string
    name: string
    pricePerMonth?: Decimal | DecimalJsLike | number | string
    description?: string | null
    maxUsers?: number
    maxAdmins?: number
    maxManagers?: number
    maxCustomers?: number
    storageLimitMB?: number
    maxProjects?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxAdmins?: IntFieldUpdateOperationsInput | number
    maxManagers?: IntFieldUpdateOperationsInput | number
    maxCustomers?: IntFieldUpdateOperationsInput | number
    storageLimitMB?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxAdmins?: IntFieldUpdateOperationsInput | number
    maxManagers?: IntFieldUpdateOperationsInput | number
    maxCustomers?: IntFieldUpdateOperationsInput | number
    storageLimitMB?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCreateInput = {
    id?: string
    key: string
    label: string
    isActive?: boolean
    plans?: SubscriptionPlanCreateNestedManyWithoutFeaturesInput
  }

  export type FeatureUncheckedCreateInput = {
    id?: string
    key: string
    label: string
    isActive?: boolean
    plans?: SubscriptionPlanUncheckedCreateNestedManyWithoutFeaturesInput
  }

  export type FeatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plans?: SubscriptionPlanUpdateManyWithoutFeaturesNestedInput
  }

  export type FeatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plans?: SubscriptionPlanUncheckedUpdateManyWithoutFeaturesNestedInput
  }

  export type FeatureCreateManyInput = {
    id?: string
    key: string
    label: string
    isActive?: boolean
  }

  export type FeatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutProjectInput
    manager: UserCreateNestedOneWithoutProjectInput
    customer?: ProjectCustomerCreateNestedOneWithoutProjectInput
    staff?: ProjectStaffCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    companyId: string
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    managerId: string
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: ProjectCustomerUncheckedCreateNestedOneWithoutProjectInput
    staff?: ProjectStaffUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutProjectNestedInput
    manager?: UserUpdateOneRequiredWithoutProjectNestedInput
    customer?: ProjectCustomerUpdateOneWithoutProjectNestedInput
    staff?: ProjectStaffUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: StringFieldUpdateOperationsInput | string
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: ProjectCustomerUncheckedUpdateOneWithoutProjectNestedInput
    staff?: ProjectStaffUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    companyId: string
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    managerId: string
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: StringFieldUpdateOperationsInput | string
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectStaffCreateInput = {
    id?: string
    assignedAt?: Date | string
    project: ProjectCreateNestedOneWithoutStaffInput
    user: UserCreateNestedOneWithoutProjectStaffInput
  }

  export type ProjectStaffUncheckedCreateInput = {
    id?: string
    projectId: string
    userId: string
    assignedAt?: Date | string
  }

  export type ProjectStaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutStaffNestedInput
    user?: UserUpdateOneRequiredWithoutProjectStaffNestedInput
  }

  export type ProjectStaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectStaffCreateManyInput = {
    id?: string
    projectId: string
    userId: string
    assignedAt?: Date | string
  }

  export type ProjectStaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectStaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCustomerCreateInput = {
    id?: string
    role?: string | null
    notes?: string | null
    addedAt?: Date | string
    project: ProjectCreateNestedOneWithoutCustomerInput
    user: UserCreateNestedOneWithoutProjectCustomerInput
  }

  export type ProjectCustomerUncheckedCreateInput = {
    id?: string
    projectId: string
    userId: string
    role?: string | null
    notes?: string | null
    addedAt?: Date | string
  }

  export type ProjectCustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCustomerNestedInput
    user?: UserUpdateOneRequiredWithoutProjectCustomerNestedInput
  }

  export type ProjectCustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCustomerCreateManyInput = {
    id?: string
    projectId: string
    userId: string
    role?: string | null
    notes?: string | null
    addedAt?: Date | string
  }

  export type ProjectCustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type ProjectCustomerListRelationFilter = {
    every?: ProjectCustomerWhereInput
    some?: ProjectCustomerWhereInput
    none?: ProjectCustomerWhereInput
  }

  export type ProjectStaffListRelationFilter = {
    every?: ProjectStaffWhereInput
    some?: ProjectStaffWhereInput
    none?: ProjectStaffWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectStaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    password?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    companyId?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    password?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    companyId?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    password?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    companyId?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCompanyCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyCategory | EnumCompanyCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompanyCategory[] | null
    notIn?: $Enums.CompanyCategory[] | null
    not?: NestedEnumCompanyCategoryNullableFilter<$PrismaModel> | $Enums.CompanyCategory | null
  }

  export type EnumBusinessTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BusinessType[] | null
    notIn?: $Enums.BusinessType[] | null
    not?: NestedEnumBusinessTypeNullableFilter<$PrismaModel> | $Enums.BusinessType | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SubscriptionPlanScalarRelationFilter = {
    is?: SubscriptionPlanWhereInput
    isNot?: SubscriptionPlanWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyOrderByRelevanceInput = {
    fields: CompanyOrderByRelevanceFieldEnum | CompanyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slogan?: SortOrder
    category?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    domain?: SortOrder
    phone?: SortOrder
    supportEmail?: SortOrder
    salesEmail?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    gmailConnected?: SortOrder
    office365Connected?: SortOrder
    ownerId?: SortOrder
    subscriptionPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slogan?: SortOrder
    category?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    domain?: SortOrder
    phone?: SortOrder
    supportEmail?: SortOrder
    salesEmail?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    gmailConnected?: SortOrder
    office365Connected?: SortOrder
    ownerId?: SortOrder
    subscriptionPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slogan?: SortOrder
    category?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    domain?: SortOrder
    phone?: SortOrder
    supportEmail?: SortOrder
    salesEmail?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    gmailConnected?: SortOrder
    office365Connected?: SortOrder
    ownerId?: SortOrder
    subscriptionPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCompanyCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyCategory | EnumCompanyCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompanyCategory[] | null
    notIn?: $Enums.CompanyCategory[] | null
    not?: NestedEnumCompanyCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.CompanyCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCompanyCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumCompanyCategoryNullableFilter<$PrismaModel>
  }

  export type EnumBusinessTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BusinessType[] | null
    notIn?: $Enums.BusinessType[] | null
    not?: NestedEnumBusinessTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BusinessType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBusinessTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBusinessTypeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FeatureListRelationFilter = {
    every?: FeatureWhereInput
    some?: FeatureWhereInput
    none?: FeatureWhereInput
  }

  export type FeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionPlanOrderByRelevanceInput = {
    fields: SubscriptionPlanOrderByRelevanceFieldEnum | SubscriptionPlanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pricePerMonth?: SortOrder
    description?: SortOrder
    maxUsers?: SortOrder
    maxAdmins?: SortOrder
    maxManagers?: SortOrder
    maxCustomers?: SortOrder
    storageLimitMB?: SortOrder
    maxProjects?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanAvgOrderByAggregateInput = {
    pricePerMonth?: SortOrder
    maxUsers?: SortOrder
    maxAdmins?: SortOrder
    maxManagers?: SortOrder
    maxCustomers?: SortOrder
    storageLimitMB?: SortOrder
    maxProjects?: SortOrder
  }

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pricePerMonth?: SortOrder
    description?: SortOrder
    maxUsers?: SortOrder
    maxAdmins?: SortOrder
    maxManagers?: SortOrder
    maxCustomers?: SortOrder
    storageLimitMB?: SortOrder
    maxProjects?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pricePerMonth?: SortOrder
    description?: SortOrder
    maxUsers?: SortOrder
    maxAdmins?: SortOrder
    maxManagers?: SortOrder
    maxCustomers?: SortOrder
    storageLimitMB?: SortOrder
    maxProjects?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanSumOrderByAggregateInput = {
    pricePerMonth?: SortOrder
    maxUsers?: SortOrder
    maxAdmins?: SortOrder
    maxManagers?: SortOrder
    maxCustomers?: SortOrder
    storageLimitMB?: SortOrder
    maxProjects?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type SubscriptionPlanListRelationFilter = {
    every?: SubscriptionPlanWhereInput
    some?: SubscriptionPlanWhereInput
    none?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureOrderByRelevanceInput = {
    fields: FeatureOrderByRelevanceFieldEnum | FeatureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FeatureCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    isActive?: SortOrder
  }

  export type FeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    isActive?: SortOrder
  }

  export type FeatureMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    isActive?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type ProjectCustomerNullableScalarRelationFilter = {
    is?: ProjectCustomerWhereInput | null
    isNot?: ProjectCustomerWhereInput | null
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    companyId?: SortOrder
    budget?: SortOrder
    progress?: SortOrder
    managerId?: SortOrder
    customerid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    budget?: SortOrder
    progress?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    companyId?: SortOrder
    budget?: SortOrder
    progress?: SortOrder
    managerId?: SortOrder
    customerid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    companyId?: SortOrder
    budget?: SortOrder
    progress?: SortOrder
    managerId?: SortOrder
    customerid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    budget?: SortOrder
    progress?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectStaffOrderByRelevanceInput = {
    fields: ProjectStaffOrderByRelevanceFieldEnum | ProjectStaffOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectStaffProjectIdUserIdCompoundUniqueInput = {
    projectId: string
    userId: string
  }

  export type ProjectStaffCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ProjectStaffMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ProjectStaffMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ProjectCustomerOrderByRelevanceInput = {
    fields: ProjectCustomerOrderByRelevanceFieldEnum | ProjectCustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCustomerProjectIdUserIdCompoundUniqueInput = {
    projectId: string
    userId: string
  }

  export type ProjectCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    notes?: SortOrder
    addedAt?: SortOrder
  }

  export type ProjectCustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    notes?: SortOrder
    addedAt?: SortOrder
  }

  export type ProjectCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    notes?: SortOrder
    addedAt?: SortOrder
  }

  export type CompanyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CompanyCreateWithoutOwnerInput, CompanyUncheckedCreateWithoutOwnerInput> | CompanyCreateWithoutOwnerInput[] | CompanyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutOwnerInput | CompanyCreateOrConnectWithoutOwnerInput[]
    createMany?: CompanyCreateManyOwnerInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CompanyCreateNestedManyWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput> | CompanyCreateWithoutUsersInput[] | CompanyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput | CompanyCreateOrConnectWithoutUsersInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CompanyCreateNestedOneWithoutActiveUsersInput = {
    create?: XOR<CompanyCreateWithoutActiveUsersInput, CompanyUncheckedCreateWithoutActiveUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutActiveUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type ProjectCustomerCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCustomerCreateWithoutUserInput, ProjectCustomerUncheckedCreateWithoutUserInput> | ProjectCustomerCreateWithoutUserInput[] | ProjectCustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCustomerCreateOrConnectWithoutUserInput | ProjectCustomerCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCustomerCreateManyUserInputEnvelope
    connect?: ProjectCustomerWhereUniqueInput | ProjectCustomerWhereUniqueInput[]
  }

  export type ProjectStaffCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectStaffCreateWithoutUserInput, ProjectStaffUncheckedCreateWithoutUserInput> | ProjectStaffCreateWithoutUserInput[] | ProjectStaffUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectStaffCreateOrConnectWithoutUserInput | ProjectStaffCreateOrConnectWithoutUserInput[]
    createMany?: ProjectStaffCreateManyUserInputEnvelope
    connect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutManagerInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CompanyCreateWithoutOwnerInput, CompanyUncheckedCreateWithoutOwnerInput> | CompanyCreateWithoutOwnerInput[] | CompanyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutOwnerInput | CompanyCreateOrConnectWithoutOwnerInput[]
    createMany?: CompanyCreateManyOwnerInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput> | CompanyCreateWithoutUsersInput[] | CompanyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput | CompanyCreateOrConnectWithoutUsersInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type ProjectCustomerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCustomerCreateWithoutUserInput, ProjectCustomerUncheckedCreateWithoutUserInput> | ProjectCustomerCreateWithoutUserInput[] | ProjectCustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCustomerCreateOrConnectWithoutUserInput | ProjectCustomerCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCustomerCreateManyUserInputEnvelope
    connect?: ProjectCustomerWhereUniqueInput | ProjectCustomerWhereUniqueInput[]
  }

  export type ProjectStaffUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectStaffCreateWithoutUserInput, ProjectStaffUncheckedCreateWithoutUserInput> | ProjectStaffCreateWithoutUserInput[] | ProjectStaffUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectStaffCreateOrConnectWithoutUserInput | ProjectStaffCreateOrConnectWithoutUserInput[]
    createMany?: ProjectStaffCreateManyUserInputEnvelope
    connect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompanyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CompanyCreateWithoutOwnerInput, CompanyUncheckedCreateWithoutOwnerInput> | CompanyCreateWithoutOwnerInput[] | CompanyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutOwnerInput | CompanyCreateOrConnectWithoutOwnerInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutOwnerInput | CompanyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CompanyCreateManyOwnerInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutOwnerInput | CompanyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutOwnerInput | CompanyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput> | CompanyCreateWithoutUsersInput[] | CompanyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput | CompanyCreateOrConnectWithoutUsersInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutUsersInput | CompanyUpsertWithWhereUniqueWithoutUsersInput[]
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutUsersInput | CompanyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutUsersInput | CompanyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyUpdateOneWithoutActiveUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutActiveUsersInput, CompanyUncheckedCreateWithoutActiveUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutActiveUsersInput
    upsert?: CompanyUpsertWithoutActiveUsersInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutActiveUsersInput, CompanyUpdateWithoutActiveUsersInput>, CompanyUncheckedUpdateWithoutActiveUsersInput>
  }

  export type ProjectCustomerUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCustomerCreateWithoutUserInput, ProjectCustomerUncheckedCreateWithoutUserInput> | ProjectCustomerCreateWithoutUserInput[] | ProjectCustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCustomerCreateOrConnectWithoutUserInput | ProjectCustomerCreateOrConnectWithoutUserInput[]
    upsert?: ProjectCustomerUpsertWithWhereUniqueWithoutUserInput | ProjectCustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCustomerCreateManyUserInputEnvelope
    set?: ProjectCustomerWhereUniqueInput | ProjectCustomerWhereUniqueInput[]
    disconnect?: ProjectCustomerWhereUniqueInput | ProjectCustomerWhereUniqueInput[]
    delete?: ProjectCustomerWhereUniqueInput | ProjectCustomerWhereUniqueInput[]
    connect?: ProjectCustomerWhereUniqueInput | ProjectCustomerWhereUniqueInput[]
    update?: ProjectCustomerUpdateWithWhereUniqueWithoutUserInput | ProjectCustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectCustomerUpdateManyWithWhereWithoutUserInput | ProjectCustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectCustomerScalarWhereInput | ProjectCustomerScalarWhereInput[]
  }

  export type ProjectStaffUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectStaffCreateWithoutUserInput, ProjectStaffUncheckedCreateWithoutUserInput> | ProjectStaffCreateWithoutUserInput[] | ProjectStaffUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectStaffCreateOrConnectWithoutUserInput | ProjectStaffCreateOrConnectWithoutUserInput[]
    upsert?: ProjectStaffUpsertWithWhereUniqueWithoutUserInput | ProjectStaffUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectStaffCreateManyUserInputEnvelope
    set?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    disconnect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    delete?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    connect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    update?: ProjectStaffUpdateWithWhereUniqueWithoutUserInput | ProjectStaffUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectStaffUpdateManyWithWhereWithoutUserInput | ProjectStaffUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectStaffScalarWhereInput | ProjectStaffScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutManagerInput | ProjectUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutManagerInput | ProjectUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutManagerInput | ProjectUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CompanyCreateWithoutOwnerInput, CompanyUncheckedCreateWithoutOwnerInput> | CompanyCreateWithoutOwnerInput[] | CompanyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutOwnerInput | CompanyCreateOrConnectWithoutOwnerInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutOwnerInput | CompanyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CompanyCreateManyOwnerInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutOwnerInput | CompanyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutOwnerInput | CompanyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput> | CompanyCreateWithoutUsersInput[] | CompanyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput | CompanyCreateOrConnectWithoutUsersInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutUsersInput | CompanyUpsertWithWhereUniqueWithoutUsersInput[]
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutUsersInput | CompanyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutUsersInput | CompanyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type ProjectCustomerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCustomerCreateWithoutUserInput, ProjectCustomerUncheckedCreateWithoutUserInput> | ProjectCustomerCreateWithoutUserInput[] | ProjectCustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCustomerCreateOrConnectWithoutUserInput | ProjectCustomerCreateOrConnectWithoutUserInput[]
    upsert?: ProjectCustomerUpsertWithWhereUniqueWithoutUserInput | ProjectCustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCustomerCreateManyUserInputEnvelope
    set?: ProjectCustomerWhereUniqueInput | ProjectCustomerWhereUniqueInput[]
    disconnect?: ProjectCustomerWhereUniqueInput | ProjectCustomerWhereUniqueInput[]
    delete?: ProjectCustomerWhereUniqueInput | ProjectCustomerWhereUniqueInput[]
    connect?: ProjectCustomerWhereUniqueInput | ProjectCustomerWhereUniqueInput[]
    update?: ProjectCustomerUpdateWithWhereUniqueWithoutUserInput | ProjectCustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectCustomerUpdateManyWithWhereWithoutUserInput | ProjectCustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectCustomerScalarWhereInput | ProjectCustomerScalarWhereInput[]
  }

  export type ProjectStaffUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectStaffCreateWithoutUserInput, ProjectStaffUncheckedCreateWithoutUserInput> | ProjectStaffCreateWithoutUserInput[] | ProjectStaffUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectStaffCreateOrConnectWithoutUserInput | ProjectStaffCreateOrConnectWithoutUserInput[]
    upsert?: ProjectStaffUpsertWithWhereUniqueWithoutUserInput | ProjectStaffUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectStaffCreateManyUserInputEnvelope
    set?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    disconnect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    delete?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    connect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    update?: ProjectStaffUpdateWithWhereUniqueWithoutUserInput | ProjectStaffUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectStaffUpdateManyWithWhereWithoutUserInput | ProjectStaffUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectStaffScalarWhereInput | ProjectStaffScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutManagerInput | ProjectUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutManagerInput | ProjectUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutManagerInput | ProjectUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedCompaniesInput = {
    create?: XOR<UserCreateWithoutOwnedCompaniesInput, UserUncheckedCreateWithoutOwnedCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedCompaniesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput> | UserCreateWithoutCompaniesInput[] | UserUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput | UserCreateOrConnectWithoutCompaniesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SubscriptionPlanCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<SubscriptionPlanCreateWithoutCompaniesInput, SubscriptionPlanUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutCompaniesInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput> | UserCreateWithoutCompaniesInput[] | UserUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput | UserCreateOrConnectWithoutCompaniesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type NullableEnumCompanyCategoryFieldUpdateOperationsInput = {
    set?: $Enums.CompanyCategory | null
  }

  export type NullableEnumBusinessTypeFieldUpdateOperationsInput = {
    set?: $Enums.BusinessType | null
  }

  export type UserUpdateOneRequiredWithoutOwnedCompaniesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedCompaniesInput, UserUncheckedCreateWithoutOwnedCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedCompaniesInput
    upsert?: UserUpsertWithoutOwnedCompaniesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedCompaniesInput, UserUpdateWithoutOwnedCompaniesInput>, UserUncheckedUpdateWithoutOwnedCompaniesInput>
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput> | UserCreateWithoutCompaniesInput[] | UserUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput | UserCreateOrConnectWithoutCompaniesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompaniesInput | UserUpsertWithWhereUniqueWithoutCompaniesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompaniesInput | UserUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompaniesInput | UserUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutCompaniesInput, SubscriptionPlanUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutCompaniesInput
    upsert?: SubscriptionPlanUpsertWithoutCompaniesInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutCompaniesInput, SubscriptionPlanUpdateWithoutCompaniesInput>, SubscriptionPlanUncheckedUpdateWithoutCompaniesInput>
  }

  export type ProjectUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCompanyInput | ProjectUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCompanyInput | ProjectUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCompanyInput | ProjectUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput> | UserCreateWithoutCompaniesInput[] | UserUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput | UserCreateOrConnectWithoutCompaniesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompaniesInput | UserUpsertWithWhereUniqueWithoutCompaniesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompaniesInput | UserUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompaniesInput | UserUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCompanyInput | ProjectUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCompanyInput | ProjectUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCompanyInput | ProjectUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type FeatureCreateNestedManyWithoutPlansInput = {
    create?: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput> | FeatureCreateWithoutPlansInput[] | FeatureUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPlansInput | FeatureCreateOrConnectWithoutPlansInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type CompanyCreateNestedManyWithoutSubscriptionPlanInput = {
    create?: XOR<CompanyCreateWithoutSubscriptionPlanInput, CompanyUncheckedCreateWithoutSubscriptionPlanInput> | CompanyCreateWithoutSubscriptionPlanInput[] | CompanyUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSubscriptionPlanInput | CompanyCreateOrConnectWithoutSubscriptionPlanInput[]
    createMany?: CompanyCreateManySubscriptionPlanInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type FeatureUncheckedCreateNestedManyWithoutPlansInput = {
    create?: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput> | FeatureCreateWithoutPlansInput[] | FeatureUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPlansInput | FeatureCreateOrConnectWithoutPlansInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutSubscriptionPlanInput = {
    create?: XOR<CompanyCreateWithoutSubscriptionPlanInput, CompanyUncheckedCreateWithoutSubscriptionPlanInput> | CompanyCreateWithoutSubscriptionPlanInput[] | CompanyUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSubscriptionPlanInput | CompanyCreateOrConnectWithoutSubscriptionPlanInput[]
    createMany?: CompanyCreateManySubscriptionPlanInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FeatureUpdateManyWithoutPlansNestedInput = {
    create?: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput> | FeatureCreateWithoutPlansInput[] | FeatureUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPlansInput | FeatureCreateOrConnectWithoutPlansInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutPlansInput | FeatureUpsertWithWhereUniqueWithoutPlansInput[]
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutPlansInput | FeatureUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutPlansInput | FeatureUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type CompanyUpdateManyWithoutSubscriptionPlanNestedInput = {
    create?: XOR<CompanyCreateWithoutSubscriptionPlanInput, CompanyUncheckedCreateWithoutSubscriptionPlanInput> | CompanyCreateWithoutSubscriptionPlanInput[] | CompanyUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSubscriptionPlanInput | CompanyCreateOrConnectWithoutSubscriptionPlanInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutSubscriptionPlanInput | CompanyUpsertWithWhereUniqueWithoutSubscriptionPlanInput[]
    createMany?: CompanyCreateManySubscriptionPlanInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutSubscriptionPlanInput | CompanyUpdateWithWhereUniqueWithoutSubscriptionPlanInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutSubscriptionPlanInput | CompanyUpdateManyWithWhereWithoutSubscriptionPlanInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type FeatureUncheckedUpdateManyWithoutPlansNestedInput = {
    create?: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput> | FeatureCreateWithoutPlansInput[] | FeatureUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPlansInput | FeatureCreateOrConnectWithoutPlansInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutPlansInput | FeatureUpsertWithWhereUniqueWithoutPlansInput[]
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutPlansInput | FeatureUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutPlansInput | FeatureUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutSubscriptionPlanNestedInput = {
    create?: XOR<CompanyCreateWithoutSubscriptionPlanInput, CompanyUncheckedCreateWithoutSubscriptionPlanInput> | CompanyCreateWithoutSubscriptionPlanInput[] | CompanyUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSubscriptionPlanInput | CompanyCreateOrConnectWithoutSubscriptionPlanInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutSubscriptionPlanInput | CompanyUpsertWithWhereUniqueWithoutSubscriptionPlanInput[]
    createMany?: CompanyCreateManySubscriptionPlanInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutSubscriptionPlanInput | CompanyUpdateWithWhereUniqueWithoutSubscriptionPlanInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutSubscriptionPlanInput | CompanyUpdateManyWithWhereWithoutSubscriptionPlanInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type SubscriptionPlanCreateNestedManyWithoutFeaturesInput = {
    create?: XOR<SubscriptionPlanCreateWithoutFeaturesInput, SubscriptionPlanUncheckedCreateWithoutFeaturesInput> | SubscriptionPlanCreateWithoutFeaturesInput[] | SubscriptionPlanUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutFeaturesInput | SubscriptionPlanCreateOrConnectWithoutFeaturesInput[]
    connect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
  }

  export type SubscriptionPlanUncheckedCreateNestedManyWithoutFeaturesInput = {
    create?: XOR<SubscriptionPlanCreateWithoutFeaturesInput, SubscriptionPlanUncheckedCreateWithoutFeaturesInput> | SubscriptionPlanCreateWithoutFeaturesInput[] | SubscriptionPlanUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutFeaturesInput | SubscriptionPlanCreateOrConnectWithoutFeaturesInput[]
    connect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
  }

  export type SubscriptionPlanUpdateManyWithoutFeaturesNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutFeaturesInput, SubscriptionPlanUncheckedCreateWithoutFeaturesInput> | SubscriptionPlanCreateWithoutFeaturesInput[] | SubscriptionPlanUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutFeaturesInput | SubscriptionPlanCreateOrConnectWithoutFeaturesInput[]
    upsert?: SubscriptionPlanUpsertWithWhereUniqueWithoutFeaturesInput | SubscriptionPlanUpsertWithWhereUniqueWithoutFeaturesInput[]
    set?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    disconnect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    delete?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    connect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    update?: SubscriptionPlanUpdateWithWhereUniqueWithoutFeaturesInput | SubscriptionPlanUpdateWithWhereUniqueWithoutFeaturesInput[]
    updateMany?: SubscriptionPlanUpdateManyWithWhereWithoutFeaturesInput | SubscriptionPlanUpdateManyWithWhereWithoutFeaturesInput[]
    deleteMany?: SubscriptionPlanScalarWhereInput | SubscriptionPlanScalarWhereInput[]
  }

  export type SubscriptionPlanUncheckedUpdateManyWithoutFeaturesNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutFeaturesInput, SubscriptionPlanUncheckedCreateWithoutFeaturesInput> | SubscriptionPlanCreateWithoutFeaturesInput[] | SubscriptionPlanUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutFeaturesInput | SubscriptionPlanCreateOrConnectWithoutFeaturesInput[]
    upsert?: SubscriptionPlanUpsertWithWhereUniqueWithoutFeaturesInput | SubscriptionPlanUpsertWithWhereUniqueWithoutFeaturesInput[]
    set?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    disconnect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    delete?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    connect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    update?: SubscriptionPlanUpdateWithWhereUniqueWithoutFeaturesInput | SubscriptionPlanUpdateWithWhereUniqueWithoutFeaturesInput[]
    updateMany?: SubscriptionPlanUpdateManyWithWhereWithoutFeaturesInput | SubscriptionPlanUpdateManyWithWhereWithoutFeaturesInput[]
    deleteMany?: SubscriptionPlanScalarWhereInput | SubscriptionPlanScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutProjectInput = {
    create?: XOR<CompanyCreateWithoutProjectInput, CompanyUncheckedCreateWithoutProjectInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProjectInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCustomerCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectCustomerCreateWithoutProjectInput, ProjectCustomerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectCustomerCreateOrConnectWithoutProjectInput
    connect?: ProjectCustomerWhereUniqueInput
  }

  export type ProjectStaffCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectStaffCreateWithoutProjectInput, ProjectStaffUncheckedCreateWithoutProjectInput> | ProjectStaffCreateWithoutProjectInput[] | ProjectStaffUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectStaffCreateOrConnectWithoutProjectInput | ProjectStaffCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectStaffCreateManyProjectInputEnvelope
    connect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
  }

  export type ProjectCustomerUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectCustomerCreateWithoutProjectInput, ProjectCustomerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectCustomerCreateOrConnectWithoutProjectInput
    connect?: ProjectCustomerWhereUniqueInput
  }

  export type ProjectStaffUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectStaffCreateWithoutProjectInput, ProjectStaffUncheckedCreateWithoutProjectInput> | ProjectStaffCreateWithoutProjectInput[] | ProjectStaffUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectStaffCreateOrConnectWithoutProjectInput | ProjectStaffCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectStaffCreateManyProjectInputEnvelope
    connect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<CompanyCreateWithoutProjectInput, CompanyUncheckedCreateWithoutProjectInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProjectInput
    upsert?: CompanyUpsertWithoutProjectInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutProjectInput, CompanyUpdateWithoutProjectInput>, CompanyUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectInput, UserUpdateWithoutProjectInput>, UserUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCustomerUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectCustomerCreateWithoutProjectInput, ProjectCustomerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectCustomerCreateOrConnectWithoutProjectInput
    upsert?: ProjectCustomerUpsertWithoutProjectInput
    disconnect?: ProjectCustomerWhereInput | boolean
    delete?: ProjectCustomerWhereInput | boolean
    connect?: ProjectCustomerWhereUniqueInput
    update?: XOR<XOR<ProjectCustomerUpdateToOneWithWhereWithoutProjectInput, ProjectCustomerUpdateWithoutProjectInput>, ProjectCustomerUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectStaffUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectStaffCreateWithoutProjectInput, ProjectStaffUncheckedCreateWithoutProjectInput> | ProjectStaffCreateWithoutProjectInput[] | ProjectStaffUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectStaffCreateOrConnectWithoutProjectInput | ProjectStaffCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectStaffUpsertWithWhereUniqueWithoutProjectInput | ProjectStaffUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectStaffCreateManyProjectInputEnvelope
    set?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    disconnect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    delete?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    connect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    update?: ProjectStaffUpdateWithWhereUniqueWithoutProjectInput | ProjectStaffUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectStaffUpdateManyWithWhereWithoutProjectInput | ProjectStaffUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectStaffScalarWhereInput | ProjectStaffScalarWhereInput[]
  }

  export type ProjectCustomerUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectCustomerCreateWithoutProjectInput, ProjectCustomerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectCustomerCreateOrConnectWithoutProjectInput
    upsert?: ProjectCustomerUpsertWithoutProjectInput
    disconnect?: ProjectCustomerWhereInput | boolean
    delete?: ProjectCustomerWhereInput | boolean
    connect?: ProjectCustomerWhereUniqueInput
    update?: XOR<XOR<ProjectCustomerUpdateToOneWithWhereWithoutProjectInput, ProjectCustomerUpdateWithoutProjectInput>, ProjectCustomerUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectStaffUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectStaffCreateWithoutProjectInput, ProjectStaffUncheckedCreateWithoutProjectInput> | ProjectStaffCreateWithoutProjectInput[] | ProjectStaffUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectStaffCreateOrConnectWithoutProjectInput | ProjectStaffCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectStaffUpsertWithWhereUniqueWithoutProjectInput | ProjectStaffUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectStaffCreateManyProjectInputEnvelope
    set?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    disconnect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    delete?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    connect?: ProjectStaffWhereUniqueInput | ProjectStaffWhereUniqueInput[]
    update?: ProjectStaffUpdateWithWhereUniqueWithoutProjectInput | ProjectStaffUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectStaffUpdateManyWithWhereWithoutProjectInput | ProjectStaffUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectStaffScalarWhereInput | ProjectStaffScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutStaffInput = {
    create?: XOR<ProjectCreateWithoutStaffInput, ProjectUncheckedCreateWithoutStaffInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStaffInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectStaffInput = {
    create?: XOR<UserCreateWithoutProjectStaffInput, UserUncheckedCreateWithoutProjectStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectStaffInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<ProjectCreateWithoutStaffInput, ProjectUncheckedCreateWithoutStaffInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStaffInput
    upsert?: ProjectUpsertWithoutStaffInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutStaffInput, ProjectUpdateWithoutStaffInput>, ProjectUncheckedUpdateWithoutStaffInput>
  }

  export type UserUpdateOneRequiredWithoutProjectStaffNestedInput = {
    create?: XOR<UserCreateWithoutProjectStaffInput, UserUncheckedCreateWithoutProjectStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectStaffInput
    upsert?: UserUpsertWithoutProjectStaffInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectStaffInput, UserUpdateWithoutProjectStaffInput>, UserUncheckedUpdateWithoutProjectStaffInput>
  }

  export type ProjectCreateNestedOneWithoutCustomerInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectCustomerInput = {
    create?: XOR<UserCreateWithoutProjectCustomerInput, UserUncheckedCreateWithoutProjectCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput
    upsert?: ProjectUpsertWithoutCustomerInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCustomerInput, ProjectUpdateWithoutCustomerInput>, ProjectUncheckedUpdateWithoutCustomerInput>
  }

  export type UserUpdateOneRequiredWithoutProjectCustomerNestedInput = {
    create?: XOR<UserCreateWithoutProjectCustomerInput, UserUncheckedCreateWithoutProjectCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectCustomerInput
    upsert?: UserUpsertWithoutProjectCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectCustomerInput, UserUpdateWithoutProjectCustomerInput>, UserUncheckedUpdateWithoutProjectCustomerInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCompanyCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyCategory | EnumCompanyCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompanyCategory[] | null
    notIn?: $Enums.CompanyCategory[] | null
    not?: NestedEnumCompanyCategoryNullableFilter<$PrismaModel> | $Enums.CompanyCategory | null
  }

  export type NestedEnumBusinessTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BusinessType[] | null
    notIn?: $Enums.BusinessType[] | null
    not?: NestedEnumBusinessTypeNullableFilter<$PrismaModel> | $Enums.BusinessType | null
  }

  export type NestedEnumCompanyCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyCategory | EnumCompanyCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompanyCategory[] | null
    notIn?: $Enums.CompanyCategory[] | null
    not?: NestedEnumCompanyCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.CompanyCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCompanyCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumCompanyCategoryNullableFilter<$PrismaModel>
  }

  export type NestedEnumBusinessTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BusinessType[] | null
    notIn?: $Enums.BusinessType[] | null
    not?: NestedEnumBusinessTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BusinessType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBusinessTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBusinessTypeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CompanyCreateWithoutOwnerInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeUsers?: UserCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompaniesInput
    subscriptionPlan: SubscriptionPlanCreateNestedOneWithoutCompaniesInput
    Project?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    subscriptionPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activeUsers?: UserUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompaniesInput
    Project?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutOwnerInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutOwnerInput, CompanyUncheckedCreateWithoutOwnerInput>
  }

  export type CompanyCreateManyOwnerInputEnvelope = {
    data: CompanyCreateManyOwnerInput | CompanyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCompaniesInput
    activeUsers?: UserCreateNestedManyWithoutCompanyInput
    subscriptionPlan: SubscriptionPlanCreateNestedOneWithoutCompaniesInput
    Project?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    ownerId: string
    subscriptionPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activeUsers?: UserUncheckedCreateNestedManyWithoutCompanyInput
    Project?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type CompanyCreateWithoutActiveUsersInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCompaniesInput
    users?: UserCreateNestedManyWithoutCompaniesInput
    subscriptionPlan: SubscriptionPlanCreateNestedOneWithoutCompaniesInput
    Project?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutActiveUsersInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    ownerId: string
    subscriptionPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompaniesInput
    Project?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutActiveUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutActiveUsersInput, CompanyUncheckedCreateWithoutActiveUsersInput>
  }

  export type ProjectCustomerCreateWithoutUserInput = {
    id?: string
    role?: string | null
    notes?: string | null
    addedAt?: Date | string
    project: ProjectCreateNestedOneWithoutCustomerInput
  }

  export type ProjectCustomerUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    role?: string | null
    notes?: string | null
    addedAt?: Date | string
  }

  export type ProjectCustomerCreateOrConnectWithoutUserInput = {
    where: ProjectCustomerWhereUniqueInput
    create: XOR<ProjectCustomerCreateWithoutUserInput, ProjectCustomerUncheckedCreateWithoutUserInput>
  }

  export type ProjectCustomerCreateManyUserInputEnvelope = {
    data: ProjectCustomerCreateManyUserInput | ProjectCustomerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectStaffCreateWithoutUserInput = {
    id?: string
    assignedAt?: Date | string
    project: ProjectCreateNestedOneWithoutStaffInput
  }

  export type ProjectStaffUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    assignedAt?: Date | string
  }

  export type ProjectStaffCreateOrConnectWithoutUserInput = {
    where: ProjectStaffWhereUniqueInput
    create: XOR<ProjectStaffCreateWithoutUserInput, ProjectStaffUncheckedCreateWithoutUserInput>
  }

  export type ProjectStaffCreateManyUserInputEnvelope = {
    data: ProjectStaffCreateManyUserInput | ProjectStaffCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutManagerInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutProjectInput
    customer?: ProjectCustomerCreateNestedOneWithoutProjectInput
    staff?: ProjectStaffCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutManagerInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    companyId: string
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: ProjectCustomerUncheckedCreateNestedOneWithoutProjectInput
    staff?: ProjectStaffUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput>
  }

  export type ProjectCreateManyManagerInputEnvelope = {
    data: ProjectCreateManyManagerInput | ProjectCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutOwnerInput, CompanyUncheckedUpdateWithoutOwnerInput>
    create: XOR<CompanyCreateWithoutOwnerInput, CompanyUncheckedCreateWithoutOwnerInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutOwnerInput, CompanyUncheckedUpdateWithoutOwnerInput>
  }

  export type CompanyUpdateManyWithWhereWithoutOwnerInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    slogan?: StringNullableFilter<"Company"> | string | null
    category?: EnumCompanyCategoryNullableFilter<"Company"> | $Enums.CompanyCategory | null
    type?: EnumBusinessTypeNullableFilter<"Company"> | $Enums.BusinessType | null
    logo?: StringNullableFilter<"Company"> | string | null
    domain?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    supportEmail?: StringNullableFilter<"Company"> | string | null
    salesEmail?: StringNullableFilter<"Company"> | string | null
    addressLine1?: StringNullableFilter<"Company"> | string | null
    addressLine2?: StringNullableFilter<"Company"> | string | null
    city?: StringNullableFilter<"Company"> | string | null
    state?: StringNullableFilter<"Company"> | string | null
    zipCode?: StringNullableFilter<"Company"> | string | null
    country?: StringNullableFilter<"Company"> | string | null
    isActive?: BoolFilter<"Company"> | boolean
    gmailConnected?: BoolFilter<"Company"> | boolean
    office365Connected?: BoolFilter<"Company"> | boolean
    ownerId?: StringFilter<"Company"> | string
    subscriptionPlanId?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
  }

  export type CompanyUpsertWithWhereUniqueWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateManyWithWhereWithoutUsersInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutUsersInput>
  }

  export type CompanyUpsertWithoutActiveUsersInput = {
    update: XOR<CompanyUpdateWithoutActiveUsersInput, CompanyUncheckedUpdateWithoutActiveUsersInput>
    create: XOR<CompanyCreateWithoutActiveUsersInput, CompanyUncheckedCreateWithoutActiveUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutActiveUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutActiveUsersInput, CompanyUncheckedUpdateWithoutActiveUsersInput>
  }

  export type CompanyUpdateWithoutActiveUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCompaniesNestedInput
    users?: UserUpdateManyWithoutCompaniesNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateOneRequiredWithoutCompaniesNestedInput
    Project?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutActiveUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    subscriptionPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompaniesNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ProjectCustomerUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectCustomerWhereUniqueInput
    update: XOR<ProjectCustomerUpdateWithoutUserInput, ProjectCustomerUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCustomerCreateWithoutUserInput, ProjectCustomerUncheckedCreateWithoutUserInput>
  }

  export type ProjectCustomerUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectCustomerWhereUniqueInput
    data: XOR<ProjectCustomerUpdateWithoutUserInput, ProjectCustomerUncheckedUpdateWithoutUserInput>
  }

  export type ProjectCustomerUpdateManyWithWhereWithoutUserInput = {
    where: ProjectCustomerScalarWhereInput
    data: XOR<ProjectCustomerUpdateManyMutationInput, ProjectCustomerUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectCustomerScalarWhereInput = {
    AND?: ProjectCustomerScalarWhereInput | ProjectCustomerScalarWhereInput[]
    OR?: ProjectCustomerScalarWhereInput[]
    NOT?: ProjectCustomerScalarWhereInput | ProjectCustomerScalarWhereInput[]
    id?: StringFilter<"ProjectCustomer"> | string
    projectId?: StringFilter<"ProjectCustomer"> | string
    userId?: StringFilter<"ProjectCustomer"> | string
    role?: StringNullableFilter<"ProjectCustomer"> | string | null
    notes?: StringNullableFilter<"ProjectCustomer"> | string | null
    addedAt?: DateTimeFilter<"ProjectCustomer"> | Date | string
  }

  export type ProjectStaffUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectStaffWhereUniqueInput
    update: XOR<ProjectStaffUpdateWithoutUserInput, ProjectStaffUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectStaffCreateWithoutUserInput, ProjectStaffUncheckedCreateWithoutUserInput>
  }

  export type ProjectStaffUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectStaffWhereUniqueInput
    data: XOR<ProjectStaffUpdateWithoutUserInput, ProjectStaffUncheckedUpdateWithoutUserInput>
  }

  export type ProjectStaffUpdateManyWithWhereWithoutUserInput = {
    where: ProjectStaffScalarWhereInput
    data: XOR<ProjectStaffUpdateManyMutationInput, ProjectStaffUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectStaffScalarWhereInput = {
    AND?: ProjectStaffScalarWhereInput | ProjectStaffScalarWhereInput[]
    OR?: ProjectStaffScalarWhereInput[]
    NOT?: ProjectStaffScalarWhereInput | ProjectStaffScalarWhereInput[]
    id?: StringFilter<"ProjectStaff"> | string
    projectId?: StringFilter<"ProjectStaff"> | string
    userId?: StringFilter<"ProjectStaff"> | string
    assignedAt?: DateTimeFilter<"ProjectStaff"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutManagerInput, ProjectUncheckedUpdateWithoutManagerInput>
    create: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutManagerInput, ProjectUncheckedUpdateWithoutManagerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutManagerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutManagerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    companyId?: StringFilter<"Project"> | string
    budget?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    progress?: IntNullableFilter<"Project"> | number | null
    managerId?: StringFilter<"Project"> | string
    customerid?: StringNullableFilter<"Project"> | string | null
    isActive?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutOwnedCompaniesInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutUsersInput
    company?: CompanyCreateNestedOneWithoutActiveUsersInput
    ProjectCustomer?: ProjectCustomerCreateNestedManyWithoutUserInput
    ProjectStaff?: ProjectStaffCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutOwnedCompaniesInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    companyId?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutUsersInput
    ProjectCustomer?: ProjectCustomerUncheckedCreateNestedManyWithoutUserInput
    ProjectStaff?: ProjectStaffUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutOwnedCompaniesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedCompaniesInput, UserUncheckedCreateWithoutOwnedCompaniesInput>
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyCreateNestedManyWithoutOwnerInput
    companies?: CompanyCreateNestedManyWithoutUsersInput
    ProjectCustomer?: ProjectCustomerCreateNestedManyWithoutUserInput
    ProjectStaff?: ProjectStaffCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUsersInput
    ProjectCustomer?: ProjectCustomerUncheckedCreateNestedManyWithoutUserInput
    ProjectStaff?: ProjectStaffUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCompaniesInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyCreateNestedManyWithoutOwnerInput
    company?: CompanyCreateNestedOneWithoutActiveUsersInput
    ProjectCustomer?: ProjectCustomerCreateNestedManyWithoutUserInput
    ProjectStaff?: ProjectStaffCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutCompaniesInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    companyId?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    ProjectCustomer?: ProjectCustomerUncheckedCreateNestedManyWithoutUserInput
    ProjectStaff?: ProjectStaffUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutCompaniesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
  }

  export type SubscriptionPlanCreateWithoutCompaniesInput = {
    id?: string
    name: string
    pricePerMonth?: Decimal | DecimalJsLike | number | string
    description?: string | null
    maxUsers?: number
    maxAdmins?: number
    maxManagers?: number
    maxCustomers?: number
    storageLimitMB?: number
    maxProjects?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    features?: FeatureCreateNestedManyWithoutPlansInput
  }

  export type SubscriptionPlanUncheckedCreateWithoutCompaniesInput = {
    id?: string
    name: string
    pricePerMonth?: Decimal | DecimalJsLike | number | string
    description?: string | null
    maxUsers?: number
    maxAdmins?: number
    maxManagers?: number
    maxCustomers?: number
    storageLimitMB?: number
    maxProjects?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    features?: FeatureUncheckedCreateNestedManyWithoutPlansInput
  }

  export type SubscriptionPlanCreateOrConnectWithoutCompaniesInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutCompaniesInput, SubscriptionPlanUncheckedCreateWithoutCompaniesInput>
  }

  export type ProjectCreateWithoutCompanyInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    manager: UserCreateNestedOneWithoutProjectInput
    customer?: ProjectCustomerCreateNestedOneWithoutProjectInput
    staff?: ProjectStaffCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    managerId: string
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: ProjectCustomerUncheckedCreateNestedOneWithoutProjectInput
    staff?: ProjectStaffUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectCreateManyCompanyInputEnvelope = {
    data: ProjectCreateManyCompanyInput | ProjectCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedCompaniesInput = {
    update: XOR<UserUpdateWithoutOwnedCompaniesInput, UserUncheckedUpdateWithoutOwnedCompaniesInput>
    create: XOR<UserCreateWithoutOwnedCompaniesInput, UserUncheckedCreateWithoutOwnedCompaniesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedCompaniesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedCompaniesInput, UserUncheckedUpdateWithoutOwnedCompaniesInput>
  }

  export type UserUpdateWithoutOwnedCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutUsersNestedInput
    company?: CompanyUpdateOneWithoutActiveUsersNestedInput
    ProjectCustomer?: ProjectCustomerUpdateManyWithoutUserNestedInput
    ProjectStaff?: ProjectStaffUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutUsersNestedInput
    ProjectCustomer?: ProjectCustomerUncheckedUpdateManyWithoutUserNestedInput
    ProjectStaff?: ProjectStaffUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    addressLine1?: StringNullableFilter<"User"> | string | null
    addressLine2?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    zipCode?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    companyId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompaniesInput, UserUncheckedUpdateWithoutCompaniesInput>
    create: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompaniesInput, UserUncheckedUpdateWithoutCompaniesInput>
  }

  export type UserUpdateManyWithWhereWithoutCompaniesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompaniesInput>
  }

  export type SubscriptionPlanUpsertWithoutCompaniesInput = {
    update: XOR<SubscriptionPlanUpdateWithoutCompaniesInput, SubscriptionPlanUncheckedUpdateWithoutCompaniesInput>
    create: XOR<SubscriptionPlanCreateWithoutCompaniesInput, SubscriptionPlanUncheckedCreateWithoutCompaniesInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutCompaniesInput, SubscriptionPlanUncheckedUpdateWithoutCompaniesInput>
  }

  export type SubscriptionPlanUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxAdmins?: IntFieldUpdateOperationsInput | number
    maxManagers?: IntFieldUpdateOperationsInput | number
    maxCustomers?: IntFieldUpdateOperationsInput | number
    storageLimitMB?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUpdateManyWithoutPlansNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxAdmins?: IntFieldUpdateOperationsInput | number
    maxManagers?: IntFieldUpdateOperationsInput | number
    maxCustomers?: IntFieldUpdateOperationsInput | number
    storageLimitMB?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUncheckedUpdateManyWithoutPlansNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCompanyInput, ProjectUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCompanyInput, ProjectUncheckedUpdateWithoutCompanyInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCompanyInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCompanyInput>
  }

  export type FeatureCreateWithoutPlansInput = {
    id?: string
    key: string
    label: string
    isActive?: boolean
  }

  export type FeatureUncheckedCreateWithoutPlansInput = {
    id?: string
    key: string
    label: string
    isActive?: boolean
  }

  export type FeatureCreateOrConnectWithoutPlansInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput>
  }

  export type CompanyCreateWithoutSubscriptionPlanInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCompaniesInput
    activeUsers?: UserCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompaniesInput
    Project?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutSubscriptionPlanInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activeUsers?: UserUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompaniesInput
    Project?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutSubscriptionPlanInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSubscriptionPlanInput, CompanyUncheckedCreateWithoutSubscriptionPlanInput>
  }

  export type CompanyCreateManySubscriptionPlanInputEnvelope = {
    data: CompanyCreateManySubscriptionPlanInput | CompanyCreateManySubscriptionPlanInput[]
    skipDuplicates?: boolean
  }

  export type FeatureUpsertWithWhereUniqueWithoutPlansInput = {
    where: FeatureWhereUniqueInput
    update: XOR<FeatureUpdateWithoutPlansInput, FeatureUncheckedUpdateWithoutPlansInput>
    create: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput>
  }

  export type FeatureUpdateWithWhereUniqueWithoutPlansInput = {
    where: FeatureWhereUniqueInput
    data: XOR<FeatureUpdateWithoutPlansInput, FeatureUncheckedUpdateWithoutPlansInput>
  }

  export type FeatureUpdateManyWithWhereWithoutPlansInput = {
    where: FeatureScalarWhereInput
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyWithoutPlansInput>
  }

  export type FeatureScalarWhereInput = {
    AND?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    OR?: FeatureScalarWhereInput[]
    NOT?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    id?: StringFilter<"Feature"> | string
    key?: StringFilter<"Feature"> | string
    label?: StringFilter<"Feature"> | string
    isActive?: BoolFilter<"Feature"> | boolean
  }

  export type CompanyUpsertWithWhereUniqueWithoutSubscriptionPlanInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutSubscriptionPlanInput, CompanyUncheckedUpdateWithoutSubscriptionPlanInput>
    create: XOR<CompanyCreateWithoutSubscriptionPlanInput, CompanyUncheckedCreateWithoutSubscriptionPlanInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutSubscriptionPlanInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutSubscriptionPlanInput, CompanyUncheckedUpdateWithoutSubscriptionPlanInput>
  }

  export type CompanyUpdateManyWithWhereWithoutSubscriptionPlanInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutSubscriptionPlanInput>
  }

  export type SubscriptionPlanCreateWithoutFeaturesInput = {
    id?: string
    name: string
    pricePerMonth?: Decimal | DecimalJsLike | number | string
    description?: string | null
    maxUsers?: number
    maxAdmins?: number
    maxManagers?: number
    maxCustomers?: number
    storageLimitMB?: number
    maxProjects?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutSubscriptionPlanInput
  }

  export type SubscriptionPlanUncheckedCreateWithoutFeaturesInput = {
    id?: string
    name: string
    pricePerMonth?: Decimal | DecimalJsLike | number | string
    description?: string | null
    maxUsers?: number
    maxAdmins?: number
    maxManagers?: number
    maxCustomers?: number
    storageLimitMB?: number
    maxProjects?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutSubscriptionPlanInput
  }

  export type SubscriptionPlanCreateOrConnectWithoutFeaturesInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutFeaturesInput, SubscriptionPlanUncheckedCreateWithoutFeaturesInput>
  }

  export type SubscriptionPlanUpsertWithWhereUniqueWithoutFeaturesInput = {
    where: SubscriptionPlanWhereUniqueInput
    update: XOR<SubscriptionPlanUpdateWithoutFeaturesInput, SubscriptionPlanUncheckedUpdateWithoutFeaturesInput>
    create: XOR<SubscriptionPlanCreateWithoutFeaturesInput, SubscriptionPlanUncheckedCreateWithoutFeaturesInput>
  }

  export type SubscriptionPlanUpdateWithWhereUniqueWithoutFeaturesInput = {
    where: SubscriptionPlanWhereUniqueInput
    data: XOR<SubscriptionPlanUpdateWithoutFeaturesInput, SubscriptionPlanUncheckedUpdateWithoutFeaturesInput>
  }

  export type SubscriptionPlanUpdateManyWithWhereWithoutFeaturesInput = {
    where: SubscriptionPlanScalarWhereInput
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyWithoutFeaturesInput>
  }

  export type SubscriptionPlanScalarWhereInput = {
    AND?: SubscriptionPlanScalarWhereInput | SubscriptionPlanScalarWhereInput[]
    OR?: SubscriptionPlanScalarWhereInput[]
    NOT?: SubscriptionPlanScalarWhereInput | SubscriptionPlanScalarWhereInput[]
    id?: StringFilter<"SubscriptionPlan"> | string
    name?: StringFilter<"SubscriptionPlan"> | string
    pricePerMonth?: DecimalFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"SubscriptionPlan"> | string | null
    maxUsers?: IntFilter<"SubscriptionPlan"> | number
    maxAdmins?: IntFilter<"SubscriptionPlan"> | number
    maxManagers?: IntFilter<"SubscriptionPlan"> | number
    maxCustomers?: IntFilter<"SubscriptionPlan"> | number
    storageLimitMB?: IntFilter<"SubscriptionPlan"> | number
    maxProjects?: IntFilter<"SubscriptionPlan"> | number
    isActive?: BoolFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
  }

  export type CompanyCreateWithoutProjectInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedCompaniesInput
    activeUsers?: UserCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompaniesInput
    subscriptionPlan: SubscriptionPlanCreateNestedOneWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    ownerId: string
    subscriptionPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activeUsers?: UserUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyCreateOrConnectWithoutProjectInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProjectInput, CompanyUncheckedCreateWithoutProjectInput>
  }

  export type UserCreateWithoutProjectInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyCreateNestedManyWithoutOwnerInput
    companies?: CompanyCreateNestedManyWithoutUsersInput
    company?: CompanyCreateNestedOneWithoutActiveUsersInput
    ProjectCustomer?: ProjectCustomerCreateNestedManyWithoutUserInput
    ProjectStaff?: ProjectStaffCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    companyId?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUsersInput
    ProjectCustomer?: ProjectCustomerUncheckedCreateNestedManyWithoutUserInput
    ProjectStaff?: ProjectStaffUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCustomerCreateWithoutProjectInput = {
    id?: string
    role?: string | null
    notes?: string | null
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectCustomerInput
  }

  export type ProjectCustomerUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    role?: string | null
    notes?: string | null
    addedAt?: Date | string
  }

  export type ProjectCustomerCreateOrConnectWithoutProjectInput = {
    where: ProjectCustomerWhereUniqueInput
    create: XOR<ProjectCustomerCreateWithoutProjectInput, ProjectCustomerUncheckedCreateWithoutProjectInput>
  }

  export type ProjectStaffCreateWithoutProjectInput = {
    id?: string
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectStaffInput
  }

  export type ProjectStaffUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
  }

  export type ProjectStaffCreateOrConnectWithoutProjectInput = {
    where: ProjectStaffWhereUniqueInput
    create: XOR<ProjectStaffCreateWithoutProjectInput, ProjectStaffUncheckedCreateWithoutProjectInput>
  }

  export type ProjectStaffCreateManyProjectInputEnvelope = {
    data: ProjectStaffCreateManyProjectInput | ProjectStaffCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutProjectInput = {
    update: XOR<CompanyUpdateWithoutProjectInput, CompanyUncheckedUpdateWithoutProjectInput>
    create: XOR<CompanyCreateWithoutProjectInput, CompanyUncheckedCreateWithoutProjectInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutProjectInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutProjectInput, CompanyUncheckedUpdateWithoutProjectInput>
  }

  export type CompanyUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCompaniesNestedInput
    activeUsers?: UserUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompaniesNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateOneRequiredWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    subscriptionPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUsers?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUpdateManyWithoutOwnerNestedInput
    companies?: CompanyUpdateManyWithoutUsersNestedInput
    company?: CompanyUpdateOneWithoutActiveUsersNestedInput
    ProjectCustomer?: ProjectCustomerUpdateManyWithoutUserNestedInput
    ProjectStaff?: ProjectStaffUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUsersNestedInput
    ProjectCustomer?: ProjectCustomerUncheckedUpdateManyWithoutUserNestedInput
    ProjectStaff?: ProjectStaffUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCustomerUpsertWithoutProjectInput = {
    update: XOR<ProjectCustomerUpdateWithoutProjectInput, ProjectCustomerUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectCustomerCreateWithoutProjectInput, ProjectCustomerUncheckedCreateWithoutProjectInput>
    where?: ProjectCustomerWhereInput
  }

  export type ProjectCustomerUpdateToOneWithWhereWithoutProjectInput = {
    where?: ProjectCustomerWhereInput
    data: XOR<ProjectCustomerUpdateWithoutProjectInput, ProjectCustomerUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCustomerUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectCustomerNestedInput
  }

  export type ProjectCustomerUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectStaffUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectStaffWhereUniqueInput
    update: XOR<ProjectStaffUpdateWithoutProjectInput, ProjectStaffUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectStaffCreateWithoutProjectInput, ProjectStaffUncheckedCreateWithoutProjectInput>
  }

  export type ProjectStaffUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectStaffWhereUniqueInput
    data: XOR<ProjectStaffUpdateWithoutProjectInput, ProjectStaffUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectStaffUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectStaffScalarWhereInput
    data: XOR<ProjectStaffUpdateManyMutationInput, ProjectStaffUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutStaffInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutProjectInput
    manager: UserCreateNestedOneWithoutProjectInput
    customer?: ProjectCustomerCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    companyId: string
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    managerId: string
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: ProjectCustomerUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutStaffInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStaffInput, ProjectUncheckedCreateWithoutStaffInput>
  }

  export type UserCreateWithoutProjectStaffInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyCreateNestedManyWithoutOwnerInput
    companies?: CompanyCreateNestedManyWithoutUsersInput
    company?: CompanyCreateNestedOneWithoutActiveUsersInput
    ProjectCustomer?: ProjectCustomerCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutProjectStaffInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    companyId?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUsersInput
    ProjectCustomer?: ProjectCustomerUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutProjectStaffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectStaffInput, UserUncheckedCreateWithoutProjectStaffInput>
  }

  export type ProjectUpsertWithoutStaffInput = {
    update: XOR<ProjectUpdateWithoutStaffInput, ProjectUncheckedUpdateWithoutStaffInput>
    create: XOR<ProjectCreateWithoutStaffInput, ProjectUncheckedCreateWithoutStaffInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutStaffInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutStaffInput, ProjectUncheckedUpdateWithoutStaffInput>
  }

  export type ProjectUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutProjectNestedInput
    manager?: UserUpdateOneRequiredWithoutProjectNestedInput
    customer?: ProjectCustomerUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: StringFieldUpdateOperationsInput | string
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: ProjectCustomerUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type UserUpsertWithoutProjectStaffInput = {
    update: XOR<UserUpdateWithoutProjectStaffInput, UserUncheckedUpdateWithoutProjectStaffInput>
    create: XOR<UserCreateWithoutProjectStaffInput, UserUncheckedCreateWithoutProjectStaffInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectStaffInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectStaffInput, UserUncheckedUpdateWithoutProjectStaffInput>
  }

  export type UserUpdateWithoutProjectStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUpdateManyWithoutOwnerNestedInput
    companies?: CompanyUpdateManyWithoutUsersNestedInput
    company?: CompanyUpdateOneWithoutActiveUsersNestedInput
    ProjectCustomer?: ProjectCustomerUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUsersNestedInput
    ProjectCustomer?: ProjectCustomerUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type ProjectCreateWithoutCustomerInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutProjectInput
    manager: UserCreateNestedOneWithoutProjectInput
    staff?: ProjectStaffCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCustomerInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    companyId: string
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    managerId: string
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: ProjectStaffUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCustomerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
  }

  export type UserCreateWithoutProjectCustomerInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyCreateNestedManyWithoutOwnerInput
    companies?: CompanyCreateNestedManyWithoutUsersInput
    company?: CompanyCreateNestedOneWithoutActiveUsersInput
    ProjectStaff?: ProjectStaffCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutProjectCustomerInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    companyId?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedCompanies?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUsersInput
    ProjectStaff?: ProjectStaffUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutProjectCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectCustomerInput, UserUncheckedCreateWithoutProjectCustomerInput>
  }

  export type ProjectUpsertWithoutCustomerInput = {
    update: XOR<ProjectUpdateWithoutCustomerInput, ProjectUncheckedUpdateWithoutCustomerInput>
    create: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCustomerInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCustomerInput, ProjectUncheckedUpdateWithoutCustomerInput>
  }

  export type ProjectUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutProjectNestedInput
    manager?: UserUpdateOneRequiredWithoutProjectNestedInput
    staff?: ProjectStaffUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: StringFieldUpdateOperationsInput | string
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: ProjectStaffUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutProjectCustomerInput = {
    update: XOR<UserUpdateWithoutProjectCustomerInput, UserUncheckedUpdateWithoutProjectCustomerInput>
    create: XOR<UserCreateWithoutProjectCustomerInput, UserUncheckedCreateWithoutProjectCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectCustomerInput, UserUncheckedUpdateWithoutProjectCustomerInput>
  }

  export type UserUpdateWithoutProjectCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUpdateManyWithoutOwnerNestedInput
    companies?: CompanyUpdateManyWithoutUsersNestedInput
    company?: CompanyUpdateOneWithoutActiveUsersNestedInput
    ProjectStaff?: ProjectStaffUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUsersNestedInput
    ProjectStaff?: ProjectStaffUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type CompanyCreateManyOwnerInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    subscriptionPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCustomerCreateManyUserInput = {
    id?: string
    projectId: string
    role?: string | null
    notes?: string | null
    addedAt?: Date | string
  }

  export type ProjectStaffCreateManyUserInput = {
    id?: string
    projectId: string
    assignedAt?: Date | string
  }

  export type ProjectCreateManyManagerInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    companyId: string
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUsers?: UserUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompaniesNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateOneRequiredWithoutCompaniesNestedInput
    Project?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUsers?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompaniesNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCompaniesNestedInput
    activeUsers?: UserUpdateManyWithoutCompanyNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateOneRequiredWithoutCompaniesNestedInput
    Project?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    subscriptionPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUsers?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    subscriptionPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type ProjectCustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCustomerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectStaffUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutStaffNestedInput
  }

  export type ProjectStaffUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectStaffUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutProjectNestedInput
    customer?: ProjectCustomerUpdateOneWithoutProjectNestedInput
    staff?: ProjectStaffUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: ProjectCustomerUncheckedUpdateOneWithoutProjectNestedInput
    staff?: ProjectStaffUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    password: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyCompanyInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    progress?: number | null
    managerId: string
    customerid?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUpdateManyWithoutOwnerNestedInput
    companies?: CompanyUpdateManyWithoutUsersNestedInput
    ProjectCustomer?: ProjectCustomerUpdateManyWithoutUserNestedInput
    ProjectStaff?: ProjectStaffUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUsersNestedInput
    ProjectCustomer?: ProjectCustomerUncheckedUpdateManyWithoutUserNestedInput
    ProjectStaff?: ProjectStaffUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUpdateManyWithoutOwnerNestedInput
    company?: CompanyUpdateOneWithoutActiveUsersNestedInput
    ProjectCustomer?: ProjectCustomerUpdateManyWithoutUserNestedInput
    ProjectStaff?: ProjectStaffUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedCompanies?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    ProjectCustomer?: ProjectCustomerUncheckedUpdateManyWithoutUserNestedInput
    ProjectStaff?: ProjectStaffUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutProjectNestedInput
    customer?: ProjectCustomerUpdateOneWithoutProjectNestedInput
    staff?: ProjectStaffUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: StringFieldUpdateOperationsInput | string
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: ProjectCustomerUncheckedUpdateOneWithoutProjectNestedInput
    staff?: ProjectStaffUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: StringFieldUpdateOperationsInput | string
    customerid?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateManySubscriptionPlanInput = {
    id?: string
    name: string
    slogan?: string | null
    category?: $Enums.CompanyCategory | null
    type?: $Enums.BusinessType | null
    logo?: string | null
    domain?: string | null
    phone?: string | null
    supportEmail?: string | null
    salesEmail?: string | null
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    gmailConnected?: boolean
    office365Connected?: boolean
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeatureUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeatureUncheckedUpdateManyWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompanyUpdateWithoutSubscriptionPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedCompaniesNestedInput
    activeUsers?: UserUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompaniesNestedInput
    Project?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutSubscriptionPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUsers?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompaniesNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutSubscriptionPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumCompanyCategoryFieldUpdateOperationsInput | $Enums.CompanyCategory | null
    type?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    salesEmail?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gmailConnected?: BoolFieldUpdateOperationsInput | boolean
    office365Connected?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxAdmins?: IntFieldUpdateOperationsInput | number
    maxManagers?: IntFieldUpdateOperationsInput | number
    maxCustomers?: IntFieldUpdateOperationsInput | number
    storageLimitMB?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutSubscriptionPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxAdmins?: IntFieldUpdateOperationsInput | number
    maxManagers?: IntFieldUpdateOperationsInput | number
    maxCustomers?: IntFieldUpdateOperationsInput | number
    storageLimitMB?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutSubscriptionPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateManyWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxAdmins?: IntFieldUpdateOperationsInput | number
    maxManagers?: IntFieldUpdateOperationsInput | number
    maxCustomers?: IntFieldUpdateOperationsInput | number
    storageLimitMB?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectStaffCreateManyProjectInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
  }

  export type ProjectStaffUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectStaffNestedInput
  }

  export type ProjectStaffUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectStaffUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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