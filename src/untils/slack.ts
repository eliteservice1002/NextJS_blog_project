import axios from "axios";

const BASE_SLACK_URL =
  process.env.GATSBY_SLACK_CHANNEL ||
  "https://hooks.slack.com/services/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";

const BASE_SLACK_URL_INSURANCE =
  process.env.GATSBY_SLACK_INSURANCE_CHANNEL ||
  "https://hooks.slack.com/services/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";

const headers = {
  "Content-type": "application/x-www-form-urlencoded",
};

export const newUserInBookings = async () => {
  const text = ":iphone: New user in Bookings";
  try {
    return await axios.post(`${BASE_SLACK_URL}`, { text }, { headers });
  } catch (error) {
    console.error(error);
  }
};

export const errorLogForPages = async (page: string, error: string) => {
  const text = `:rotating_light: Error in ${page}: ${error}`;
  try {
    return await axios.post(`${BASE_SLACK_URL}`, { text }, { headers });
  } catch (error) {
    console.error(error);
  }
};

export const creatingBooking = async () => {
  const text = ":admission_tickets: Creating booking...";
  try {
    return await axios.post(`${BASE_SLACK_URL}`, { text }, { headers });
  } catch (error) {
    console.error(error);
  }
};

export const newBookingCreated = async () => {
  const text = ":white_check_mark: Booking created";
  try {
    return await axios.post(`${BASE_SLACK_URL}`, { text }, { headers });
  } catch (error) {
    console.error(error);
  }
};

export const sendSlackMessage = async (potentialUser, type: string) => {
  let text = "";

  if (type === "conversation") {
    text = `*Nueva conversación :slack_call:*
  ---
  ${potentialUser.firstName} ${potentialUser.lastName}
  *Email:* ${potentialUser.email}
  *Cel:* ${potentialUser.cellphone}
  *Subject*: ${potentialUser.extraInfo.insurance.subject}
  ---`;
  } else {
    text = `*Nueva Compra de Seguro :muscle:*
  ---
  ${potentialUser.firstName} ${potentialUser.lastName}
  *Email:* ${potentialUser.email}
  *Cel:* ${potentialUser.cellphone}
  ---`;
  }
  return await axios.post(`${BASE_SLACK_URL_INSURANCE}`, { text }, { headers });
};
