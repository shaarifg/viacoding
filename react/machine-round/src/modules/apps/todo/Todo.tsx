import {
  Button,
  IconButton,
  Paper,
  Typography,
  Box,
  CircularProgress,
  TextField,
} from "@mui/material";
import { Add, Edit, Delete, Search } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { ADD_TODO, DELETE_TODO, GET_TODOS, TOGGLE_TODO } from "./todoSlice";
import { useEffect } from "react";

export default function Todo() {
  const dispatch = useAppDispatch();
  const { items, loadingAction, currentActionId, loadingList } = useAppSelector(
    (s) => s.todo
  );

  useEffect(() => {
    dispatch(GET_TODOS());
  }, [dispatch]);

  if (loadingList) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
        <CircularProgress size={64} color="primary" />
      </div>
    );
  }
  return (
    <Paper
      elevation={0}
      className="max-w-xl mx-auto p-6 bg-white border border-gray-200"
    >
      {/* Search Field */}
      <Box className="flex items-center gap-3 mb-6">
        <Search className="text-gray-500" />
        <TextField
          variant="outlined"
          placeholder="Search todos..."
          size="small"
          fullWidth
          InputProps={{
            className: "rounded-none focus:ring-0 text-sm placeholder-gray-400",
          }}
        />
      </Box>

      {/* Header */}
      <Box className="flex items-center justify-between mb-6">
        <Typography variant="h5" className="font-bold text-gray-800">
          My Todo List
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => dispatch(ADD_TODO("Learn Redux"))}
        >
          Add
        </Button>
      </Box>

      {/* Todo List */}
      {items.length > 0 ? (
        <ul className="space-y-3">
          {items.map((t) => (
            <li
              key={t.id}
              className="flex items-center justify-between border border-gray-200 px-4 py-3 hover:bg-gray-50 transition"
            >
              <div
                className={`flex-1 cursor-pointer ${
                  t.completed ? "line-through text-gray-400" : "text-gray-800"
                }`}
                onClick={() => dispatch(TOGGLE_TODO(t.id))}
              >
                {t.title}
              </div>

              <div className="flex gap-1 ml-4">
                {/* Edit button */}
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => alert(`Edit todo: ${t.title}`)}
                  className="hover:bg-green-500"
                >
                  <Edit fontSize="small" />
                </IconButton>

                {/* Delete button */}
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => dispatch(DELETE_TODO(t.id))}
                  disabled={loadingAction && currentActionId === t.id}
                  className="hover:bg-red-100"
                >
                  {loadingAction && currentActionId === t.id ? (
                    <CircularProgress size={18} color="error" />
                  ) : (
                    <Delete fontSize="small" />
                  )}
                </IconButton>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <Typography
          variant="body2"
          className="text-center text-gray-500 italic mt-8"
        >
          No todos yet — add one above!
        </Typography>
      )}
    </Paper>
  );
}
