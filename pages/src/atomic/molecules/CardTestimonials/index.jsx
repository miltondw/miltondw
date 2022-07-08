import Image from "next/image";
import { SwiperSlide } from "swiper/react";
const CardTestimonials = ({ image, name, testimonial }) => {
  return (
    <SwiperSlide className="testimonial">
      <div className="client__avatar">
        <Image src={image} alt={name} width={100} height={100} />
      </div>
      <h5 className="client__name">{name}</h5>
      <small className="client__review">{testimonial}</small>
    </SwiperSlide>
  );
};

export default CardTestimonials;
