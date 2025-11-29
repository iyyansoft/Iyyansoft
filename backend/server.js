const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "iyyansoft@gmail.com",
    pass: "uvlhteoetiptvlwy"  
  }
});

// API endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, phone, organization, service, message } = req.body;
  console.log("Received contact form data:", req.body);

  const mailOptions = {
    from:'iyyansoft@gmail.com',
    to:'iyyansoft@gmail.com',
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
    console.log("Email sent successfully", mailOptions);
    res.status(200).json({ success: true, message: "Email send successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Email sending Failed" });
  }
});


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
