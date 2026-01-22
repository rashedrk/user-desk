import { fetcher } from '@/utils/fetcher'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useUpdateStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) =>
      fetcher(`/users/${id}/toggle-active`, {
        method: 'PATCH',
      }),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      queryClient.invalidateQueries({ queryKey: ['users', id] })
    },
  })
}

export default useUpdateStatus