/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import errorIcon from "../../../assets/basicIcon/errorIcon.png";
import { API } from "../../../backend";
import { userSignUp } from "../../../redux/actions/userActions";

const CreateUserPopup = ({
  loginEmail,
  setProfilePopup,
  showCreatePopUp,
  setPopup,
}) => {
  const [inputDateFocused, setInputDateFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleDateFocus = () => {
    setInputDateFocused(true);
  };

  const handleDateBlur = () => {
    setInputDateFocused(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleCreateUser = async (data) => {
    // // console.log(data);
    let user = {
      name: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      emailId: data.email,
      birthDate: data.birthDate,
      password: data.password,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(`${API}auth/sign_up`, user, {
        headers: { "Content-Type": "application/json" },
      });

      // // console.log(response);
      const responseData = response?.data;
      dispatch(userSignUp(responseData));
      let accessToken = localStorage.getItem("accessToken");
      let refreshToken = localStorage.getItem("refreshToken");
      if (responseData?.success === 1) {
        // // console.log(refreshToken);
        toast.success(responseData.info);
        if (!accessToken) {
          localStorage.setItem(
            "accessToken",
            JSON.stringify(responseData?.accessToken)
          );
        } else if (accessToken) {
          accessToken = responseData?.accessToken;
          localStorage.setItem("accessToken", JSON.stringify(accessToken));
        }
        if (!refreshToken) {
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(responseData?.refreshToken)
          );
        } else if (refreshToken) {
          refreshToken = responseData?.refreshToken;
          // // console.log(refreshToken);
          localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
        }
        showCreatePopUp(false);
        setPopup(false);
        setTimeout(() => {
          setProfilePopup(true);
          setPopup(true);
        }, 3000);
      }
      setTimeout(() => {
        reset();
      }, 100);
    } catch (error) {
      // // console.log(error);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      toast.error("Network error try again later!");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 py-6">
      <form
        onSubmit={handleSubmit(handleCreateUser)}
        className="px-8 flex flex-col gap-6"
      >
        <div className=" flex flex-col gap-3">
          <input
            type="text"
            className="w-full border-[1.4px] border-[#dddddd] p-3 rounded-lg"
            placeholder="Имя"
            {...register("firstName", { required: true, maxLength: 40 })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          <input
            type="text"
            className="w-full border-[1.4px] border-[#dddddd] p-3 rounded-lg"
            placeholder="Фамилия"
            {...register("lastName", { required: true, maxLength: 40 })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" &&
            errors.lastName?.type === "required" && (
              <div
                role="alert"
                className=" flex flex-row items-center gap-2 -mt-2"
              >
                <img
                  src={errorIcon}
                  alt="First name is requires"
                  className="w-5"
                />
                <p className="text-xs text-[#c13515]">Имя обязательно</p>
              </div>
            )}
          <p
            className={` text-xs text-[#717171] -mt-2 ${
              errors.firstName || errors.lastName ? " hidden" : "block"
            }`}
          >
            Убедитесь, что оно совпадает с именем, указанным в вашем государственном удостоверении личности.
          </p>
        </div>
        <div>
          <input
            className="w-full border-[1.4px] border-[#dddddd] p-3 rounded-lg"
            type={`${inputDateFocused ? "date" : "text"}`}
            aria-invalid={errors.birthDate ? "true" : "false"}
            placeholder="Дата рождения"
            onFocus={handleDateFocus}
            onBlur={handleDateBlur}
            {...register("birthDate", {
              required: true,
              onBlur: handleDateBlur,
            })}
          />
          {errors.birthDate?.type === "required" && (
            <div
              role="alert"
              className=" flex flex-row items-center gap-2 mt-1"
            >
              <img
                src={errorIcon}
                alt="Last name is requires"
                className="w-5"
              />
              <p className="text-xs text-[#c13515]">Дата рождения обязательна</p>
            </div>
          )}
          <p
            className={`text-xs text-[#717171] mt-[6px] ${
              errors.birthDate ? "hidden" : "block"
            }`}
          >
            Чтобы зарегистрироваться, вам должно быть не менее 18 лет.
          </p>
        </div>
        <div>
          <input
            className="w-full border-[1.4px] border-[#dddddd] p-3 rounded-lg"
            type="email"
            defaultValue={loginEmail}
            placeholder="Электронная почта"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <div
              role="alert"
              className=" flex flex-row items-center gap-2 mt-1"
            >
              <img
                src={errorIcon}
                alt="Last name is requires"
                className="w-5"
              />
              <p className="text-xs text-[#c13515]">Электронная почта обязательна</p>
            </div>
          )}
          <p
            className={`text-xs text-[#717171] mt-1 ${
              errors.email ? "hidden" : "block"
            }`}
          >
            Мы отправим подтверждение по электронной почте.
          </p>
        </div>
        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Пароль"
            className="w-full border-[1.5px] border-[#dddddd] p-3 rounded-lg transition-all duration-300"
            {...register("password", {
              required: true,
              pattern: /^(?=.*[a-z]).{8,}$/,
            })}
          />
          <span
            className="absolute top-[36%] right-3 transform -translate-y-1/2 text-[#222222] text-xs font-semibold underline cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? "Hide" : "Show"}
          </span>
          {errors.password && (
            <div
              role="alert"
              className=" flex flex-row items-center gap-2 mt-1"
            >
              <img
                src={errorIcon}
                alt="Last name is requires"
                className="w-5"
              />
              <p className="text-xs text-[#c13515]">
              Не менее 8 символов & Содержит число или символ
              </p>
            </div>
          )}
          <p
            className={`text-xs text-[#717171] mt-1 ${
              errors.password ? "hidden" : "block opacity-60"
            }`}
          >
            Не менее 8 символов & Содержит число или символ
          </p>
        </div>
        <div>
          <span className=" text-[#717171] text-xs font-medium">
          Выбирая{" "}
            <span className="font-semibold text-[#222222]">
              {" "}
              Согласие и продолжение
            </span>
            , я соглашаюсь с
            <Link className=" text-blue-600 underline font-medium">
              {" "}
              Условиями службы поддержки, условиями платежей, и
            </Link>{" "}
            политикой отказа от рекламы и подтверждаю, что подтвердил
            политику конфиденциальности.
          </span>
        </div>
        <div className=" flex flex-row items-center gap-5">
          <input type="checkbox" className="h-5 w-5" />
          <p className=" text-xs">
            Я не хочу получать рекламу.
          </p>
        </div>
        <div>
          <button
            className={`bg-[#ff385c] hover:bg-[#d90b63] transition-all duration-300 text-white font-medium rounded-lg p-3 w-full disabled:bg-[#dddddd] ${
              isLoading ? " cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <PulseLoader
                color="#f7f7f7"
                size={7}
                margin={4}
                speedMultiplier={0.6}
              />
            ) : (
              "Согласие и продолжение"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserPopup;
