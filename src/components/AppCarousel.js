import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { motion } from "framer-motion";

export default function AppCarousel() {
  const carouselData = [
    {
      header: "Own the Streets",
      description:
        "Bold, Filipino-inspired streetwear that lets you stand out and rep your roots.",
      image: "/CarouselImages/carousel-1.jpg",
    },
    {
      header: "Manila Vibes, Global Style",
      description:
        "Authentic streetwear inspired by Manilas culture, wherever you are.",
      image: "/CarouselImages/carousel-2.jpg",
    },
    {
      header: "Filipino Pride, Street Cool",
      description:
        "Street style rooted in Filipino tradition. Fearless, creative, and proud.",
      image: "/CarouselImages/carousel-3.jpg",
    },
  ];

  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          exit={{ scale: 1, opacity: 0 }}
          transition={{ duration: 5 }}
        >
          <Image src={carouselData[0].image} fluid />
        </motion.div>
        <Carousel.Caption>
          <h1 className="fw-bolder">{carouselData[0].header}</h1>
          <p>{carouselData[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 5 }}
        >
          <Image src={carouselData[1].image} fluid />
        </motion.div>
        <Carousel.Caption>
          <h1 className="fw-bolder">{carouselData[1].header}</h1>
          <p>{carouselData[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 5 }}
        >
          <Image src={carouselData[2].image} fluid />
        </motion.div>
        <Carousel.Caption>
          <h1 className="fw-bolder">{carouselData[2].header}</h1>
          <p>{carouselData[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
