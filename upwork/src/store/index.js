import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { jobPostReducer } from "./reducers/jobPostReducer";
import { userReducer } from "./reducers/userReducer"

const rootReducer = combineReducers({
    jobPost:jobPostReducer,
    user: userReducer
})
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  export default store