import { combineReducers } from "redux";
import catsReducer from './catsReducer';
import sendCatsReducer from "./sendCatsReducer";


export default combineReducers({
    cats: catsReducer,
    sendCats: sendCatsReducer
});