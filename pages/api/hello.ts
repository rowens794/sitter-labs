// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const transport = createTransport({
    //@ts-ignore
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: true, // use TLS
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const result = await transport.sendMail({
    to: "rowens794@gmail.com",
    from: "ryan@webpagesthatconvert.com",
    subject: `Sign in to`,
    text: "hello",
    html: "hello",
  });

  res.status(200).json({ name: "John Doe" });
}
