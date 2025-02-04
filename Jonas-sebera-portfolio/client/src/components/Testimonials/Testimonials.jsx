import React, { useCallback, useRef, useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SingleTestimonial from "./SingleTestimonial";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3); // Large screens
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2); // Medium screens
      } else {
        setSlidesPerView(1); // Small screens
      }
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, [slidesPerView]);

  const testimonials = [
    {
      image:
        "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg",
      reviewAlt: "High Commitment",
      details:
        "Their services exceeded my expectations in every way. i liked the way they stayed attached to me even after the completion of work.",
      name: "Gerard Bannet",
      position: "Marketing Manager",
      rating: 5,
    },
    {
      image:
        "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-02/image-01.jpg",
      reviewAlt: "Professionals",
      details:
        "Just wow! I was just  impressed by the way they handled every situatuon that required great expertise. I'm really satisfied!",
      name: "Janet Allison",
      position: "CEO",
      rating: 4,
    },
    {
      image:
        "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-05/image-01.jpg",
      reviewAlt: "Best definition of Impression",
      details:
        "I was impressed by the quality of their work. The delivery was timely and with exceptional attention to detail.",
      name: "Jackson Deborde",
      position: "Product Manager",
      rating: 5,
    },
    {
      image:
        "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg",
      reviewAlt: "Outstanding Team",
      details:
        "Working with this team was a pleasure. Their creativity and expertise were evident throughout the project. I'm grateful for their support!",
      name: "John Williams",
      position: "Creative Director",
      rating: 5,
    },
    {
      image:
        "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-05/image-01.jpg",
      reviewAlt: "Highly Recommended",
      details:
        "I highly recommend their services. They have a talented team that goes above and beyond to meet client needs. You won't be disappointed!",
      name: "Allen Broony",
      position: "COO",
      rating: 4,
    },
  ];

  return (
    <>
      <section className="pt-5 pb-5 lg:pt-[12px] lg:pb-[12px] relative my-10">
        <section>
          <h4 className="mb-8 font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light md:text-center 3xsm:4xsm:text-xl">
            Testimonials
          </h4>
        </section>
        <div className="absolute z-50 top-[-85%] right-0 bottom-0 flex items-center justify-center lg:pl-[120px] 2xl:pl-0">
          <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
            <button className="text-primary hover:bg-blue-500 shadow-input mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 transition-all hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M15.41 7.41l-4.83 4.83 4.83 4.83L14 18l-6-6 6-6 1.41 1.41z" />
              </svg>
            </button>
          </div>
          <div className="next-arrow cursor-pointer" onClick={handleNext}>
            <button className="text-primary hover:bg-blue-500 shadow-input mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 transition-all hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M10.59 16.41l4.83-4.83-4.83-4.83L12 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          ref={sliderRef}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="pb-[4rem]">
              <SingleTestimonial {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
