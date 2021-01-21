import { Center, CalendarDatetimes, FormUser } from "./interfaces";

// Center

export const setCenter = (center: Center) => {
  localStorage.setItem("center", JSON.stringify(center));
};

export const getCenter = () => {
  const centerData = localStorage.getItem("center");

  if (!centerData) {
    return null;
  }

  try {
    const center = JSON.parse(centerData) as Center;
    return center;
  } catch (error) {
    console.error("getCenter", error);
    return null;
  }
};

export const clearCenter = () => {
  localStorage.removeItem("center");
};

// Available datetimes

export const setAvailableDatetimes = (dates: string) => {
  localStorage.setItem("availableDatetimes", dates);
  localStorage.setItem(
    "availableDatetimesDataStorage",
    new Date().toISOString(),
  );
};

export const getAvailableDatetimes = () => {
  const availableDatetimesData = localStorage.getItem("availableDatetimes");
  const availableDatetimesDataStorage = localStorage.getItem(
    "availableDatetimesDataStorage",
  );

  if (!availableDatetimesData || !availableDatetimesDataStorage) {
    return null;
  }

  const minutesOffset = 15;
  const updateDatetime = new Date(availableDatetimesDataStorage);
  updateDatetime.setMinutes(updateDatetime.getMinutes() + minutesOffset);

  if (new Date().toISOString() > updateDatetime.toISOString()) {
    return null;
  }

  try {
    const availableDatetimes = JSON.parse(
      availableDatetimesData,
    ) as CalendarDatetimes[];
    return availableDatetimes;
  } catch (error) {
    console.error("getAvailableDatetimes", error);
    return null;
  }
};

export const removeAvailableDatetimes = () => {
  localStorage.removeItem("availableDatetimes");
  localStorage.removeItem("availableDatetimesDataStorage");
};

// Date

export const setDate = (date: string) => {
  localStorage.setItem("date", date);
};

export const getDate = () => {
  const datTime = localStorage.getItem("date");
  return datTime;
};

// Time

export const setTime = (time: string) => {
  localStorage.setItem("time", time);
};

export const getTime = () => {
  const time = localStorage.getItem("time");
  return time;
};

// User

export const setUser = (user: string) => {
  localStorage.setItem("personalInfo", user);
};

export const getUser = () => {
  const personalInfoData = localStorage.getItem("personalInfo");

  if (!personalInfoData) {
    return null;
  }

  try {
    const personalInfo = JSON.parse(personalInfoData) as FormUser;
    return personalInfo;
  } catch (error) {
    console.error("getUser", error);
    return null;
  }
};

// Card

export const setCard = (digits: string) => {
  localStorage.setItem("card", digits);
};

export const getCard = () => {
  const card = localStorage.getItem("card");
  if (!card) {
    return null;
  }

  return card;
};

// Stripe token

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  return token;
};

// Payment type

export const setPaymentMethod = (type: "center" | "online") => {
  localStorage.setItem("paymentMethod", type);
};

export const getPaymentMethod = () => {
  const type = localStorage.getItem("paymentMethod");

  if (!type) {
    return null;
  }

  if (type !== "center" && type !== "online") {
    return null;
  }

  return type;
};

// Booking response

export const setBookingResponse = (booking: string) => {
  localStorage.setItem("booking", booking);
};

export const getBooking = () => {
  const booking = localStorage.getItem("booking");

  return booking;
};

// Clear data

export const clearData = () => {
  localStorage.clear();
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

// Payment Owner Card

export const setPaymentCardName = (name: string) => {
  localStorage.setItem("paymentCardName", name);
};

export const getPaymentCardName = () => {
  const paymentName = localStorage.getItem("paymentCardName");
  return paymentName;
};

// Team Member

export const setTeamMember = (member: string) => {
  localStorage.setItem("teamMember", member);
};

export const getTeamMember = () => {
  const member = localStorage.getItem("teamMember");
  return member;
};

// Query parameters

export const getQueryParams = () => {
  const q = localStorage.getItem("queryParams");
  const queries = JSON.parse(q || "{}");
  return queries;
};

export const clearQueryParams = () => {
  localStorage.removeItem("queryParams");
};

//Discount price

export const setPrice = (price: string) => {
  localStorage.setItem("price", price);
};

export const getPrice = () => {
  return localStorage.getItem("price");
};
export const setPriceWithDiscountOnline = (price: string) => {
  localStorage.setItem("priceWithDiscountOnline", price);
};

export const getPriceWithDiscountOnline = () => {
  return localStorage.getItem("priceWithDiscountOnline");
};

export const setPriceWithDiscountCenter = (price: string) => {
  localStorage.setItem("priceWithDiscountCenter", price);
};

export const getPriceWithDiscountCenter = () => {
  return localStorage.getItem("priceWithDiscountCenter");
};

export const setPercentageDiscount = (percent: string) => {
  return localStorage.setItem("percentageDiscount", percent);
};

export const getPercentageDiscount = () => {
  return localStorage.getItem("percentageDiscount");
};

// Coupon

export const setCouponCode = (code: string) => {
  localStorage.setItem("couponCode", code);
};

export const getCouponCode = () => {
  return localStorage.getItem("couponCode");
};

export const setOxxoPay = (pay: string) => {
  localStorage.setItem("oxxoPayResponse", pay);
};

export const getOxxoPay = () => {
  return localStorage.getItem("oxxoPayResponse");
};
