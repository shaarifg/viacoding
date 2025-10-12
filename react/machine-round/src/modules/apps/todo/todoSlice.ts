import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "@/redux/store";
import { todoService } from "./todoService";

export type Todo = { id: number; title: string; completed: boolean };
type TodoState = { items: Todo[]; loading: boolean; error: string | null };

const initialState: TodoState = { items: [], loading: false, error: null };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    SET_LOADING: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    SET_ERROR: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    SET_TODOS: (state, action: PayloadAction<Todo[]>) => {
      state.items = action.payload;
    },
  },
});

export const { SET_LOADING, SET_ERROR, SET_TODOS } = todoSlice.actions;
export default todoSlice.reducer;

// ─────────────── Action handlers (thunks) ───────────────
export const GET_TODOS = () => async (dispatch: AppDispatch) => {
  dispatch(SET_LOADING(true));
  try {
    const data = await todoService.getTodos();
    dispatch(SET_TODOS(data));
  } catch (err: any) {
    dispatch(SET_ERROR(err.message));
  } finally {
    dispatch(SET_LOADING(false));
  }
};

export const ADD_TODO =
  (title: string) => async (dispatch: AppDispatch, getState: any) => {
    dispatch(SET_LOADING(true));
    const data = await todoService.addTodo(title);
    const updated = [...getState().todo.items, data];
    dispatch(SET_TODOS(updated));
    dispatch(SET_LOADING(false));
  };

export const TOGGLE_TODO =
  (id: number) => async (dispatch: AppDispatch, getState: any) => {
    dispatch(SET_LOADING(true));
    await todoService.toggleTodo(id);
    const updated = getState().todo.items.map((t: Todo) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    dispatch(SET_TODOS(updated));
    dispatch(SET_LOADING(false));
  };

export const DELETE_TODO =
  (id: number) => async (dispatch: AppDispatch, getState: any) => {
    dispatch(SET_LOADING(true));
    await todoService.deleteTodo(id);
    const updated = getState().todo.items.filter((t: Todo) => t.id !== id);
    dispatch(SET_TODOS(updated));
    dispatch(SET_LOADING(false));
  };
