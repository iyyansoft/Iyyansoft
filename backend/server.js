const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Brevo SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "9cd200001@smtp-brevo.com",
    pass: "P5zBjghURSXvykC4"
  }
});

// API endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, phone, organization, service, message } = req.body;
  console.log("Received contact form data:", req.body);

  const mailOptions = {
    from: "9cd200001@smtp-brevo.com",        // Brevo-required FROM
    to: "iyyansoft@gmail.com",              // You receive the mail
    replyTo: email,                         // User's email → reply goes to user
    subject: `New Contact Form Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Organization: ${organization}
Service Required: ${service}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Email sending failed" });
  }
});

// Render port handling
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
