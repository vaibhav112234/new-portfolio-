// // import { motion } from "framer-motion";
// // import {
// //   FaEnvelope,
// //   FaPhoneAlt,
// //   FaMapMarkerAlt,
// //   FaGithub,
// //   FaLinkedin,
// // } from "react-icons/fa";

// // export default function Contact() {
// //   return (
// //     <section
// //       id="contact"
// //       className="relative py-28 bg-slate-950 overflow-hidden"
// //     >
// //       {/* Background Glow */}

// //       <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />

// //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />

// //       <div className="relative z-10 max-w-7xl mx-auto px-6">

// //         {/* Heading */}

// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: .6 }}
// //           className="text-center mb-20"
// //         >
// //           <p className="uppercase tracking-[5px] text-blue-400">
// //             Contact
// //           </p>

// //           <h2 className="text-5xl font-bold text-white mt-4">
// //             Let's Work Together
// //           </h2>

// //           <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
// //             Have a project in mind or looking for a Full Stack Developer?
// //             I'd love to hear from you.
// //           </p>
// //         </motion.div>

// //         <div className="grid lg:grid-cols-2 gap-14">

// //           {/* Left Side */}

// //           <motion.div
// //             initial={{ opacity: 0, x: -80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: .7 }}
// //           >

// //             <div className="space-y-6">

// //               {/* Email */}

// //               <div className="group flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition-all">

// //                 <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
// //                   <FaEnvelope />
// //                 </div>

// //                 <div>
// //                   <h4 className="text-white font-semibold">
// //                     Email
// //                   </h4>

// //                   <p className="text-slate-400">
// //                     vaibhav21102001@gmail.com
// //                   </p>
// //                 </div>

// //               </div>

// //               {/* Phone */}

// //               <div className="group flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition-all">

// //                 <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
// //                   <FaPhoneAlt />
// //                 </div>

// //                 <div>
// //                   <h4 className="text-white font-semibold">
// //                     Phone
// //                   </h4>

// //                   <p className="text-slate-400">
// //                     +91 9309814992
// //                   </p>
// //                 </div>

// //               </div>

// //               {/* Location */}

// //               <div className="group flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition-all">

// //                 <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
// //                   <FaMapMarkerAlt />
// //                 </div>

// //                 <div>
// //                   <h4 className="text-white font-semibold">
// //                     Location
// //                   </h4>

// //                   <p className="text-slate-400">
// //                     Mumbai, Maharashtra
// //                   </p>
// //                 </div>

// //               </div>

// //               {/* Social */}

// //               <div className="flex gap-5 pt-5">

// //                 <a
// //                   href="https://github.com/vaibhav112234"
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="w-14 h-14 rounded-full bg-white/5 border text-white border-white/10 flex items-center justify-center text-2xl hover:bg-blue-600 transition"
// //                 >
// //                   <FaGithub />
// //                 </a>

// //                 <a
// //                   href="https://www.linkedin.com/in/vaibhav-parab-75500a200/"
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="w-14 h-14 rounded-full bg-white/5 border text-white border-white/10 flex items-center justify-center text-2xl hover:bg-blue-600 transition"
// //                 >
// //                   <FaLinkedin />
// //                 </a>

// //               </div>

// //             </div>

// //           </motion.div>

// //           {/* Right Side */}

// //           <motion.form
// //             initial={{ opacity: 0, x: 80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: .7 }}
// //             className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
// //           >

// //             <div className="grid md:grid-cols-2 gap-5">

// //               <input
// //                 type="text"
// //                 placeholder="Your Name"
// //                 className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
// //               />

// //               <input
// //                 type="email"
// //                 placeholder="Your Email"
// //                 className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
// //               />

// //             </div>

// //             <input
// //               type="text"
// //               placeholder="Subject"
// //               className="w-full mt-5 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
// //             />

// //             <textarea
// //               rows="6"
// //               placeholder="Your Message"
// //               className="w-full mt-5 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 resize-none"
// //             />

// //             <motion.button
// //               whileHover={{
// //                 scale: 1.05,
// //               }}
// //               whileTap={{
// //                 scale: .95,
// //               }}
// //               className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white -xl py-4 font-semibold text-lg transition"
// //             >
// //               Send Message 🚀
// //             </motion.button>

// //           </motion.form>

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }


// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";
// import { Email } from "../API/ApiURL";



// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState({
//     type: "",
//     message: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       setStatus({
//         type: "",
//         message: "",
//       });

//       // Your required API request body
//       const payload = {
//         recipients: "parabvaibhav513@gmail.com",
//       };

//       const response = await Email(payload);

//       console.log("Email response:", response.data);

//       setStatus({
//         type: "success",
//         message: "Message sent successfully! 🚀",
//       });

//       // Clear form after successful email
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Email error:", error);

//       setStatus({
//         type: "error",
//         message:
//           error.response?.data?.message ||
//           "Failed to send message. Please try again.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative py-28 bg-slate-950 overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />

//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <p className="uppercase tracking-[5px] text-blue-400">
//             Contact
//           </p>

