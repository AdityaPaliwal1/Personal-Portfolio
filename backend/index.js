import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { sendEmail } from "./sendmail.js";
import path from "path";
import ejs from "ejs";

const app = express();
config({
  path: "./config/config.env",
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting the template engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.get("/", (req, res) => {
  res.send("Hello, I am live");
});

app.post("/sendmail", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const templatePath = path.join(
      process.cwd(),
      "views",
      "messageTemplate.ejs"
    );
    const messageTemplate = await ejs.renderFile(templatePath, {
      name,
      email,
      message,
    });

    let mailOptions = {
      to: process.env.MY_MAIL,
      from: `Aditya Paliwal Portfolio | New Message Posted`,
      subject: `New message from ${name}`,
      html: messageTemplate,
    };

    // sending the mail here
    await sendEmail(mailOptions);

    // sending the response
    res.status(200).json({
      success: true,
      message: "I got your message successfully.",
    });
  } catch (error) {
    console.error("Error sending mail:", error); // Log the entire error
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server live at http://localhost:${process.env.PORT}`);
});
