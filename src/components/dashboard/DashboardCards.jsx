/* eslint-disable react/prop-types */
import booking from "../../assets/basicIcon/booking.png"
import revenueIcon from "../../assets/basicIcon/dollar.png"
import categories from "../../assets/basicIcon/travel.png"
import house from "../../assets/basicIcon/wallet.png"
import Cards from "../../components/dashboard/Cards"

const DashboardCards = ({ reservations, totalPrice }) => {
  // calculate total booking
  const currentDate = new Date(); // Get the current date and time

  const activeBookingReservations = reservations?.filter((obj) => {
    const checkOutDate = new Date(obj.checkOut);
    return checkOutDate > currentDate;
  });

  const activeBooking = activeBookingReservations.length;

  // calculate authors hosted house
  const hostedHouse = reservations?.length;

  // calculate monthly price
  function calculateMonthlyEarnings(obj, currentDate) {
    const checkInDate = new Date(obj.checkIn);
    const checkOutDate = new Date(obj.checkOut);

    // Check if both checkIn and checkOut dates are within the current month
    if (
      checkInDate.getFullYear() === currentDate.getFullYear() &&
      checkInDate.getMonth() === currentDate.getMonth() &&
      checkOutDate.getFullYear() === currentDate.getFullYear() &&
      checkOutDate.getMonth() === currentDate.getMonth()
    ) {
      // Calculate the number of days between checkIn and checkOut
      const numberOfDays = Math.ceil(
        (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
      );

      // Calculate the total price for the object for the current month
      const totalPrice = numberOfDays + obj.authorEarnedPrice;

      return totalPrice;
    }

    return 0; // Return 0 for objects outside the current month
  }

  const currentDates = new Date(); // Get the current date

  const totalMonthlyEarnings = reservations?.reduce(
    (accumulator, currentObject) => {
      const objectMonthlyEarnings = calculateMonthlyEarnings(
        currentObject,
        currentDates
      );
      return accumulator + objectMonthlyEarnings;
    },
    0
  );

  // // console.log(reservations, "reservations data");
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
      <Cards
        title={"Общая выручка"}
        icon={revenueIcon}
        heading={`${totalPrice}`}
      />
      <Cards
        title={"Активных бронирований"}
        icon={booking}
        heading={`+${activeBooking}`}
      />
      <Cards
        title={"Всего домов"}
        icon={house}
        heading={`+${hostedHouse}`}
      />
      <Cards
        title={"Ежемесячный заработок"}
        icon={categories}
        heading={`+${totalMonthlyEarnings}`}
      />
    </div>
  );
};

export default DashboardCards;
