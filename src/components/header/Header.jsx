import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCommentDots,
  faHeart,
  faShare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/authProvider";
import * as userServices from "../../services/user";
import * as authServices from "../../services/auth";
import { toast } from "react-toastify";
import OptionMenu from "../menu/OptionMenu";
import MenuCategory from "../menu/MenuCategory";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [user, setUser] = useState({});
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const notify = (message, type) => {
    const toastType = type === "success" ? toast.success : toast.error;
    return toastType(message);
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const accessToken =
        auth.accessToken ||
        JSON.parse(localStorage.getItem("access-token")).accessToken;
      const responseUser = await userServices.getcurrentuser(accessToken);
      console.log(responseUser);
      if (responseUser?.status === 200) {
        const userInfo = responseUser?.data;
        console.log(userInfo);
        setUser(userInfo);
        const newAuth = { ...auth, userInfo };
        localStorage.setItem("auth", JSON.stringify(newAuth));
        setIsLogin(true);
      }
      else {
        // Xóa accessToken trong localStorage nếu server không trả về status === 200
        localStorage.removeItem("access-token");
      }
    };
    console.log(localStorage.getItem("access-token"));
    localStorage.getItem("access-token") !== null && fetchCurrentUser();
  }, []);

  const handleLogout = async (e) => {
    const fetchLogout = await authServices.logOut();
    if (fetchLogout?.status === 200) {
      localStorage.removeItem("auth");
      localStorage.removeItem("refresh-token");
      localStorage.removeItem("access-token");
      navigate("/login", {
        state: {
          toastMessage: "Đăng Xuất Thành Công!",
          statusMessage: "success",
        },
      });
    } else {
      console.log(fetchLogout?.response);
      notify("Đăng Xuất Thất Bại!", "error");
    }
  };

  return (
    <header className="shadow">
      <nav
        className="mx-auto max-w-[1200px] border-gray-200 bg-white px-4 lg:px-6"
        onMouseEnter={() => setIsDropdown(false)}
      >
        <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between">
          <Link
            to="/"
            className="flex h-[80px] w-[120px] items-center overflow-hidden"
          >
            <img
              // src={require("../../../src/assets/images/logoTransparent.png")}
              src={require("../../../src/assets/images/logo.png")}
              className=""
              alt="SharedSpaceFinder Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            {/*not login*/}
            {isLogin ? (
              <div className="relative">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="inline-flex items-center rounded-lg px-5 py-2.5 text-center text-black hover:bg-gray-100 focus:outline-none"
                  type="button"
                  onMouseEnter={() => setIsDropdown(!isDropdown)}
                >
                  <span className="text-sm font-medium">
                    {user?.username || "Name User"}
                  </span>
                  <img
                    className="mx-3 h-[35px] w-[35px] rounded-full"
                    src={
                      user?.avatar ||
                      "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                    }
                    alt={user?.name || "customer"}
                  ></img>
                  <svg
                    className="ml-2.5 h-2.5 w-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/*<!-- Dropdown menu -->*/}
                <div
                  id="dropdown"
                  className={`${
                    !isDropdown ? "hidden" : "block"
                  } top-19 absolute -left-8 -right-8 z-10 mt-3 divide-gray-100 rounded-lg bg-white shadow transition-all`}
                  onMouseLeave={() => setIsDropdown(!isDropdown)}
                >
                  <ul className="px-2 py-2 text-sm font-semibold text-gray-700">
                    <li className="flex items-center rounded hover:bg-primaryColor hover:text-white">
                      <FontAwesomeIcon className="mx-3" icon={faUser} />
                      <Link to="/profile" className="block py-2 pr-4">
                        Thông tin cá nhân
                      </Link>
                    </li>
                    <li className="flex items-center rounded hover:bg-primaryColor hover:text-white">
                      <FontAwesomeIcon className="mx-3" icon={faHeart} />
                      <Link to="/favorite-space" className="block py-2 pr-4">
                        Yêu thích
                      </Link>
                    </li>
                    <li className="flex items-center rounded hover:bg-primaryColor hover:text-white">
                      <FontAwesomeIcon className="mx-3" icon={faShare} />
                      <Link to="/my-sharing" className="block py-2 pr-4">
                        Chia sẻ
                      </Link>
                    </li>
                    <li className="flex items-center rounded hover:bg-primaryColor hover:text-white">
                      <FontAwesomeIcon className="mx-3" icon={faCommentDots} />
                      <Link to="/feedback" className="block py-2 pr-4">
                        Đánh giá
                      </Link>
                    </li>
                    <li className="flex items-center rounded hover:bg-primaryColor hover:text-white">
                      <FontAwesomeIcon
                        className="mx-3"
                        icon={faArrowRightFromBracket}
                        rotation={180}
                      />
                      <button
                        className="block py-2 pr-4"
                        onClick={(e) => {
                          handleLogout(e);
                        }}
                      >
                        Đăng Xuất
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                {" "}
                <Link
                  to="/login"
                  className="mr-2 rounded-lg px-4 py-2 text-sm font-bold text-gray-800 transition-all hover:bg-gray-300 hover:text-primaryColor lg:px-5 lg:py-2.5 "
                >
                  Đăng Nhập
                </Link>
                <Link
                  to="/register"
                  className="mr-2 rounded-lg bg-primaryColor px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primaryColor/90 lg:px-5 lg:py-2.5"
                >
                  Đăng Ký
                </Link>
              </>
            )}

            {/* responsive menu*/}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none lg:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isCollapsed ? "hidden" : "block"
            }  w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
            id="mobile-menu-2"
            onMouseLeave={() => setIsCollapsed(!isCollapsed)}
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <Link
                  to="/"
                  className="block rounded-lg border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 transition-all hover:bg-primaryColor hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primaryColor"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/listmedicine"
                  className="block rounded-lg border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 transition-all hover:bg-primaryColor hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primaryColor"
                >
                  Danh Mục
                </Link>
              </li>
              <li>
                <Link
                  to="/spaces"
                  className="block rounded-lg border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 transition-all hover:bg-primaryColor hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primaryColor"
                >
                  Hệ thống nhà thuốc
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="mb-3 block rounded-lg border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 transition-all hover:bg-primaryColor hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primaryColor"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-center pt-8">
  <div className="mx-auto w-full flex-col items-center justify-center">
    <div className="relative mx-auto w-full flex justify-center lg:order-3 lg:w-1/2"> {/* Thêm justify-center vào đây */}
      <input
        type="text"
        placeholder="Tên thuốc, vitamin, thực phẩm chức năng"
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primaryColor focus:outline-none"
        style={{ maxWidth: "100%" }}
      />
    </div>
    <OptionMenu />
    <MenuCategory/>
  </div>
</div>

    </header>
  );
};

export default Header;
