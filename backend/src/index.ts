import config from "./config";
import express from "express";
import Router from "./routes/index.routes";
import cors from "cors";
import path from "path";
import nodemailer from "nodemailer";

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
});

app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await transporter.sendMail({
      from: config.email.user,
      to: to,
      subject: subject,
      text: text,
    });
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    res.json(error);
  }
});

app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

app.get("/uploads/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, "../public/uploads", imageName);
  res.sendFile(imagePath, (err) => {
    if (err) {
      res.status(404).send("Image not found");
    }
  });
});

app.use(Router);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
