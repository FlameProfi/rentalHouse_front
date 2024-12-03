import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import hamburgerMenu from "../../assets/basicIcon/hamburgerMenu.svg"
import house from "../../assets/basicIcon/houseWhite.png"
import userProfile from "../../assets/basicIcon/user-profile.png"
import { getUser, userLogOut } from "../../redux/actions/userActions"
import AuthenticationPopUp from "../popUp/authentication/AuthenticationPopUp"
import MiniNavbar from "./DashboardMenu"

const Navbar = () => {
  const user = useSelector((state) => state.user.userDetails);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const userMenuRef = useRef(null);
  const location = useLocation();
  const pathName = location.pathname;
  const inUserProfile = pathName?.includes("/users/show/");
  const inUserDashboard = pathName?.includes("/users/dashboard/");
  const inHostHomesLandingPage = pathName?.includes("/host/homes");
  const inListingDetailsPage = pathName?.includes("/listing");
  const inBookingPage = pathName?.includes("/book/stays");
  const isSmallDevice = window.innerWidth < 768;

  const [popup, setPopup] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogOut());
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mouseup", handleOutsideClick);
    return () => {
      document.removeEventListener("mouseup", handleOutsideClick);
    };
  }, []);

  const isUserExist = () => {
    if (!user) {
      toast.error("Для продолжение необходимо войти в аккаунт!");

      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      navigate("/become-a-host");
    }
  };

  return (
    <nav
      className={`border-b-[1.4px] border-[#f1f1f1] sticky top-0 z-[99] bg-white ${
        inBookingPage && "hidden md:block"
      }`}
    >
      <div
        className={`xl:px-10 py-4 xl:mx-auto items-center px-5 relative ${
          inUserProfile ||
          inUserDashboard ||
          inHostHomesLandingPage ||
          inListingDetailsPage
            ? " max-w-screen-xl"
            : " max-w-screen-2xl"
        }
        ${
          inUserDashboard || inHostHomesLandingPage
            ? "flex flex-row justify-between"
            : "grid grid-cols-2 lg:grid-cols-3 gap-2"
        }
        ${inHostHomesLandingPage ? " xl:px-20" : ""}
        `}
      >
        {/* logo */}
        <div className=" md:w-[160px]">
          <span className="flex flex-row gap-2 items-center max-w-[120px]">
            Firsovhouse
          </span>
        </div>
        {inBookingPage ? (
          <div> </div>
        ) : (
          <>
            {/* searchbar */}
            {inUserProfile || inUserDashboard || inHostHomesLandingPage ? (
              // if user is in dahsboard
              <div>{inUserDashboard && <MiniNavbar />} </div>
            ) : (
              <div className="mx-auto lg:block hidden"></div>
            )}
          </>
        )}
        {/* if in the booking page don't show any option 👇  */}
        {inBookingPage ? (
          <div> </div>
        ) : (
          <>
            {/* if user is in the hosting house landing page we want to show different button */}
            {inHostHomesLandingPage ? (
              <div className=" flex flex-row items-center justify-between gap-4">
                <p className=" text-[#222222] text-sm font-medium hidden sm:block">
                  Ready to Motel it?
                </p>
                <div
                  onClick={() => {
                    isUserExist();
                  }}
                  className=" flex flex-row justify-between items-center gap-2 bg-[#ff385c] hover:bg-[#d90b63] transition-all duration-300 px-3 py-2 rounded-lg"
                >
                  <img src={house} alt="House setup" className=" w-4 md:w-5" />
                  <p className=" font-semibold text-sm md:text-base text-white">
                    Motel setup
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* user bar */}
                <div className="flex justify-end items-center">
                  {!inUserDashboard && (
                    <Link
                      to="/host/homes"
                      className=" bg-[#ffffff] hover:bg-[#f0f0f0] transition-all rounded-full p-3 cursor-pointer mr-3 md:block hidden"
                    >
                    </Link>
                  )}

                  <div
                    className="border-[1px] border-[#dddddd] rounded-full py-1 px-2 flex flex-row gap-3 hover:shadow-md transition-all cursor-pointer relative"
                    onClick={() => {
                      setShowUserMenu((prevValue) => !prevValue);
                    }}
                  >
                    <img
                      src={hamburgerMenu}
                      alt="Motel user menu"
                      className="w-4"
                    />
                    {user ? (
                      <p className=" bg-[#222222] text-[#efefef] px-3 py-2 rounded-full text-xs">
                        {user.name?.firstName?.slice(0, 1)}
                      </p>
                    ) : (
                      <img
                        src={userProfile}
                        alt="user profile icon"
                        className="w-8"
                      />
                    )}
                  </div>

                  {/* menu items code  */}

                  {showUserMenu ? (
                    <>
                      {!user ? (
                        <div
                          ref={userMenuRef}
                          className="shadow-md absolute right-9 top-[74px] bg-[#ffffff] border-[1px] border-[#dddddd] rounded-lg flex flex-col py-2 w-[230px] transition-all user__menu"
                        >
                          <Link
                            className="font-medium"
                            onClick={() => {
                              setShowUserMenu(false);
                              setPopup(true);
                            }}
                          >
                            Зарегистрироваться
                          </Link>
                          <Link
                            onClick={() => {
                              setShowUserMenu(false);
                              setPopup(true);
                            }}
                          >
                            Вход в систему
                          </Link>
                        </div>
                      ) : (
                        // logged in user menu
                        <div
                          ref={userMenuRef}
                          className="shadow-md absolute right-9 top-[70px] bg-[#ffffff] border-[1px] border-[#dddddd] rounded-lg flex flex-col py-2 w-[230px] transition-all user__menu"
                          onClick={() => {
                            setShowUserMenu((prev) => !prev);
                          }}
                        >
                          {user?.role === "host" || user?.role === "admin" ? (
                            <>
                              {!inUserDashboard ? (
                                <Link
                                  to={`/users/dashboard/${user._id}/overview=true`}
                                  onClick={() => {
                                    JSON.stringify(
                                      sessionStorage.setItem("activePage", 1)
                                    );
                                  }}
                                  className="font-medium"
                                >
                                  Панель
                                </Link>
                              ) : (
                                <Link className="font-medium" to={"/"}>
                                  Домой
                                </Link>
                              )}
                            </>
                          ) : (
                            <Link className="font-medium">Уведомления</Link>
                          )}
                          <Link className="font-medium" to={"/home"}>Дома</Link>
                          <hr className="h-[1.5px] bg-[#dddddd] my-1" />
                          {/* <Link to={"/host/homes"}>Motel your home</Link> */}
                          <Link to={`/users/show/${user._id}`}>Аккаунт</Link>
                          <hr className="h-[1.5px] bg-[#dddddd] my-1" />
                          <Link>Помощь</Link>
                          <Link
                            onClick={() => {
                              handleLogout();
                            }}
                          >
                            Выйти
                          </Link>
                        </div>
                      )}
                    </>
                  ) : null}
                </div>
              </>
            )}
          </>
        )}
      </div>
      <AuthenticationPopUp popup={popup} setPopup={setPopup} />
    </nav>
  );
};

export default Navbar;
