/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const yAxisData = (value) => `$${value}`;

const Charts = ({ reservations }) => {
  const [monthlyEarnings, setMonthlyEarnings] = useState(Array(12)?.fill(0));

  // useEffect(() => {
  //   reservations?.forEach((obj) => {
  //     const checkInDate = new Date(obj.checkIn);
  //     const month = checkInDate.getMonth(); // Get the month (0-11)

  //     // Accumulate earnings for the month
  //     const updatedEarnings = [...monthlyEarnings];
  //     updatedEarnings[month] += obj.authorEarnedPrice;
  //     setMonthlyEarnings(updatedEarnings);
  //   });
  // }, [reservations]);

  useEffect(() => {
    if (reservations) {
      const currentYear = new Date().getFullYear();
      const filteredReservations = reservations.filter((obj) => {
        const checkInDate = new Date(obj.checkIn);
        return checkInDate.getFullYear() === currentYear;
      });

      const updatedEarnings = Array(12).fill(0);

      filteredReservations.forEach((obj) => {
        const checkInDate = new Date(obj.checkIn);
        const month = checkInDate.getMonth();
        updatedEarnings[month] += obj.authorEarnedPrice;
      });

      setMonthlyEarnings(updatedEarnings);
    }
  }, [reservations]);

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const resultArray = months.map((month, index) => ({
    name: month,
    earned: monthlyEarnings[index],
  }));

  return (
    <ResponsiveContainer width={"100%"}>
      <BarChart
        // width={400}
        // height={300}
        data={resultArray}
        // margin={{ top: 20,, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={yAxisData} />
        <Tooltip />
        <Bar dataKey="earned" fill="#ff3f62ff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
