import React from "react";
import CardTestimonials from "../../molecules/CardTestimonials";
//Slider
import { Pagination } from "swiper";
import { Swiper } from "swiper/react";



const Testimonials = () => {
  const testimonials = [
    {
      img: "/assets/avatar1.jpg",
      name: "Avatar",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quasi tempora saepe aperiam quo dolore deleniti, neque maiores ut corrupti nisi ea, cumque impedit? ",
      id: 0,
    },
    {
      img: "/assets/avatar2.jpg",
      name: "Avatar",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quasi tempora saepe aperiam quo dolore deleniti, neque maiores ut corrupti nisi ea, cumque impedit? ",
      id: 1,
    },
    {
      img: "/assets/avatar3.jpg",
      name: "Avatar",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quasi tempora saepe aperiam quo dolore deleniti, neque maiores ut corrupti nisi ea, cumque impedit? ",
      id: 2,
    },
    {
      img: "/assets/avatar4.jpg",
      name: "Avatar",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quasi tempora saepe aperiam quo dolore deleniti, neque maiores ut corrupti nisi ea, cumque impedit? ",
      id: 3,
    },
  ];
  return (
    <section id="testimonials">
      <h2>Testimonios</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {testimonials.map((testimonial) => (
          <CardTestimonials
            image={testimonial.img}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            key={testimonial.id}
          />
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
