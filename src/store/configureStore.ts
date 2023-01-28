import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToDo {
  id: number;
  toDo: string;
  date: string;
}
interface ToDosState {
  value: ToDo[];
}

const initialState: ToDosState = {
  value: [],
};

const toDosSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ToDo>) => {
      state.value = [...state.value, action.payload];
    },
    delete: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: toDosSlice.reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
