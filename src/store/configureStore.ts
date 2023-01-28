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
    addToDo: (state, action: PayloadAction<ToDo>) => {
      console.log(action.payload);
      state.value = [...state.value, action.payload];
    },
    removeToDo: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((toDo) => toDo.id !== action.payload);
    },
  },
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<ToDo>) => {
      console.log(action.payload);
      state.value = [...state.value, action.payload];
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: { toDo: toDosSlice.reducer, user: userSlice.reducer },
});

export const { addToDo, removeToDo } = toDosSlice.actions;
export const { addUser, removeUser } = userSlice.actions;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
