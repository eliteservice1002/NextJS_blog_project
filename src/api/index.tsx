import axios from "axios";

export default {
  auth: {
    token: () =>
      axios
        .post(
          "https://bdnoucke3e.execute-api.us-east-1.amazonaws.com/Prod/auth/token",
          {
            app: "booking-system",
            clientId: "FJhKobik8ya3Nd7K5OYnKO1nn5907gjk",
          },
        )
        .then((res) => res.data),
  },
  centers: {
    getCenters: (token: string) =>
      axios
        .get(
          ` https://bdnoucke3e.execute-api.us-east-1.amazonaws.com/Prod/centers-v2/get-many?kind=COMMERCIAL&active=true `,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        )
        .then((res) => res.data.centers),
  },
  calendar: {
    getTime: (filters, token: string) =>
      axios
        .get(
          `https://bdnoucke3e.execute-api.us-east-1.amazonaws.com/Prod/calendars/week`,
          {
            params: filters,
            headers: { Authorization: `Bearer ${token}` },
          },
        )
        .then((res) => res.data),
  },
};
