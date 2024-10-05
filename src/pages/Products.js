import { Container, Row } from "react-bootstrap";
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PreviewProducts from "../components/PreviewProducts";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/product/active`)
      .then((res) => res.json())
      .then((data) => {
        const numbers = [];
        const featured = [];

        const generateRandomNums = () => {
          let randomNum = Math.floor(Math.random() * data.length);

          if (numbers.indexOf(randomNum) === -1) {
            numbers.push(randomNum);
          } else {
            generateRandomNums();
          }
        };

        for (let i = 0; i < 3; i++) {
          generateRandomNums();

          featured.push(
            <SwiperSlide>
              <PreviewProducts
                data={data[numbers[i]]}
                key={data[numbers[i]]._id}
              />
            </SwiperSlide>
          );
        }
        setProducts(featured);
      });
  }, []);
  return (
    <Container className="my-5">
      <Row className="mb-2">
        <h1 className="fw-bolder">Featured Products</h1>
      </Row>
      <Row>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {products}
        </Swiper>
      </Row>
    </Container>
  );
}
