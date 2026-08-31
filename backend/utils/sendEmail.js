// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// import { EmailMessageTemplate } from "./emailTemplate.js";

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export const sendEmail = async (sendTo) => {
//   try {
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: sendTo,
//       subject: "Welcome to Our Service!",
//       html: EmailMessageTemplate(),
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.response);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// import { EmailMessageTemplate } from "./emailTemplate.js";

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export const sendEmail = async ({
//   name,
//   email,
//   subject,
//   message,
// }) => {
//   try {
//     const mailOptions = {
//       from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,

//       // Send the portfolio message to your own email
//       to: process.env.EMAIL_USER,

//       // When you click Reply, it will reply to the visitor
//       replyTo: email,

//       subject: subject || "New Portfolio Contact Message",

//       html: EmailMessageTemplate({
//         name,
//         email,
//         subject,
//         message,
//       }),
//     };

//     const info = await transporter.sendMail(mailOptions);

//     console.log("Email sent successfully:", info.response);

//     return info;
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error("Failed to send email");
//   }
// };





// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// import { EmailMessageTemplate } from "./emailTemplate.js";

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export const sendEmail = async ({
//   name,
//   email,
//   subject,
//   message,
// }) => {
//   try {
//     // 1. Send contact message to you
//     const portfolioEmail = {
//       from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       replyTo: email,
//       subject: subject || "New Portfolio Contact Message",
//       html: EmailMessageTemplate({
//         name,
//         email,
//         subject,
//         message,
//       }),
//     };

//     // 2. Automatically send thank-you email to visitor
//     const thankYouEmail = {
//       from: `"Vaibhav Parab" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Thank You for Visiting My Portfolio!",
//       html: `
//         <div style="
//           font-family: Arial, sans-serif;
//           max-width: 600px;
//           margin: auto;
//           padding: 30px;
//           background: #f8fafc;
//           border-radius: 10px;
//         ">
//           <h2 style="color: #2563eb;">
//             Thank You, ${name}! 🚀
//           </h2>
//           <p>
//             I have received your message and will get back to you as soon as possible.
//           </p>

//           <br />

//           <p>
//             Best Regards,<br />
//             <strong>Vaibhav Parab</strong>
//           </p>
//         </div>
//       `,
//     };

//     await Promise.all([
//       transporter.sendMail(portfolioEmail),
//       transporter.sendMail(thankYouEmail),
//     ]);

//     console.log("Contact and thank-you emails sent successfully");

//     return {
//       success: true,
//       message: "Emails sent successfully",
//     };
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error("Failed to send email");
//   }
// };




// import nodemailer from "nodemailer";
// import { EmailMessageTemplate } from "./emailTemplate.js";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export const sendEmail = async ({
//   name,
//   email,
//   subject,
//   message,
// }) => {
//   try {
//     console.log("EMAIL_USER:", process.env.EMAIL_USER);
//     console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

//     // Verify SMTP connection
//     await transporter.verify();

//     console.log("SMTP connection verified");

//     // Email to portfolio owner
//     const portfolioEmail = {
//       from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       replyTo: email,
//       subject: subject || "New Portfolio Contact Message",
//       html: EmailMessageTemplate({
//         name,
//         email,
//         subject,
//         message,
//       }),
//     };

//     // Thank-you email to visitor
//     const thankYouEmail = {
//       from: `"Vaibhav Parab" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Thank You for Visiting My Portfolio!",
//       html: `
//         <div style="
//           font-family: Arial, sans-serif;
//           max-width: 600px;
//           margin: auto;
//           padding: 30px;
//           background: #f8fafc;
//           border-radius: 10px;
//         ">
//           <h2 style="color: #2563eb;">
//             Thank You, ${name}! 🚀
//           </h2>

//           <p>
//             I have received your message and will get back to you
//             as soon as possible.
//           </p>

//           <br />

//           <p>
//             Best Regards,<br />
//             <strong>Vaibhav Parab</strong>
//           </p>
//         </div>
//       `,
//     };

//     // Send both emails
//     await transporter.sendMail(portfolioEmail);

//     console.log("Portfolio email sent");

//     await transporter.sendMail(thankYouEmail);

//     console.log("Thank-you email sent");

//     return {
//       success: true,
//       message: "Emails sent successfully",
//     };

//   } catch (error) {
//     console.error("Nodemailer Error:", error);

//     throw error;
//   }
// };



import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  console.log("================================");
  console.log("📧 SEND EMAIL STARTED");
  console.log("Visitor:", email);
  console.log("================================");

  try {
    console.log("🔍 Verifying SMTP connection...");

    await transporter.verify();

    console.log("✅ SMTP connection verified");

    const portfolioEmail = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject || "New Portfolio Contact Message",
      html: `
        <h2>New Portfolio Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    console.log("📤 Sending portfolio email...");

    const result1 = await transporter.sendMail(portfolioEmail);

    console.log("✅ Portfolio email sent");
    console.log("Message ID:", result1.messageId);

    const thankYouEmail = {
      from: `"Vaibhav Parab" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Visiting My Portfolio!",
      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: auto;
          padding: 30px;
          background: #f8fafc;
          border-radius: 10px;
        ">

          <h2 style="color: #2563eb;">
            Thank You, ${name}! 🚀
          </h2>

          <p>
            I have received your message and will get back to you
            as soon as possible.
          </p>

          <br />

          <p>
            Best Regards,<br />
            <strong>Vaibhav Parab</strong>
          </p>

        </div>
      `,
    };

    console.log("📤 Sending thank-you email...");

    const result2 = await transporter.sendMail(thankYouEmail);

    console.log("✅ Thank-you email sent");
    console.log("Message ID:", result2.messageId);

    return {
      success: true,
      message: "Emails sent successfully",
    };

  } catch (error) {
    console.error("================================");
    console.error("❌ NODEMAILER ERROR");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Command:", error.command);
    console.error("Response:", error.response);
    console.error("Response Code:", error.responseCode);
    console.error("Full error:", error);
    console.error("================================");

    throw error;
  }
};