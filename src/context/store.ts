import { configureStore } from "@reduxjs/toolkit";
import drumPadReducer from "./features/drum-pad-slice";

export const store = configureStore({
  reducer: {
    drumPad: drumPadReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch