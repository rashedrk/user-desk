import type { TUserInfo } from "@/types/user.type"
import { fetcher } from "@/utils/fetcher"
import { useQuery } from "@tanstack/react-query"

const useUserInfo = (id: string) => {
    return useQuery<TUserInfo>({
        queryKey: ['users', id],
        queryFn: async () => {
            const res = await fetcher(`/users/${id}`)
            return res?.data
        },
        enabled: !!id,
    })
}
export default useUserInfo;