export interface RenderContentProps<T> {
  todoTab: ("All" | "Completed" | "Pending"); 
  isLoading: boolean; 
  isSuccess: boolean; 
  sortTasks: (tab: "All" | "Completed" | "Pending") => void; 
  filteredTasks: T[]
}