import { quanLyRapService } from "../../services/QuanLyRapService";
import { SET_HE_THONG_RAP_CHIEU } from "../contants/movie-booking";

export const layDanhSachHeThongRap = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();
      dispatch({
        type: SET_HE_THONG_RAP_CHIEU,
        data: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
