// // utils/emailTemplate.js

// export const EmailMessageTemplate = () => {
//   // Fixed subject and message
//   const subject = "Title of the mail";
//   const message = `Thank you for signing up! We're excited to have you on board and look forward to serving you.
//      My resume: www.facebook.com`;

//   return `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>${subject}</title>
//         <style>
//       body {
//         font-family: Arial, sans-serif;
//         background-color: white;
//         margin: 0;
//         padding: 0;
//       }
//       .container {
//         height: auto;
//         background-color: rgb(221, 229, 255);
//         border-radius: 10px;
//         width: auto;
//         padding: 10px;
//         margin: 20px;
//         box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
//           rgba(0, 0, 0, 0.23) 0px 6px 6px;
//       }

//       .para {
//         margin: 12px;
//       }

//       .text {
//         font-size: 20px;
//         color: black;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="container">
//       <div class="para">
//         <p class="text">${message}</p>
//       </div>
//     </div>
//   </body>
//       </html>
//     `;
// };



export const EmailMessageTemplate = ({
  name,
  email,
  subject,
  message,
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }

          .container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            padding: 30px;
            border-radius: 10px;
          }

          h2 {
            color: #2563eb;
          }

          .field {
            margin-bottom: 15px;
          }

          .label {
            font-weight: bold;
            color: #333;
          }

          .value {
            color: #555;
            margin-top: 5px;
          }

          .message-box {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            margin-top: 10px;
            white-space: pre-wrap;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h2>New Portfolio Contact Message 🚀</h2>

          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>

          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>

          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${subject}</div>
          </div>

          <div class="field">
            <div class="label">Message:</div>

            <div class="message-box">
              ${message}
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};