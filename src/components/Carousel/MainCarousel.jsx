import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';

const CarouselWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin: 2rem 0;
`;

const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const ModelImage = styled.img`
  max-width: 100%;
  max-height: 70%;
  object-fit: contain;
`;

const ModelInfo = styled.div`
  text-align: center;
  margin-top: 1rem;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
`;

// Временные данные для тестирования
const mockModels = [
  {
    id: 1,
    name: "Tube Fitting",
    description: "High-pressure tube fitting",
    thumbnail: "https://via.placeholder.com/400x300?text=Tube+Fitting"
  },
  {
    id: 2,
    name: "Ball Valve",
    description: "Standard ball valve",
    thumbnail: "https://via.placeholder.com/400x300?text=Ball+Valve"
  },
  {
    id: 3,
    name: "Check Valve",
    description: "One-way check valve",
    thumbnail: "https://via.placeholder.com/400x300?text=Check+Valve"
  }
];

const MainCarousel = () => {
  return (
    <CarouselWrapper>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {mockModels.map((model) => (
          <SwiperSlide key={model.id}>
            <SlideContent>
              <ModelImage src={model.thumbnail} alt={model.name} />
              <ModelInfo>
                <h3>{model.name}</h3>
                <p>{model.description}</p>
              </ModelInfo>
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
  );
};

export default MainCarousel; 