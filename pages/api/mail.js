const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  console.log(body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "krzysztof.bialek1@gmail.com",
    from: "krzysztof.bialek1@gmail.com",
    subject: `Wiadomość od ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  await mail.send(data);

  res.status(200).json({ status: "ok" });
}
