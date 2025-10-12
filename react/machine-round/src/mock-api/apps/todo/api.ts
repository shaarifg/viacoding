import { todosData } from "./../../../../../../data/apps/todo/data";

let todos = structuredClone(todosData);

export const todoMockApi = {
  async getTodos() {
    await new Promise((r) => setTimeout(r, 300)); // fake delay
    return structuredClone(todos);
  },
  async addTodo(title: string) {
    const newTodo = { id: Date.now(), title, completed: false };
    todos.push(newTodo);
    return newTodo;
  },
  async toggleTodo(id: number) {
    const todo = todos.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
    return todo;
  },
  async deleteTodo(id: number) {
    await new Promise((r) => setTimeout(r, 3000));
    todos = todos.filter((t) => t.id !== id);
    return true;
  },
};
