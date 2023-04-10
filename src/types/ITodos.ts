export interface ITodos {
  id: string;
  title: string;
  created_at: number;
  completed: boolean;
};

export type todoState = {
  todos: ITodos[];
  isLoading: boolean;
};