//           <h2 className="text-5xl font-bold text-white mt-4">
//             Let's Work Together
//           </h2>

//           <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
//             Have a project in mind or looking for a Full Stack Developer?
//             I'd love to hear from you.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-14">
//           {/* Left Side */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="space-y-6">
//               {/* Email */}
//               <div className="group flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition-all">
//                 <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
//                   <FaEnvelope />
//                 </div>

//                 <div>
//                   <h4 className="text-white font-semibold">Email</h4>

//                   <p className="text-slate-400">
//                     vaibhav21102001@gmail.com
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="group flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition-all">
//                 <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
//                   <FaPhoneAlt />
//                 </div>

//                 <div>
//                   <h4 className="text-white font-semibold">Phone</h4>

//                   <p className="text-slate-400">
//                     +91 9309814992
//                   </p>
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="group flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition-all">
//                 <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
//                   <FaMapMarkerAlt />
//                 </div>

//                 <div>
//                   <h4 className="text-white font-semibold">Location</h4>

//                   <p className="text-slate-400">
//                     Mumbai, Maharashtra
//                   </p>
//                 </div>
//               </div>

//               {/* Social */}
//               <div className="flex gap-5 pt-5">
//                 <a
//                   href="https://github.com/vaibhav112234"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="w-14 h-14 rounded-full bg-white/5 border text-white border-white/10 flex items-center justify-center text-2xl hover:bg-blue-600 transition"
//                 >
//                   <FaGithub />
//                 </a>

//                 <a
//                   href="https://www.linkedin.com/in/vaibhav-parab-75500a200/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="w-14 h-14 rounded-full bg-white/5 border text-white border-white/10 flex items-center justify-center text-2xl hover:bg-blue-600 transition"
//                 >
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Side - Contact Form */}
//           <motion.form
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
//           >
//             <div className="grid md:grid-cols-2 gap-5">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 required
//                 className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email"
//                 required
//                 className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
//               />
//             </div>

//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               placeholder="Subject"
//               required
//               className="w-full mt-5 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
//             />

//             <textarea
//               rows="6"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//               required
//               className="w-full mt-5 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 resize-none"
//             />

//             {/* Status Message */}
//             {status.message && (
//               <p
//                 className={`mt-4 text-sm ${
//                   status.type === "success"
//                     ? "text-green-400"
//                     : "text-red-400"
//                 }`}
//               >
//                 {status.message}
//               </p>
//             )}

//             <motion.button
//               type="submit"
//               disabled={loading}
//               whileHover={{
//                 scale: loading ? 1 : 1.05,
//               }}
//               whileTap={{
//                 scale: loading ? 1 : 0.95,
//               }}
//               className="mt-6 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 disabled:cursor-not-allowed text-white rounded-xl py-4 font-semibold text-lg transition"
//             >
//               {loading ? "Sending..." : "Send Message 🚀"}
//             </motion.button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Email } from "../API/ApiURL";

// import { Email } from "../services/Email";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      const response = await Email(payload);

      console.log("Email sent successfully:", response.data);

      setSuccessMessage(
        "Your message has been sent successfully! I'll get back to you soon. 🚀"
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);

      setErrorMessage(
        error?.response?.data?.message ||
          "Failed to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-blue-400">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Let's Work Together
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or looking for a Full Stack Developer?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              {/* Email */}

              <div className="group flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition-all">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Email
                  </h4>

                  <p className="text-slate-400">
                    parabvaibhav513@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="group flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition-all">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>

                  <p className="text-slate-400">
                    +91 9309814992
                  </p>
                </div>
              </div>

              {/* Location */}

              <div className="group flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition-all">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Location
                  </h4>

                  <p className="text-slate-400">
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>

              {/* Social Links */}

              <div className="flex gap-5 pt-5">
                <motion.a
                  href="https://github.com/vaibhav112234"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full bg-white/5 border text-white border-white/10 flex items-center justify-center text-2xl hover:bg-blue-600 transition"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/vaibhav-parab-75500a200/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full bg-white/5 border text-white border-white/10 flex items-center justify-center text-2xl hover:bg-blue-600 transition"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Contact Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            {/* Name + Email */}

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                disabled={loading}
                className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 disabled:opacity-60"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                disabled={loading}
                className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 disabled:opacity-60"
              />
            </div>

            {/* Subject */}

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              disabled={loading}
              className="w-full mt-5 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 disabled:opacity-60"
            />

            {/* Message */}

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              disabled={loading}
              className="w-full mt-5 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 resize-none disabled:opacity-60"
            />

            {/* Success Message */}

            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-400"
              >
                {successMessage}
              </motion.div>
            )}

            {/* Error Message */}

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400"
              >
                {errorMessage}
              </motion.div>
            )}

            {/* Submit Button */}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: loading ? 1 : 1.03,
              }}
              whileTap={{
                scale: loading ? 1 : 0.97,
              }}
              className="mt-6 w-full rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 disabled:cursor-not-allowed text-white py-4 font-semibold text-lg transition"
            >
              {loading ? "Sending Message..." : "Send Message 🚀"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}