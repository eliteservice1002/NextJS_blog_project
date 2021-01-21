import axios from "axios";

const PYTHON_BACKEND = "https://backend-py-dev.evacenter.dev";

export async function sendEmail({
  alias,
  to,
  subject,
  html,
}: {
  alias: string;
  to: string[];
  subject: string;
  html: string;
}) {
  await axios.post(`${PYTHON_BACKEND}/proxy-send-email-v2`, {
    email: {
      alias,
      from: "hola@evacenter.com",
      to,
      subject,
      html,
    },
  });
}
