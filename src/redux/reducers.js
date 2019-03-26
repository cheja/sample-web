import { combineReducers } from 'redux'
import user from "./reducers/user";

const app = combineReducers({
  user
});

export default app;
