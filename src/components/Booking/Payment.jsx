/* eslint-disable react/prop-types */
import {
  useElements,
  useStripe
} from "@stripe/react-stripe-js"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PulseLoader } from "react-spinners"
import { useDateFormatting } from "../../hooks/useDateFormatting"

const Payment = ({ searchParamsObj }) => {
  const user = useSelector((state) => state.user.userDetails);
  const newReservationData = useSelector(
    (state) => state.reservations?.newReservationsData
  );
  const listingData = useSelector(
    (state) => state.house.listingDetails.listing
  );
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");
  //   geting the checkin and checkout dates
  const dateObj = {
    checkin: searchParamsObj?.checkin,
    checkout: searchParamsObj?.checkout,
  };

  //   dates
  const formattedDates = useDateFormatting(dateObj);
  //   reservation data
  const guestNumber = newReservationData
    ? newReservationData.guestNumber
    : searchParamsObj?.numberOfGuests;
  const checkin = newReservationData
    ? newReservationData?.checkIn
    : searchParamsObj.checkin;
  const checkout = newReservationData
    ? newReservationData?.checkOut
    : searchParamsObj?.checkout;
  const nightStaying = newReservationData
    ? newReservationData?.nightStaying
    : searchParamsObj?.nightStaying;
  const orderId = Math.round(Math.random() * 10000000000);

  // reservation form handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Для продолжение необходимо войти в аккаунт");

      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      if (!stripe || !elements) {
        return;
      }

      setIsProcessing(true);
      navigate(`/payment-confirmed?guestNumber=${guestNumber}&checkIn=${checkin}&checkOut=${checkout}&listingId=${listingData?._id}&authorId=${listingData?.author}&nightStaying=${nightStaying}&orderId=${orderId}`)
      // const { error } = await stripe.confirmPayment({
      //   elements,
      //   confirmParams: {
      //     return_url: `${window.location.origin}/payment-confirmed?guestNumber=${guestNumber}&checkIn=${checkin}&checkOut=${checkout}&listingId=${listingData?._id}&authorId=${listingData?.author}&nightStaying=${nightStaying}&orderId=${orderId}`,
      //   },
      // });

      // if (error) {
      //   setMessage(error.message);
      //   toast.error("Payment failed. Try again!");
      // }

      setIsProcessing(false);
    }
  };
  return (
    <div>
      {/* trips section */}
      <div className=" flex flex-col gap-6">
        <h5 className="text-xl md:text-[22px] text-[#222222] font-medium">
          Ваше путешествие
        </h5>
        {/* dates */}
        <div className=" flex flex-row justify-between">
          <span className="text-sm md:text-base text-[#222222]">
            <p className="font-medium">Даты</p>
            <p>{formattedDates}</p>
          </span>
          {/* guests */}
          <span className="text-sm md:text-base text-[#222222]">
            <p className="font-medium">Гости</p>
            <p>
              {guestNumber} {guestNumber === "1" ? "Гость" : "Гостей"}
            </p>
          </span>
        </div>
        {/* <hr className="w-full h-[1.3px] bg-[#dddddd] my-4" /> */}
        {/* payment element */}
        <form onSubmit={handleSubmit}>
          {/* <h5 className="text-xl md:text-[22px] text-[#222222] font-medium pb-4">
            Pay with
          </h5>
          <PaymentElement /> */}
          <div>
            <h5 className="text-xl md:text-[22px] text-[#222222] font-medium">
            Основные правила
            </h5>
            <p className="text-sm md:text-base text-[#222222] py-4">
            Мы просим каждого гостя помнить несколько простых вещей о том, что  делает гостя хорошим.
            </p>
            <ul className="text-sm md:text-base list-disc pl-5">
              <li>Соблюдайте правила внутреннего распорядка </li>
              <li>Относитесь к дому как к своему собственному</li>
            </ul>
          </div>
          <hr className="w-full h-[1.3px] bg-[#dddddd] my-10" />
          <p className="text-xs opacity-70">
          Выбирая кнопку ниже, я соглашаюсь с Правилами проживания, Основными правилами для гостей, а также с тем, что отель может списать средства с моего счета, если я несу ответственность за ущерб.
          </p>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full md:max-w-[180px] mt-7 px-5 py-3 rounded-md bg-[#ff385c] hover:bg-[#d90b63] transition duration-200 ease-in text-white font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 disabled:bg-gray-400 min-w-[180px]"
          >
            {isProcessing ? (
              <>
                <PulseLoader size={8} color="#000000" speedMultiplier={0.5} />
              </>
            ) : (
              "Забронировать"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
