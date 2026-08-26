// import { sendEmail } from "../utils/sendEmail.js";

// export const sendEmailController = async (req, res) => {
//   const { recipients } = req.body;

//   if (!recipients) {
//     return res.status(400).json({ error: "Please provide recipients" });
//   }

//   const recipientsList = recipients.split(",").map((email) => email.trim());

//   try {
//     for (const recipient of recipientsList) {
//       await sendEmail(recipient);
//     }
//     return res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return res.status(500).json({ error: "Failed to send email" });
//   }
// };


import { sendEmail } from "../utils/sendEmail.js";

export const sendEmailController = async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await sendEmail({
      name,
      email,
      subject,
      message,
    });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully",
    });
  } catch (error) {
    console.error("Email Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
};
