import axios from "axios";

import {
  CenterFilters,
  GetCentersResponse,
  GetCalendarResponse,
  GetCenterResponse,
  PostUserBookingResponse,
  ValidateCouponResponse,
  UserBooking,
} from "./interfaces";

const BASE_URL = "https://bdnoucke3e.execute-api.us-east-1.amazonaws.com/Prod";

export const generateToken = async () => {
  const { data } = await axios.post(`${BASE_URL}/auth/token`, {
    app: "booking-system",
    clientId:
      process.env.GATSBY_EVA_CLIENT_ID || "FJhKobik8ya3Nd7K5OYnKO1nn5907gjk",
  });
  localStorage.setItem("authToken", data.access_token);
  return data.access_token as string;
};

export const getCenters = async (filters?: CenterFilters) => {
  const token = localStorage.getItem("authToken");
  let FILTERS = "?";

  if (filters) {
    if (filters.kind) {
      FILTERS = `${FILTERS}kind=${filters.kind}`;
    }

    if (filters.active) {
      FILTERS = `${FILTERS}&active=${filters.active}`;
    }

    if (filters.state) {
      FILTERS = `${FILTERS}&state=${filters.state}`;
    }
  }

  let url = `${BASE_URL}/centers-v2/get-many`;

  if (FILTERS.length > 1) {
    url = `${url}${FILTERS}`;
  }

  return (await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) as GetCentersResponse;
};

export const getCenterBySlugName = async (slugName: string) => {
  const token = localStorage.getItem("authToken");
  return (await axios.get(
    `${BASE_URL}/centers-v2/get-by-slug-name?slugName=${slugName}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )) as GetCenterResponse;
};

export const getCalendar = async (date: string, calendarId: string) => {
  const token = localStorage.getItem("authToken");
  return (await axios.get(
    `${BASE_URL}/calendars/week?date=${date}&id=${calendarId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )) as GetCalendarResponse;
};

export const sendBooking = async (data: UserBooking) => {
  const token = localStorage.getItem("authToken");
  try {
    return (await axios.post(
      `${BASE_URL}/bookings-v2/create`,
      {
        booking: data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )) as PostUserBookingResponse;
  } catch (e) {
    if (e.response.status === 498) {
      await generateToken();
      // Potential harmful recursion
      return await sendBooking(data);
    } else {
      throw e;
    }
  }
};

export const validateCoupon = async (code: string) => {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.get(
      `${BASE_URL}/coupons-v1/validate?code=${code}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response as ValidateCouponResponse;
  } catch (e) {
    if (e.response.status === 498) {
      await generateToken();
      // Potential harmful recursion
      return await validateCoupon(code);
    } else {
      throw e;
    }
  }
};

export const generateTokenCheckoutMembership = async () => {
  const { data } = await await axios.post(`${BASE_URL}/auth/token`, {
    app: "potential-users",
    clientId: "dGKf7oA9R20JVOHA67VUauF9dcVK3PE7",
  });
  return data;
};

export const checkoutMembershipStep1 = async (dat, tokenAuth) => {
  const { data } = await axios.post(
    `${BASE_URL}/memberships-v1/create/card/website/step-1`,
    dat,
    {
      headers: {
        Authorization: `Bearer ${tokenAuth}`,
      },
    },
  );
  return data;
};

export const checkoutMembershipStep2 = async (dat, tokenAuth) => {
  const { data } = await axios.post(
    `${BASE_URL}/memberships-v1/create/card/website/step-2`,
    dat,
    {
      headers: {
        Authorization: `Bearer ${tokenAuth}`,
      },
    },
  );
  return data;
};

export const checkoutMembershipOxxo = async (dat, tokenAuth) => {
  const { data } = await axios.post(
    `${BASE_URL}/memberships-v1/create/cash/oxxo`,
    dat,
    {
      headers: {
        Authorization: `Bearer ${tokenAuth}`,
      },
    },
  );
  return data;
};
