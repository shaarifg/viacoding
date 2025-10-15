import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "@/redux/store";
import { todoService } from "./todoService";

export type Todo = { id: number; title: string; completed: boolean };

type TodoState = {
  items: Todo[];
  loadingList: boolean; // when fetching all todos
  loadingAction: boolean; // when performing add/edit/delete
  currentActionId?: number; // track specific item id
  error: string | null;
};

const initialState: TodoState = {
  items: [],
  loadingList: false,
  loadingAction: false,
  currentActionId: undefined,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // ─────────────── Loading & Error ───────────────
    SET_LOADING_LIST: (state, action: PayloadAction<boolean>) => {
      state.loadingList = action.payload;
    },

    SET_LOADING_ACTION: (
      state,
      action: PayloadAction<{ active: boolean; id?: number }>
    ) => {
      state.loadingAction = action.payload.active;
      state.currentActionId = action.payload.id;
    },

    SET_ERROR: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    // ─────────────── Data Updaters ───────────────
    SET_TODOS: (state, action: PayloadAction<Todo[]>) => {
      state.items = action.payload;
    },
  },
});

export const { SET_LOADING_LIST, SET_LOADING_ACTION, SET_ERROR, SET_TODOS } =
  todoSlice.actions;

export default todoSlice.reducer;

//
// ─────────────── THUNKS (Async Actions) ───────────────
//

// ✅ Get all todos
export const GET_TODOS = () => async (dispatch: AppDispatch) => {
  dispatch(SET_LOADING_LIST(true));
  dispatch(SET_ERROR(null));
  try {
    const data = await todoService.getTodos();
    dispatch(SET_TODOS(data));
  } catch (err: any) {
    dispatch(SET_ERROR(err.message || "Failed to load todos"));
  } finally {
    dispatch(SET_LOADING_LIST(false));
  }
};

// ✅ Add todo
export const ADD_TODO =
  (title: string) => async (dispatch: AppDispatch, getState: any) => {
    dispatch(SET_LOADING_ACTION({ active: true }));
    try {
      const data = await todoService.addTodo(title);
      const updated = [...getState().todo.items, data];
      dispatch(SET_TODOS(updated));
    } catch (err: any) {
      dispatch(SET_ERROR(err.message || "Failed to add todo"));
    } finally {
      dispatch(SET_LOADING_ACTION({ active: false }));
    }
  };

// ✅ Toggle todo completion
export const TOGGLE_TODO =
  (id: number) => async (dispatch: AppDispatch, getState: any) => {
    dispatch(SET_LOADING_ACTION({ active: true, id }));
    try {
      await todoService.toggleTodo(id);
      const updated = getState().todo.items.map((t: Todo) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      dispatch(SET_TODOS(updated));
    } catch (err: any) {
      dispatch(SET_ERROR(err.message || "Failed to toggle todo"));
    } finally {
      dispatch(SET_LOADING_ACTION({ active: false }));
    }
  };

// ✅ Delete todo
export const DELETE_TODO =
  (id: number) => async (dispatch: AppDispatch, getState: any) => {
    dispatch(SET_LOADING_ACTION({ active: true, id }));
    try {
      await todoService.deleteTodo(id);
      const updated = getState().todo.items.filter((t: Todo) => t.id !== id);
      dispatch(SET_TODOS(updated));
    } catch (err: any) {
      dispatch(SET_ERROR(err.message || "Failed to delete todo"));
    } finally {
      dispatch(SET_LOADING_ACTION({ active: false }));
    }
  };
