// import express from "express";
// import { sendEmailController } from "../controller/emailController.js";

// const route = express.Router();

// route.post("/send-email", sendEmailController);

// export default route;



import express from "express";
import { sendPortfolioEmails } from "../utils/emailTemplate.js";
// import { sendPortfolioEmails } from "../services/emailService.js";

const route = express.Router();

route.post("/send-email", async (req, res) => {
  try {
    console.log("========== EMAIL REQUEST ==========");
    console.log({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      messageLength: req.body.message?.length,
    });

    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Basic email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    const result = await sendPortfolioEmails({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    console.log("Emails sent successfully:", result);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      data: result,
    });

  } catch (error) {

    console.error("========== EMAIL ERROR ==========");
    console.error(error);
    console.error("Message:", error.message);
    console.error("=================================");

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error:
        process.env.NODE_ENV === "production"
          ? undefined
          : error.message,
    });
  }
});

export default route;