import {
  QueryFunction,
  QueryKey,
  QueryObserver,
  QueryOptions,
} from 'react-query'

function isQueryKey(value: unknown): value is QueryKey {
  return Array.isArray(value)
}

export function parseQueryArgs<
  TOptions extends QueryOptions<any, any, any, TQueryKey>,
  TQueryKey extends QueryKey = QueryKey,
>(
  arg1: TQueryKey | TOptions,
  arg2?: QueryFunction<any, TQueryKey> | TOptions,
  arg3?: TOptions,
): TOptions {
  if (!isQueryKey(arg1)) {
    return arg1 as TOptions
  }

  if (typeof arg2 === 'function') {
    return { ...arg3, queryKey: arg1, queryFn: arg2 } as TOptions
  }

  return { ...arg2, queryKey: arg1 } as TOptions
}

export function trackResult<
  TQueryResult = unknown,
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  result: TQueryResult,
  observer: QueryObserver<TQueryFnData, TError, TData, TQueryData, TQueryKey>,
): TQueryResult {
  const trackedResult = {} as TQueryResult

  Object.keys(result).forEach((key) => {
    Object.defineProperty(trackedResult, key, {
      configurable: false,
      enumerable: true,
      get: () => {
        // @ts-expect-error – aware we are mutating private `trackedProps` property.
        observer.trackedProps.add(key as keyof TQueryResult)
        return result[key as keyof TQueryResult]
      },
    })
  })

  return trackedResult
}