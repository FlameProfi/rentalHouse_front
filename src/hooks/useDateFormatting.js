import { useEffect, useState } from "react"

const monthNames = [
    { id: 1, label: "Январь" },
    { id: 2, label: "Февраль" },
    { id: 3, label: "Март" },
    { id: 4, label: "Апрель" },
    { id: 5, label: "Май" },
    { id: 6, label: "Июнь" },
    { id: 7, label: "Июль" },
    { id: 8, label: "Август" },
    { id: 9, label: "Сентябрь" },
    { id: 10, label: "Октябрь" },
    { id: 11, label: "Ноябрь" },
    { id: 12, label: "Декабрь" },
];

const formatDate = (date) => {
    const d = new Date(date);
    const month = monthNames[d.getMonth()].label;
    const day = d.getDate();
    return `${month} ${day}`;
};

const getYear = (date) => {
    const d = new Date(date);
    return d.getFullYear();
}

const getMonth = (date) => {
    const d = new Date(date);
    return d.getMonth();
}

export const useDateFormatting = (dateObj) => {
    const [formattedDates, setFormattedDates] = useState("");

    useEffect(() => {
        if (dateObj.checkin && dateObj.checkout) {
            const checkin = formatDate(dateObj.checkin);
            const checkout = formatDate(dateObj.checkout);

            const checkinMonth = getMonth(dateObj.checkin)
            const checkoutMonth = getMonth(dateObj.checkout)

            const checkinYear = getYear(dateObj.checkin)
            const checkOutYear = getYear(dateObj.checkout)

            if (dateObj.checkin !== dateObj.checkout) {
                if (checkinMonth !== checkoutMonth && checkinYear === checkOutYear) {
                    return setFormattedDates(`${checkin} - ${checkout}, ${checkinYear}`);
                }
                if (checkinYear !== checkOutYear) {
                    return setFormattedDates(`${checkin}, ${checkinYear} - ${checkout}, ${checkOutYear}`);
                }
                setFormattedDates(`${checkin} - ${checkout}`);
            } else {
                setFormattedDates(checkin);
            }
        }
    }, [dateObj]);

    return formattedDates;
};
