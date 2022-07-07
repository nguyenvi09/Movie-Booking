import { combineReducers } from "redux";
import carouselReducer from "./carousel/carouselReducer";
import quanLyPhimReducer from "./quan-ly-phim/quanLyPhimReducer";
const rootReducer = combineReducers({
  //chứa state ứng dụng
  carouselReducer,
  quanLyPhimReducer,
});

export default rootReducer;
