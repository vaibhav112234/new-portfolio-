// // // utils/emailTemplate.js

// // export const EmailMessageTemplate = () => {
// //   // Fixed subject and message
// //   const subject = "Title of the mail";
// //   const message = `Thank you for signing up! We're excited to have you on board and look forward to serving you.
// //      My resume: www.facebook.com`;

// //   return `
// //       <!DOCTYPE html>
// //       <html lang="en">
// //       <head>
// //         <meta charset="UTF-8" />
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// //         <title>${subject}</title>
// //         <style>
// //       body {
// //         font-family: Arial, sans-serif;
// //         background-color: white;
// //         margin: 0;
// //         padding: 0;
// //       }
// //       .container {
// //         height: auto;
// //         background-color: rgb(221, 229, 255);
// //         border-radius: 10px;
// //         width: auto;
// //         padding: 10px;
// //         margin: 20px;
// //         box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
// //           rgba(0, 0, 0, 0.23) 0px 6px 6px;
// //       }

// //       .para {
// //         margin: 12px;
// //       }

// //       .text {
// //         font-size: 20px;
// //         color: black;
// //       }
// //     </style>
// //   </head>
// //   <body>
// //     <div class="container">
// //       <div class="para">
// //         <p class="text">${message}</p>
// //       </div>
// //     </div>
// //   </body>
// //       </html>
// //     `;
// // };



// export const EmailMessageTemplate = ({
//   name,
//   email,
//   subject,
//   message,
// }) => {
//   return `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//             background-color: #f4f4f4;
//             padding: 20px;
//           }

//           .container {
//             max-width: 600px;
//             margin: auto;
//             background: #ffffff;
//             padding: 30px;
//             border-radius: 10px;
//           }

//           h2 {
//             color: #2563eb;
//           }

//           .field {
//             margin-bottom: 15px;
//           }

//           .label {
//             font-weight: bold;
//             color: #333;
//           }

//           .value {
//             color: #555;
//             margin-top: 5px;
//           }

//           .message-box {
//             background: #f8fafc;
//             padding: 15px;
//             border-radius: 8px;
//             margin-top: 10px;
//             white-space: pre-wrap;
//           }
//         </style>
//       </head>

//       <body>
//         <div class="container">
//           <h2>New Portfolio Contact Message 🚀</h2>

//           <div class="field">
//             <div class="label">Name:</div>
//             <div class="value">${name}</div>
//           </div>

//           <div class="field">
//             <div class="label">Email:</div>
//             <div class="value">${email}</div>
//           </div>

//           <div class="field">
//             <div class="label">Subject:</div>
//             <div class="value">${subject}</div>
//           </div>

//           <div class="field">
//             <div class="label">Message:</div>

//             <div class="message-box">
//               ${message}
//             </div>
//           </div>
//         </div>
//       </body>
//     </html>
//   `;
// };





import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPortfolioEmails = async ({
  name,
  email,
  subject,
  message,
}) => {
  // Email sent to you
  const portfolioEmail = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: [process.env.EMAIL_USER],
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,

    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <style>
            body {
              margin: 0;
              padding: 0;
              background-color: #f4f4f5;
              font-family: Arial, Helvetica, sans-serif;
            }

            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            }

            .header {
              background: #111827;
              color: white;
              padding: 30px;
              text-align: center;
            }

            .header h1 {
              margin: 0;
              font-size: 24px;
            }

            .content {
              padding: 30px;
            }

            .row {
              margin-bottom: 20px;
            }

            .label {
              font-size: 13px;
              color: #6b7280;
              margin-bottom: 5px;
            }

            .value {
              font-size: 16px;
              color: #111827;
            }

            .message {
              background: #f9fafb;
              border-left: 4px solid #111827;
              padding: 15px;
              margin-top: 10px;
              white-space: pre-wrap;
            }

            .footer {
              padding: 20px 30px;
              background: #f9fafb;
              color: #6b7280;
              text-align: center;
              font-size: 12px;
            }
          </style>
        </head>

        <body>
          <div class="container">

            <div class="header">
              <h1>New Portfolio Contact</h1>
            </div>

            <div class="content">

              <div class="row">
                <div class="label">Name</div>
                <div class="value">${escapeHtml(name)}</div>
              </div>

              <div class="row">
                <div class="label">Email</div>
                <div class="value">${escapeHtml(email)}</div>
              </div>

              <div class="row">
                <div class="label">Subject</div>
                <div class="value">${escapeHtml(subject)}</div>
              </div>

              <div class="row">
                <div class="label">Message</div>

                <div class="message">
                  ${escapeHtml(message)}
                </div>
              </div>

            </div>

            <div class="footer">
              Sent from your portfolio contact form
            </div>

          </div>
        </body>
      </html>
    `,
  });

  if (portfolioEmail.error) {
    throw new Error(portfolioEmail.error.message);
  }

  // Thank-you email to visitor
  const thankYouEmail = await resend.emails.send({
    from: "Vaibhav <onboarding@resend.dev>",
    to: [email],
    subject: "Thank you for contacting me",

    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <style>
            body {
              margin: 0;
              padding: 0;
              background: #f4f4f5;
              font-family: Arial, Helvetica, sans-serif;
            }

            .container {
              max-width: 600px;
              margin: 40px auto;
              background: white;
              border-radius: 12px;
              overflow: hidden;
            }

            .header {
              background: #111827;
              color: white;
              text-align: center;
              padding: 30px;
            }

            .content {
              padding: 30px;
              color: #111827;
              line-height: 1.6;
            }

            .footer {
              background: #f9fafb;
              text-align: center;
              padding: 20px;
              color: #6b7280;
              font-size: 12px;
            }
          </style>
        </head>

        <body>

          <div class="container">

            <div class="header">
              <h1>Thank You!</h1>
            </div>

            <div class="content">

              <p>Hi ${escapeHtml(name)},</p>

              <p>
                Thank you for reaching out through my portfolio.
              </p>

              <p>
                I have received your message and will get back to you as soon as possible.
              </p>

              <p>
                Best regards,<br />
                <strong>Vaibhav</strong>
              </p>

            </div>

            <div class="footer">
              This is an automated response.
            </div>

          </div>

        </body>
      </html>
    `,
  });

  if (thankYouEmail.error) {
    console.error(
      "Thank-you email error:",
      thankYouEmail.error
    );
  }

  return {
    portfolioEmailId: portfolioEmail.data?.id,
    thankYouEmailId: thankYouEmail.data?.id,
  };
};


// Prevent HTML injection
function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}