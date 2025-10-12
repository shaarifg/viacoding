import { todoMockApi } from "@/mock-api/apps/todo/api";
// import { httpClient } from "@/core/httpClient"; // for real API later

// here real api goes

export const todoService = {
  getTodos: async () => await todoMockApi.getTodos(),
  addTodo: async (title: string) => await todoMockApi.addTodo(title),
  toggleTodo: async (id: number) => await todoMockApi.toggleTodo(id),
  deleteTodo: async (id: number) => await todoMockApi.deleteTodo(id),
};
