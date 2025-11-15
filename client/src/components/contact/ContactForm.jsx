import FormInput from "../reusable/FormInput";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const onError = (errorMessage, error) => {
    console.error("Email error:", error);
    
    // Parse error message for better user experience
    let displayMessage = errorMessage || "Message not sent. Please try again.";
    
    // Handle specific EmailJS errors
    if (errorMessage && errorMessage.includes("Invalid grant")) {
      displayMessage = "Email service temporarily unavailable. Please contact me directly at sebejaz99@gmail.com or try again later.";
    } else if (errorMessage && errorMessage.includes("Gmail_API")) {
      displayMessage = "Email service configuration issue. Please contact me directly at sebejaz99@gmail.com.";
    } else if (errorMessage && errorMessage.includes("Service not found") || errorMessage.includes("Template not found")) {
      displayMessage = "Email service configuration error. Please contact me directly at sebejaz99@gmail.com.";
    }
    
    toast.error(displayMessage, {
      position: "top-center",
      autoClose: 6000,
    });
  };

  const onSuccess = (success) => {
    toast.success("Message sent to Jonas successfully!", {
      position: "top-center",
    });
    console.log("Email sent:", success);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form fields
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!name || !email || !subject || !message) {
      setIsLoading(false);
      onError("Please fill in all fields.");
      return;
    }
    
    emailjs
      .sendForm(
        "service_mk44hmb",
        "template_sb5r0yg",
        form.current,
        "VrfkLl3nzSOSIU9MB"
      )
      .then(
        (result) => {
          console.log("EmailJS result:", result);
          setIsLoading(false);
          if (result.status === 200) {
            onSuccess(result);
            e.target.reset();
          } else {
            onError("Failed to send message. Please try again.", result);
          }
        },
        (error) => {
          console.error("EmailJS error:", error);
          setIsLoading(false);
          
          // Extract error message from EmailJS error object
          let errorMessage = "";
          if (error.text) {
            errorMessage = error.text;
          } else if (error.message) {
            errorMessage = error.message;
          } else if (typeof error === 'string') {
            errorMessage = error;
          } else {
            errorMessage = "Please check your connection and try again.";
          }
          
          onError(errorMessage, error);
        }
      )
      .catch((error) => {
        console.error("Unexpected error:", error);
        setIsLoading(false);
        onError("An unexpected error occurred. Please try again later.", error);
      });
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
