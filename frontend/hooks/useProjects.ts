import useSWR from 'swr'
import axios from 'axios'

export type Project = { id: number; title: string; description: string }

const fetcher = (url: string): Promise<Project[]> =>
  axios.get<Project[]>(url).then(res => res.data)

export function useProjects() {
  const { data, error, mutate } = useSWR<Project[]>(
    'http://localhost:3001/projects',
    fetcher
  )
  return {
    projects: data ?? [],
    isLoading: !data && !error,
    isError: Boolean(error),
    mutate,
  }
}
