import { todos } from "./../../../../../../data/apps/todo/todo";

const simulateNetworkDelay = (ms = 800) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  async getTodos() {
    await simulateNetworkDelay();
    return { data: todos };
  },

  async getTodoById(id: number) {
    await simulateNetworkDelay();
    const todo = todos.find((t) => t.id === id);
    if (!todo) throw new Error("Todo not found");
    return { data: todo };
  },

  async addTodo(title: string) {
    await simulateNetworkDelay();
    const newTodo = { id: Date.now(), title, completed: false };
    todos.push(newTodo);
    return { data: newTodo };
  },

  async deleteTodo(id: number) {
    await simulateNetworkDelay();
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) throw new Error("Todo not found");
    todos.splice(index, 1);
    return { data: true };
  },
};
