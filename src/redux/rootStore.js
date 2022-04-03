import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";

import rootEpic from "@/redux/rootEpic";
import rootReducer from "@/redux/rootReducer";

const epicMiddleware = createEpicMiddleware();
const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools({ trace: true })(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
