import { sendEmail } from "../../utils/sendEmail";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email } = req.body;
    await sendEmail({ name, email, message });
    return res.status(200).end();
  }
  return res.status(404).json({
    error: {
      code: "not_found",
      messgae:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};

// const mail = require("@sendgrid/mail");

// mail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function handler(req, res) {
//   const body = JSON.parse(req.body);

//   const message = `
//     Name: ${body.name}\r\n
//     Email: ${body.email}\r\n
//     Message: ${body.message}
//   `;

//   const data = {
//     to: "krzysztof.bialek1@gmail.com",
//     from: "krzysztof.bialek1@gmail.com",
//     subject: `Wiadomość od ${body.name}`,
//     text: message,
//     html: message.replace(/\r\n/g, "<br>"),
//   };

//   await mail.send(data);

//   res.status(200).json({ status: "ok" });
// }
