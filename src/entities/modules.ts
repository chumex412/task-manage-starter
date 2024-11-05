export type TodoTabType = "All" | "Completed" | "Pending"

export interface TaskModalProps<T> {
  tasks: T
  show: boolean
  close: () => void
}