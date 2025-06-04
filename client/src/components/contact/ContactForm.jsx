import FormInput from "../reusable/FormInput";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onError = (error) =>
    toast.error(error, {
      position: "top-center",
    });

  const onSuccess = (success) =>
    toast.success(success, {
      position: "top-center",
    });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_mk44hmb",
        "template_sb5r0yg",
        form.current,
        "VrfkLl3nzSOSIU9MB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          onSuccess("Message sent to Jonas Successfully", result);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          onError("Message not sent", error);
          console.log("Message not sent!", error);
        }
      );
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={sendEmail}
          ref={form}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium  dark:text-[#999] text-2xl mb-8 font-bold text-[#999]">
            Connect With Me
          </p>
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="user_name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="user_email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              inputType="text"
              cols="15"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          <div className="font-general-medium flex items-center justify-center min-w-fit w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-[#999] hover:bg-[#9999] focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            {!isLoading && <button type="submit">Send Message</button>}
            {isLoading && <CircularProgress color="inherit" size={"1.5rem"} />}
          </div>
        </form>
      </div>
      <ToastContainer theme={"light"} />
    </div>
  );
};

export default ContactForm;
