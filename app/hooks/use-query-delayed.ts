import {
  useQuery,
  type DefaultError,
  type QueryFunction,
  type QueryKey,
} from '@tanstack/react-query'
import { useDeferredValue } from 'react'

export default function useQueryDelayed<
  TResponse,
  TQueryKey extends QueryKey = QueryKey,
>({
  queryKey,
  queryFn,
}: {
  queryKey: TQueryKey
  queryFn: QueryFunction<TResponse, readonly unknown[], never>
}) {
  const deferredValue = useDeferredValue(true, false)

  const { isPending, error, data } = useQuery<
    TResponse,
    DefaultError,
    TResponse,
    TQueryKey
  >({
    queryKey,
    queryFn,
    enabled: deferredValue,
  })

  return { isPending, error, data }
}
