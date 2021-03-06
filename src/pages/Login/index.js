import React from "react";
import "./login.css";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../../redux/actions/quanLyNguoiDungAction";

function Login(props) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);

  console.log("userLogin", userLogin);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
      console.log("values", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i
                className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                style={{ color: "#709085" }}
              />
              <span className="h1 fw-bold mb-0">Cybersoft</span>
            </div>
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 justify-content-center">
              <div style={{ width: "40rem" }}>
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: 1 }}
                >
                  Log in
                </h3>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    // id="form2Example18"
                    className="form-control form-control-lg"
                    name="taiKhoan"
                    onChange={formik.handleChange}
                    placeholder="Nhập tài khoản"
                  />
                  <label className="form-label" htmlFor="form2Example18">
                    Tài khoản
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    // id="form2Example28"
                    className="form-control form-control-lg"
                    name="matKhau"
                    onChange={formik.handleChange}
                    placeholder="Nhập mật khẩu"
                  />
                  <label className="form-label" htmlFor="form2Example28">
                    Mật khẩu
                  </label>
                </div>
                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-info btn-lg btn-block"
                    type="submit"
                  >
                    Đăng nhập
                  </button>
                </div>
                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Quên mật khẩu?
                  </a>
                </p>
                <p>
                  Don't have an account?{" "}
                  <NavLink to="/register" className="link-info">
                    Đăng ký
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
