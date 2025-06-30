import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nkpc7p7",      // replace with your actual EmailJS service ID
        "template_ztr3b76",     // replace with your actual EmailJS template ID
        form.current,
        "NBLr1uGWnoKcJ8uIJ"       // replace with your actual EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Message Sent!", "Thanks for reaching out.", "success");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          Swal.fire("Error", "Something went wrong. Try again later.", "error");
        }
      );
  };

  return (
    <section id="contact" className=" py-20 ">
      <h2 className="text-4xl font-semibold text-center  mb-20">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold">Let's Connect</h3>
          <p className="">
            Feel free to reach out via email or social links below.
          </p>
          <div className="space-y-3 ">
            <p className="flex items-center gap-3"><FaEnvelope className="" /> ms7398037@gmail.com</p>
            <p className="flex items-center gap-3"><FaPhone className="" /> +880 1614842054</p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="" /> Dhaka, Bangladesh</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/Sabbir-Hossain-00" target="_blank"><FaGithub className="text-2xl " /></a>
            <a href="https://www.linkedin.com/in/sabbir-hossain-0595b1301/" target="_blank"><FaLinkedin className="text-2xl :" /></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-black">
          <form ref={form} onSubmit={sendEmail} className="space-y-5 text-black">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" required />
              <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input input-bordered w-full" required />
            <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered w-full h-32" required />
            <button type="submit" className="btn bg-green-500 border-none shadow-none w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

