export interface Task {
  id?: string;
  name?: string;
  description?: string;
  startTime?: Date | number | string;
  createdAt?: Date | number | string;
  completed: boolean;
}

export interface EditFormModalProps {
  show: boolean;
  close: () => void; 
  tasks: Task[];
  id: string;
}

export interface TaskItemProps extends Task {
  completeTask: (id: string) => void
  showModal: (id: string) => void
  remove: (id: string) => void
}