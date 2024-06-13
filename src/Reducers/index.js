import { combineReducers } from "redux";
import leads from "./Leads";
import errors from "./Errors";
import messages from "./Messages";
import auth from "./Auth";
import user from "./User";

export default combineReducers({
  leads,
  errors,
  messages,
  auth,
  user,
});
