import { combineEpics } from "redux-observable";

import AccountEpic from "@/redux/Account/epic";
const rootEpic = combineEpics(AccountEpic);

export default rootEpic;
