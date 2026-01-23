import type { TQueryParams } from "@/types/user.type";
import { fetcher } from "@/utils/fetcher"
import { useQuery } from "@tanstack/react-query"

const useUsers = (params?: TQueryParams) => {
    const query = params ? '?' + new URLSearchParams(params as Record<string, string>).toString() : '';
    return useQuery({
        queryKey: ['users', params],
        queryFn: async ({ signal }) => {
            const res = await fetcher(`/users${query}`, { signal })
            return res?.data
        },
    })
}
export default useUsers