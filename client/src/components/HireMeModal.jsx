import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from "react-toastify";

const selectOptions = [
  "Web2.0 Application",
  "Web3.0 Application",
  "UI/UX Design",
  "Web design",
  "Smart contract",
  "Databases",
  "Blockchain Related",
  "Digital Marketing",
  "Crypto Trading",
  "Web3.0 Consultancy",
  "Project Management",
  "Just a Talk",
];

const HireMeModal = ({ onClose, onRequest }) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const onError = (error) => {
    console.error("Email error:", error);
    
    // Parse error message for better user experience
    let errorMessage = "Message not sent. Please try again.";
    
    // Extract error text from EmailJS error object
    if (error && typeof error === 'object') {
      if (error.text) {
        errorMessage = error.text;
      } else if (error.message) {
        errorMessage = error.message;
      }
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    
    // Handle specific EmailJS errors
    if (errorMessage.includes("Invalid grant")) {
      errorMessage = "Email service temporarily unavailable. Please contact me directly at sebejaz99@gmail.com or try again later.";
    } else if (errorMessage.includes("Gmail_API")) {
      errorMessage = "Email service configuration issue. Please contact me directly at sebejaz99@gmail.com.";
    } else if (errorMessage.includes("Service not found") || errorMessage.includes("Template not found")) {
      errorMessage = "Email service configuration error. Please contact me directly at sebejaz99@gmail.com.";
    } else if (!errorMessage.includes("Message not sent")) {
      errorMessage = "Message not sent. " + errorMessage;
    }
    
    toast.error(errorMessage, {
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

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        'service_mk44hmb',
        'template_sb5r0yg',
        form.current,
        'VrfkLl3nzSOSIU9MB'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          onSuccess(result);
          e.target.reset();
          // Close modal after successful send (optional - you can remove this if you want to keep it open)
          setTimeout(() => {
            onClose();
          }, 2000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setIsLoading(false);
          onError(error);
        }
      )
      .catch((error) => {
        console.error("Unexpected error:", error);
        setIsLoading(false);
        onError("An unexpected error occurred. Please try again later.");
      });
  };
  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="font-general-medium fixed inset-0 z-[100] transition-all duration-300"
        onClick={onClose}
      >
        {/* Modal Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-black bg-opacity-60 backdrop-blur-sm fixed inset-0 w-full h-full"
        />

        {/* Modal Content - Slides up from bottom */}
        <div 
          className="fixed inset-0 flex items-end justify-center p-0 sm:p-4 overflow-y-auto z-[101] pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark shadow-2xl rounded-t-3xl sm:rounded-2xl overflow-hidden max-h-[90vh] pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className="text-primary-dark dark:text-primary-light text-xl font-bold">
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className="p-2 hover:bg-ternary-light dark:hover:bg-ternary-dark rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <FiX className="text-2xl text-primary-dark dark:text-primary-light" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <form
                onSubmit={sendEmail}
                ref={form}
                className="w-full text-left space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-dark dark:text-primary-light mb-2">
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-ternary-light dark:border-ternary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    id="name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Your name"
                    aria-label="Name"
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-dark dark:text-primary-light mb-2">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-ternary-light dark:border-ternary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    aria-label="Email address"
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-dark dark:text-primary-light mb-2">
                    Project Category
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-ternary-light dark:border-ternary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    id="subject"
                    name="subject"
                    required
                    aria-label="Project Category"
                    disabled={isLoading}
                  >
                    <option value="">Select a category</option>
                    {selectOptions.map((option) => (
                      <option className="text-normal sm:text-md" key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-dark dark:text-primary-light mb-2">
                    Project Description
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-ternary-light dark:border-ternary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
                    id="message"
                    name="message"
                    rows="6"
                    aria-label="Project description"
                    placeholder="Tell me about your project..."
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    aria-label="Submit Request"
                  >
                    {isLoading ? (
                      <>
                        <CircularProgress color="inherit" size="1.2rem" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Request</span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isLoading}
                    className="px-6 py-3 bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300"
                    aria-label="Close Modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AnimatePresence>
  );

  // Render modal using portal at document body level
  return createPortal(modalContent, document.body);
};

export default HireMeModal;
