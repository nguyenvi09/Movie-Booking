import { combineReducers } from "redux";
import carouselReducer from "./carousel/carouselReducer";
import quanLyPhimReducer from "./quan-ly-phim/quanLyPhimReducer";
import quanLyRapReducer from "./quan-ly-rap/quanLyRapReducer";
const rootReducer = combineReducers({
  //chứa state ứng dụng
  carouselReducer,
  quanLyPhimReducer,
  quanLyRapReducer,
});

export default rootReducer;
