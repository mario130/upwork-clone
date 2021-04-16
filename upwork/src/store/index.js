import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { jobPostReducer } from "./reducers/jobPostReducer";

const rootReducer = combineReducers({
    jobPost:jobPostReducer
})
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  export default store