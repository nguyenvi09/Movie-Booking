import { combineReducers } from "redux";
import carouselReducer from "./carousel/carouselReducer";
import listMovieReducer from "./list-movie/listMovieReducer";
const rootReducer = combineReducers({
  //chứa state ứng dụng
  carouselReducer,
  listMovieReducer,
});

export default rootReducer;
