export interface Todo {
  id: string;
  activities?: string[];
  date?: string;
  city: string;
  image?: string;
}

export interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  editTodo: (todo: Todo) => void;
  getTodo: (id: string ) => Todo | undefined;
}
